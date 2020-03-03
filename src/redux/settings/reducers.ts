import { SettingsActionTypes, SettingsState, SET_VISUAL_THEME, SET_CODE_THEME } from "./types";
import DarkTheme from "../../styles/themes/DarkTheme";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const initialState: SettingsState = {
    visualTheme: DarkTheme,
    codeTheme: darcula
}

export function settingsReducer(
    state = initialState,
    action: SettingsActionTypes
) {
    switch (action.type) {
        case SET_VISUAL_THEME:
            return {
                ...state,
                visualTheme: action.theme
            }
        case SET_CODE_THEME:
            console.log("Setting theme code")
            return {
                ...state,
                codeTheme: action.theme
            }
        default:
            return state;
    }
}