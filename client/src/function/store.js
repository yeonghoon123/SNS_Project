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
        changeTheme: (state) => {
            state.themeMode = state.themeMode === "dark" ? "light" : "dark";
        },
    },
});

const firebaseMethodSlice = createSlice({
    name: "firebaseMethod",
    initialState: {
        authService: authService,
        dbService: dbService,
        storageService: storageService,
        firebaseInstance: firebaseInstance,
    },
});

const userAccountSlice = createSlice({
    name: "userAccount",
    initialState: {
        isLogged: false,
        account_info: {},
    },
    reducers: {
        loginAccount: (state, action) => {
            state.isLogged = true;
            state.account_info = action.payload.getUserData;
        },
        logoutAccount: (state) => {
            state.isLogged = false;
            state.account_info = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = screenModeSlice.actions;
export const { loginAccount, logoutAccount } = userAccountSlice.actions;

const store = configureStore(
    {
        reducer: {
            screenMode: screenModeSlice.reducer,
            firebaseMethod: firebaseMethodSlice.reducer,
            userAccount: userAccountSlice.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    },
    composeWithDevTools()
);

export default store;
