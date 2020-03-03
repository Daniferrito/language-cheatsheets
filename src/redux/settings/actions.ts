import { Theme } from "@material-ui/core";

import { SettingsActionTypes, SET_VISUAL_THEME, SET_CODE_THEME } from "./types";

export function setVisualTheme(theme: Theme): SettingsActionTypes {
    return {
        type: SET_VISUAL_THEME,
        theme
    }
}

export function setCodeTheme(theme: any): SettingsActionTypes {
    return {
        type: SET_CODE_THEME,
        theme
    }
}