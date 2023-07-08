import React, { useState } from "react";
import "./css/app.css";
import AppRouter from "./components/AppRouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./function/themeProvider";
import { GlobalStyle } from "./css/theme/globalStyle";
import { useSelector } from "react-redux";

function App() {
    const [loginStatus, setLoginStatus] = useState(false);
    return (
        <div className="App">
            {loginStatus ? (
                <ThemeProvider>
                    <GlobalStyle />
                    <Header />
                    <AppRouter props={{ loginStatus }} />
                    <Footer />
                </ThemeProvider>
            ) : (
                <>
                    <AppRouter props={{ loginStatus }} />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
