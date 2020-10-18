import React, { Suspense, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import routesList from "./RoutesList";

import localStorage from "../Utils/LocalStorage";

const RouteGuestLayout = () => {
    const [isFirstGet, setFirstGet] = React.useState(true);
    const dataAuth = localStorage().get("auth");
    React.useEffect(() => {
        if (dataAuth?.token) {
            window.location = "/admin/dashboard";
        }

        return () => {};
    }, []);
    React.useEffect(() => {
        if (window.location.pathname === "/" && !dataAuth?.token) {
            window.location = "/login";
        }
        return () => {};
    }, []);
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                {routesList
                    .filter((item) => item.layout === "")
                    .map((item, key) => {
                        return (
                            <Fragment key={key}>
                                <div id="content-page">
                                    <Route
                                        exact
                                        path={item.path}
                                        component={item.component}
                                    />
                                </div>
                            </Fragment>
                        );
                    })}
            </Suspense>
        </Switch>
    );
};

export default RouteGuestLayout;
