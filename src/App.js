import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthLayout from "./Router/RouteGuestLayout";
import AdminLayout from "./Router/RouteAdminLayout";
import localStorage from "./Utils/LocalStorage";
const App = (props) => {
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage().remove("auth");
        window.location = "/";
    };
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/admin"
                    render={(props) => (
                        <AdminLayout handleLogout={handleLogout} {...props} />
                    )}
                />
                <Route path="/" render={(props) => <AuthLayout {...props} />} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
