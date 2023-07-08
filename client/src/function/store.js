import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구
import {
    authService,
    dbService,
    storageService,
    firebaseInstance,
} from "./firebase";

const screenModeSlice = createSlice({
    name: "screenMode",
    initialState: {
        themeMode: "dark",
    },
    reducers: {
        darkMode: (state) => {
            state.themeMode = "dark";
        },
        lightMode: (state) => {
            state.themeMode = "light";
        },
    },
});

const firebaseMethod = createSlice({
    name: "firebaseMethod",
    initialState: {
        authService: authService,
        dbService: dbService,
        storageService: storageService,
        firebaseInstance: firebaseInstance,
    },
});

// Action creators are generated for each case reducer function
export const { darkMode, lightMode } = screenModeSlice.actions;

const store = configureStore({
    reducer: {
        screenMode: screenModeSlice.reducer,
        firebaseMethod: firebaseMethod.reducer,
    },
    composeWithDevTools,
});

export default store;
