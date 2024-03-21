import React from "react"

import CodeBlock from "@/registry/new-york/ui/code-block"

const CodeBlockDemo = () => {
  return (
    <CodeBlock
      code={`function helloWorld() {
      console.log('Hello, World!');
    }
    
    helloWorld();`}
      language="javascript"
      hljsProps={{ showLineNumbers: true, showInlineLineNumbers: false }}
    />
  )
}

export default CodeBlockDemo
