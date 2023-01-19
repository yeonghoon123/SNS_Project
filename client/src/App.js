import React, { useState } from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/layout/Header";

function App() {
    const [loginStatus, setLoginStatus] = useState(true);
    return (
        <div className="App">
            {loginStatus && <Header />}
            <AppRouter props={{ loginStatus }} />
        </div>
    );
}

export default App;
