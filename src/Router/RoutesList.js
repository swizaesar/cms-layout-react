import { lazy } from "react";

export default [
    {
        component: lazy(() => import("../Pages/Auth/Login")),
        path: "/login",
        isHeader: false,
        layout: "",
        isFooter: false,
        title: "Login",
    },
    {
        component: lazy(() => import("../Pages/Admin/Dashboard")),
        path: "/dashboard",
        isHeader: true,
        layout: "/admin",
        isFooter: true,
        sidebar: {
            icon: "fas fa-box mr-2",
            name: "Dashboard",
            activeName: "dashboard",
        },
        title: "dashboard",
    },
];
