import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    return <div className={`max-w-[1200px] ${(location.pathname === '/projects' || location.pathname === '/skills') ? "min-h-[calc(100vh-96px)]" : "h-[calc(100vh-96px)]"} mx-auto`}>{children}</div>;
};

export default Layout;
