import React, { useState, FunctionComponent } from "react";
import clsx from "clsx";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ColumnCoordinator from "./components/ColumnCoordinator";

import definedLanguages from "./contents/LanguageDefs";
import {
  CssBaseline,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from "@material-ui/core";
import SettingsDialog from "./components/SettingsDialog";
import { useSelector } from "react-redux";
import { RootState } from "./redux/RootReducer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarShiftRight: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerHeaderRight: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  contentShiftRight: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

//const allLanguages = ["Java", "JavaScript"];
const sections = ["introduction", "helloworld", "constants"];

interface LanguagesMap {
  [language: string]: boolean;
}
const allLanguagesDisabled: LanguagesMap = definedLanguages.reduce(
  (acc, lang) => ({ ...acc, [lang.name]: false }),
  {}
);

const App: FunctionComponent = props => {
  const classes = useStyles();
  const theme = useSelector((state: RootState) => state.settings.visualTheme);

  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [languages, setLanguages] = useState({...allLanguagesDisabled, [definedLanguages[0].name]: true});
  const [section, setSection] = useState(sections[0]);

  const handleDrawerOpen = () => {
    setLeftOpen(true);
  };

  const handleDrawerClose = () => {
    setLeftOpen(false);
  };

  const handleRightDrawerOpen = () => {
    setRightOpen(true);
  };

  const handleRightDrawerClose = () => {
    setRightOpen(false);
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const setSectionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
  };

  const handleLanguageChange = (language: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setLanguages({ ...languages, [language]: checked });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: leftOpen,
            [classes.appBarShiftRight]: rightOpen
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, leftOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              Title
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open settings"
              edge="end"
              onClick={handleSettingsOpen}
            >
              <SettingsIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open right drawer"
              edge="end"
              onClick={handleRightDrawerOpen}
              className={clsx(rightOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={leftOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {sections.map((text, index) => (
              <ListItem button key={text} onClick={setSectionClick}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: leftOpen,
            [classes.contentShiftRight]: rightOpen
          })}
        >
          <div className={classes.drawerHeader} />
          <ColumnCoordinator
            languages={definedLanguages.filter(
              language => languages[language.name]
            )}
          />
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={rightOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeaderRight}>
            <IconButton onClick={handleRightDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose a language</FormLabel>
            <FormGroup>
              {Object.entries(languages).map(([language, state]) => (
                <FormControlLabel
                  key={language}
                  control={
                    <Checkbox
                      onChange={handleLanguageChange(language)}
                      value={language}
                      checked={state}
                    />
                  }
                  label={language}
                />
              ))}
            </FormGroup>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Drawer>
        <SettingsDialog open={settingsOpen} onClose={handleSettingsClose} />
      </div>
    </ThemeProvider>
  );
};

export default App;
