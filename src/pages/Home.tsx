import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-full flex flex-col gap-6 justify-center">
            <p className="text-4xl font-bold leading-relaxed">
                Hi, I'm Jihye, <br /> a Frontend Developer <br /> passionate about clean UI and scalable code.
            </p>
            <div className="flex gap-5">
                <Link
                    to="/projects"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                >
                    View Projects
                </Link>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">Download Resume</button>
            </div>
        </div>
    );
};

export default Home;
