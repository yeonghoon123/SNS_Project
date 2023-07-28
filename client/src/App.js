import React, { useEffect, useState } from "react";
import "./css/app.css";
import AppRouter from "./components/AppRouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./function/themeProvider";
import { GlobalStyle } from "./css/theme/globalStyle";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./function/getUserData";
import { loginAccount } from "./function/store";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const firebaseMethod = useSelector((store) => store.firebaseMethod); // Redux store에 저장된 firebase 가져오기
    const loginStatus = useSelector((store) => store.userAccount.isLogged); // 로그인 상태 확인

    useEffect(() => {
        // 사용자가 로그인 되어있는지 체크
        firebaseMethod.authService.onAuthStateChanged(async (user) => {
            if (user) {
                const userData = await getUserData(firebaseMethod, user.uid);
                dispatch(loginAccount(userData));
            }
            setLoading(false);
        });
    }, []);

    return (
        <div className="App">
            {loading ? (
                <>loading</>
            ) : loginStatus ? (
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
