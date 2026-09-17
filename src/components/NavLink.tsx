import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`py-1 font-semibold ${
                isActive
                    ? location.pathname === "/about"
                        ? "text-yellow-500 border-b-2 border-yellow-500"
                        : "border-gray-800 border-b-2"
                    : ""
            }`}
        >
            {label}
        </Link>
    );
};

export default NavLink;
