import { promises as fs } from "fs"
import path from "path"
import { getHighlighter } from "shiki"

export async function highlightCode(code: string) {
  const editorTheme = await fs.readFile(
    path.join(process.cwd(), "lib/themes/dark.json"),
    "utf-8"
  )

  const highlighter = await getHighlighter({
    langs: ["typescript"],
    themes: [],
  })

  await highlighter.loadTheme(JSON.parse(editorTheme))

  const html = await highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "Lambda Studio — Blackout",
  })

  return html
}