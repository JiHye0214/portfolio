import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-full flex flex-col gap-6 justify-center">
            <p className="text-5xl font-bold leading-normal">
                Hi, I'm Jihye, <br /> a Frontend Developer <br /> passionate about clean UI and scalable code.
            </p>
            <div className="flex gap-5">
                <Link
                    to="/projects"
                    className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-4 py-3 rounded-lg"
                >
                    View Projects
                </Link>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-4 py-3 rounded-lg">Download Resume</button>
            </div>
        </div>
    );
};

export default Home;
