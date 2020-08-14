import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  value,
  language
}) => (
  <div data-module="codeblock">
    <SyntaxHighlighter language={language} style={atomDark}>
      {value}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlock;
