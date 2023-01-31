import React, { useState } from "react";
import "./css/app.css";
import AppRouter from "./components/AppRouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./function/themeProvider";
import { GlobalStyle } from "./css/theme/globalStyle";

function App() {
    const [loginStatus, setLoginStatus] = useState(true);
    return (
        <div className="App">
            <ThemeProvider>
                <GlobalStyle />
                {loginStatus && <Header />}
                <AppRouter props={{ loginStatus }} />
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
