import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";

interface CodeBlockProps {
    value: string;
    language?: string;
}

function CodeBlock(props: CodeBlockProps) {
    const { language, value } = props;

    const codeStyle = useSelector((state: RootState) => state.settings.codeTheme);

    return (
        <SyntaxHighlighter language={language} style={codeStyle}>
          {value}
        </SyntaxHighlighter>
      );
}

export default CodeBlock;