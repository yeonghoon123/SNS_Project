import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../routes/Main";
import ProfilePage from "../routes/Profile";
import LoginPage from "../routes/Login";
import NewAccountPage from "../routes/NewAccount";

const AppRouter = ({ props }) => {
    const { loginStatus } = props;
    console.log(loginStatus);
    return (
        <Router>
            {loginStatus ? (
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route
                        path="/profile/:profileId"
                        element={<ProfilePage />}
                    />
                </Routes>
            ) : (
                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route path="/new-account" element={<NewAccountPage />} />
                </Routes>
            )}
        </Router>
    );
};

export default AppRouter;
