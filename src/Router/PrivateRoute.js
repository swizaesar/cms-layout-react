import React from "react";
import { Route } from "react-router-dom";
// import Header from "../Components/Layouts/Guest/Header";

const PrivateRoute = ({ component: Component, authUser, ...rest }) => {
    // const result = { ...rest };

    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <Component title="Index Page" {...rest.item} {...props} />
                );
            }}
        />
    );
};

const PublicRoute = ({
    component: Component,
    restricted = false,
    authUser,
    isHeader = false,
    path,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <div>
                    {/* {isHeader && <Header />} */}
                    <Component
                        title="Index Page"
                        exact
                        {...rest.item}
                        {...props}
                    />
                </div>
            )}
        />
    );
};

export { PublicRoute, PrivateRoute };
