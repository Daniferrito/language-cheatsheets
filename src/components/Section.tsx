import React, { useEffect, createRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

interface SectionProps {
  section: string;
  setHeight: (height: number) => void;
  minHeight: number;
}

function Section(props: SectionProps) {
  const [markdown, setMarkdown] = useState("");
  const ref = createRef<HTMLDivElement>();
  useEffect(() => {
    if (ref.current !== null) {
      props.setHeight(ref.current.clientHeight);
    }
  }, [props, ref]);

  useEffect(() => {
    fetch(props.section)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkdown(text);
      });
  });

  return (
    <div ref={ref} style={{minHeight: props.minHeight}}>
      <ReactMarkdown source={markdown} renderers={{ code: CodeBlock }}/>
    </div>
  );
}

export default Section;
