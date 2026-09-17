import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
    fullHeight?: boolean;
};

const Layout = ({ children, fullHeight = false }: LayoutProps) => {
    return <div className={`w-full max-w-[1200px] mx-auto px-6 md:px-10 ${fullHeight ? "h-full" : ""}`}>{children}</div>;
};

export default Layout;
