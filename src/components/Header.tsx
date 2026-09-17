import React from "react";
import NavLink from "./NavLink";

const Header = () => {
    return (
        <header className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-6 flex justify-between items-center">
            <NavLink
                to="/"
                label="IMYMEMINE.STUDIO"
            />

            <nav className="flex gap-5 md:gap-8 text-xs md:text-sm">
                <NavLink to="/about" label="About" />
                <NavLink to="/work" label="Work" />
                <NavLink to="/projects" label="Projects" />
                <NavLink to="/skills" label="Skills" />
                <NavLink to="/contact" label="Contact" />
            </nav>
        </header>
    );
};

export default Header;