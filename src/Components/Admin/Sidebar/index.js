import React from "react";
import Style from "./style";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import localStorage from "../../../Utils/LocalStorage";

const Sidebar = (props) => {
    const {
        routes = [],
        isShow = false,
        handleShowSidebar = () => {},
        handleLogout = () => {},
    } = props;
    const dataAuth = localStorage().get("auth");

    const createLinkSidebar = (routes) => {
        return routes
            .filter((item) => !item.setting)
            .map((prop, key) => {
                return (
                    <NavItem key={key}>
                        <NavLink
                            to={dataAuth ? `/admin${prop.path}` : `/`}
                            className={`nav-link ${
                                window.location.pathname.split("/")[2] ===
                                prop.sidebar.activeName
                                    ? "active"
                                    : ""
                            }`}
                            onClick={handleShowSidebar}
                        >
                            {prop.sidebar.icon && (
                                <i className={`${prop.sidebar.icon} mr-2`} />
                            )}
                            {prop.sidebar.name}
                        </NavLink>
                    </NavItem>
                );
            });
    };
    return (
        <Style open={isShow}>
            {/* <img src={Logo} alt="lakugan" className="img-fluid" /> */}
            <Nav className="mb-4">{createLinkSidebar(routes)}</Nav>
            <hr />
            <Nav>
                <NavItem>
                    <NavLink
                        to={`/logout`}
                        className={`nav-link`}
                        onClick={handleLogout}
                    >
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        </Style>
    );
};
export default Sidebar;
