import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-full flex gap-[150px] justify-center items-center">
            <img className="w-[350px] rounded-full" src="/assets/profile.jpg" alt="" />
            <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-bold">Hello, I'm</p>
                <p className="text-5xl font-bold">Jihye Park</p>
                <p className="text-4xl font-bold text-gray-500">Frontend Developer </p>
                <div className="flex gap-5">
                    <Link to="/projects" className="border-2 border-gray-800 text-gray-800 font-semibold px-4 py-3 rounded-full">
                        View Projects
                    </Link>
                    <button className="bg-gray-800 border-2 border-gray-800 text-white font-semibold px-4 py-3 rounded-full">
                        Download Resume
                    </button>
                </div>
                <div>
                    <div className="flex gap-3">
                        <a href="https://github.com/JiHye0214" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo-github3.png" alt="" className="w-10" />
                        </a>
                        <a href="https://www.linkedin.com/in/jihye-p-2b3755344/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo-linkedIn.png" alt="" className="w-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
