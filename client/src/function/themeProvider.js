import React, { useCallback } from "react";
import { lightTheme, darkTheme } from "../css/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "./store";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeProvider = ({ children }) => {
    const themeMode = useSelector((store) => store.screenMode.themeMode);

    const themeObject = themeMode === "light" ? lightTheme : darkTheme;

    return <StyledProvider theme={themeObject}>{children}</StyledProvider>;
};

function useTheme() {
    const themeMode = useSelector((store) => store.screenMode.themeMode);
    const dispatch = useDispatch();

    const toggleTheme = useCallback(() => {
        if (themeMode === "light") {
            dispatch(darkMode());
        } else {
            dispatch(lightMode());
        }
    }, [themeMode]);

    return [themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
