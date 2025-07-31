import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`px-2 py-1 
                ${
                    isActive && location.pathname === "/about"
                        ? "text-yellow-500 border-b-2 border-yellow-500"
                        : isActive
                        ? "text-blue-800 border-b-2 border-blue-800"
                        : ""
                }`}
        >
            {label}
        </Link>
    );
};

export default NavLink;
