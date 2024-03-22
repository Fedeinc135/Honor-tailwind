"use server"

import { promises as fs } from "fs"
import { tmpdir } from "os"
import path from "path"
import { Index } from "@/__registry__"
import { Project, ScriptKind, SourceFile, SyntaxKind } from "ts-morph"
import { z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import { blockSchema, registryEntrySchema } from "@/registry/schema"
import { Style } from "@/registry/styles"

const DEFAULT_BLOCKS_STYLE = "default" satisfies Style["name"]

const project = new Project({
  compilerOptions: {},
})

export async function getAllBlockIds(
  style: Style["name"] = DEFAULT_BLOCKS_STYLE
) {
  const blocks = await _getAllBlocks(style)
  return blocks.map((block) => block.name)
}

export async function getBlock(
  name: string,
  style: Style["name"] = DEFAULT_BLOCKS_STYLE
) {
  const entry = Index[style][name]

  const content = await _getBlockContent(name, style)

  return blockSchema.parse({
    style,
    highlightedCode: content.code ? await highlightCode(content.code) : "",
    ...entry,
    ...content,
    type: "components:block",
  })
}

async function _getAllBlocks(style: Style["name"] = DEFAULT_BLOCKS_STYLE) {
  const index = z.record(registryEntrySchema).parse(Index[style])

  return Object.values(index).filter(
    (block) => block.type === "components:block"
  )
}

async function _getBlockCode(
  name: string,
  style: Style["name"] = DEFAULT_BLOCKS_STYLE
) {
  const entry = Index[style][name]
  const block = registryEntrySchema.parse(entry)

  const filepath = path.join(process.cwd(), block.files[0])
  return await fs.readFile(filepath, "utf-8")
}

async function _getBlockContent(name: string, style: Style["name"]) {
  async function createTempSourceFile(filename: string) {
    const dir = await fs.mkdtemp(path.join(tmpdir(), "codex-"))
    return path.join(dir, filename)
  }

  const raw = await _getBlockCode(name, style)

  const tempFile = await createTempSourceFile(`${name}.tsx`)
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  })

  // Extract meta.
  const description = _extractVariable(sourceFile, "description")
  const iframeHeight = _extractVariable(sourceFile, "iframeHeight")
  const containerClassName = _extractVariable(sourceFile, "containerClassName")

  // Format the code.
  let code = sourceFile.getText()
  code = code.replaceAll(`@/registry/${style}/`, "@/components/")
  code = code.replaceAll("export default", "export")

  return {
    description,
    code,
    container: {
      height: iframeHeight,
      className: containerClassName,
    },
  }
}

function _extractVariable(sourceFile: SourceFile, name: string) {
  const variable = sourceFile.getVariableDeclaration(name)
  if (!variable) {
    return null
  }

  const value = variable
    .getInitializerIfKindOrThrow(SyntaxKind.StringLiteral)
    .getLiteralValue()

  variable.remove()

  return value
}
