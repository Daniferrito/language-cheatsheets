import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Column from "./Column";
import { Language } from "../contents/LanguageDefs";

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  element: {
    flex: 1,
    margin: 10
  }
});

interface ColumnCoordinatorProps {
  languages: Language[];
}

function ColumnCoordinator(props: ColumnCoordinatorProps) {
  const classes = useStyles();

  const languages = props.languages;
  const [sectionHeights, setSectionHeights] = useState([0, 0, 0]);

  useEffect(()=>{
    setSectionHeights([0,0,0])
  }, [props.languages])

  return (
    <div className={classes.root}>
      {languages.map((language, i) => (
        <div key={i} className={classes.element}>
          <Column
            language={language}
            sectionHeights={sectionHeights}
            setSectionHeights={setSectionHeights}
          />
        </div>
      ))}
    </div>
  );
}

export default ColumnCoordinator;
