import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import MainPage from "../routes/Main";
import ProfilePage from "../routes/Profile";
import LoginPage from "../routes/Login";
import NewAccountPage from "../routes/NewAccount";
import Header from "./layout/Header";

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
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            ) : (
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route path="/new-account" element={<NewAccountPage />} />
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            )}
        </Router>
    );
};

export default AppRouter;
