import { settingsReducer } from './settings/reducers'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
  settings: settingsReducer
})

export type RootState = ReturnType<typeof RootReducer>
export default RootReducer