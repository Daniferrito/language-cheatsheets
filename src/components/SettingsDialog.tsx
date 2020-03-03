import React from "react";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Theme,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/RootReducer";
import LightTheme from "../styles/themes/LightTheme";
import DarkTheme from "../styles/themes/DarkTheme";
import { setVisualTheme, setCodeTheme } from "../redux/settings/actions";
import availableCodeThemes from "../styles/codeThemes";

const availableThemes: { [key: string]: Theme } = {
  Light: LightTheme,
  Dark: DarkTheme
};

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SettingsDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  const handleThemeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setVisualTheme(availableThemes[event.target.value as string]));
  };

  const handleCodeThemeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
      console.log(event.target.value as string)
      console.log(availableCodeThemes[event.target.value as string])
    dispatch(setCodeTheme(availableCodeThemes[event.target.value as string]));
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Settings</DialogTitle>
      <List>
        <ListItem>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Theme</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={
                Object.entries(availableThemes).find(
                  ([key, value]) => value === settings.visualTheme
                )?.[0]
              }
              onChange={handleThemeChange}
            >
              {Object.entries(availableThemes).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Theme</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={
                Object.entries(availableCodeThemes).find(
                  ([, value]) => value === settings.codeTheme
                )?.[0]
              }
              onChange={handleCodeThemeChange}
            >
              {Object.entries(availableCodeThemes).map(([key]) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SettingsDialog;
