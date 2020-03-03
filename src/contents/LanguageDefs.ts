import Typescript from "./typescript/Typescript";
import Javascript from "./javascript/Javascript";
import Section from "../components/Section";

export interface Language {
    name: string
    types: TypeSection
}

export interface Section {
    title: string
    [subsection: string]: string
}

export interface TypeSection extends Section {
    numeric: string,
    classes: string,
}

const languages: Language[] = [Typescript, Javascript];

export default languages;