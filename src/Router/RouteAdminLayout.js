import React, { Suspense, Fragment } from "react";
import { Switch } from "react-router-dom";
import routesList from "./RoutesList";
import styled from "styled-components";

import { PrivateRoute } from "./PrivateRoute";
import { sidebar } from "../Utils/Variable";
import Sidebar from "../Components/Admin/Sidebar";
import localStorage from "../Utils/LocalStorage";
const Style = styled.div`
    width: calc(100% - (${sidebar.width}px));
    padding: 20px;
    margin: 0 0 0 auto;
    background: #f5f5fb;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    table {
        th,
        td {
            font-size: 14px;
        }
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;
const ButtonBars = styled.button`
    display: none;
    @media (max-width: 767px) {
        display: block;
        position: absolute;
        z-index: 4;
        border: none;
        background: transparent;
        font-size: 20px;
        padding: 10px;
        top: 21px;
        left: 0;
    }
`;
const RouteAdminLayout = (props) => {
    const { handleLogout = () => {} } = props;
    const [isShow, setShow] = React.useState(false);
    React.useEffect(() => {
        const dataAuth = localStorage().get("auth");
        if (!dataAuth?.token) {
            window.location = "/login";
        }
        return () => {};
    }, []);
    const handleShowSidebar = () => {
        setShow(!isShow);
    };
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                {routesList
                    .filter(
                        (item) =>
                            window.location.pathname === `/admin` + item.path &&
                            item.sidebar
                    )
                    .map((item, key) => {
                        return (
                            <Sidebar
                                key={key}
                                item={item}
                                handleLogout={handleLogout}
                                handleShowSidebar={handleShowSidebar}
                                isShow={isShow}
                                routes={routesList.filter(
                                    (item) => item.sidebar
                                )}
                            />
                        );
                    })}
                <ButtonBars onClick={handleShowSidebar}>
                    <i
                        className={`fas ${!isShow ? "fa-bars" : "fa-times"}`}
                    ></i>
                </ButtonBars>
                <Style>
                    {routesList
                        .filter((item) => item.layout === "/admin")
                        .map((item, key) => {
                            return (
                                <Fragment key={key}>
                                    <PrivateRoute
                                        key={key}
                                        exact
                                        authUser={props?.auth}
                                        path={`/admin${item.path}`}
                                        restricted
                                        isHeader={item.isHeader}
                                        component={item.component}
                                    />
                                </Fragment>
                            );
                        })}
                </Style>
            </Suspense>
        </Switch>
    );
};

export default RouteAdminLayout;
