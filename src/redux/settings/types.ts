import { Theme } from "@material-ui/core"

export const SET_VISUAL_THEME = 'SET_VISUAL_THEME'
export const SET_CODE_THEME = 'SET_CODE_THEME'

export interface SettingsState {
    visualTheme: Theme,
    codeTheme: any
}

interface SetVisualTheme {
    type: typeof SET_VISUAL_THEME
    theme: Theme
}
interface SetCodeTheme {
    type: typeof SET_CODE_THEME
    theme: any
}

export type SettingsActionTypes = SetVisualTheme | SetCodeTheme;