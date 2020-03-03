import { Language } from "../LanguageDefs";

const Javascript: Language = {
    name: "Javascript",
    types: {
        title: "Types",
        numeric: require("./types/numeric.md"),
        classes: require("./types/classes.md"),
    }
}

export default Javascript