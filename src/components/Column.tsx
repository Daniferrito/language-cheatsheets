import React from "react";
import { Language } from "../contents/LanguageDefs";
import Section from "./Section";
import { Typography } from "@material-ui/core";

interface ColumnProps {
  language: Language;
  sectionHeights: number[]
  setSectionHeights: React.Dispatch<React.SetStateAction<number[]>>
}

function Column(props: ColumnProps) {
  const contents = [
    props.language.types.numeric,
    props.language.types.classes,
  ];

  //const [sectionHeights, setSectionHeights] = useState(contents.map(() => 0));

  const setSectionHeight = (sectionIndex: number) => (height: number) => {
    if(props.sectionHeights[sectionIndex] < height){
        const sectionHeights = [...props.sectionHeights]
        sectionHeights[sectionIndex] = height;
        props.setSectionHeights(sectionHeights);
    }else{
    }
  };

  return (
    <div>
    <Typography variant="h1">{props.language.name}</Typography>
      <Typography variant="h3">{props.language.types.title}</Typography>
      {contents.map((sectionFile, i) => (
        <Section
          key={i}
          section={sectionFile}
          setHeight={setSectionHeight(i)}
          minHeight={props.sectionHeights[i]}
        />
      ))}
    </div>
  );
}

export default Column;
