import React from "react";
import NavLink from "./NavLink";

const Header = () => {
    return (
        <header className="max-w-[1200px] max-[1200px]:p-5 h-12 mx-auto flex justify-between items-center">
            <p className="font-bold">Jihye Park</p>
            <nav className="flex gap-7 text-sm">
                <NavLink to="/" label="Home"></NavLink>
                <NavLink to="/about" label="About"></NavLink>
                <NavLink to="/projects" label="Projects"></NavLink>
                <NavLink to="/skills" label="Skills"></NavLink>
                <NavLink to="/contact" label="Contact"></NavLink>
            </nav>
        </header>
    );
};

export default Header;
