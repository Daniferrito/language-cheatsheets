import { Language } from "../LanguageDefs";

const Typescript: Language = {
    name: "Typescript",
    types: {
        title: "Types",
        numeric: require("./types/numeric.md"),
        classes: require("./types/classes.md"),
    }
}

export default Typescript