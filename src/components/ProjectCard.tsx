import React from "react";

type LayoutProps = {
    mainImg: string;
    title: string;
    stacks: Array<string>;
    date: string;
    isTeam: boolean;
    onClick?: () => void;
};

const ProjectCard = ({ mainImg, title, stacks, date, isTeam, onClick }: LayoutProps) => {
    return (
        <div
            onClick={onClick}
            className="w-[290px] h-fit overflow-hidden bg-gray-100 rounded-xl hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in-out"
        >
            <img className="w-full" src={`/assets/` + mainImg} alt="" />
            <div className="p-5">
                <p className="text-xs">{date}</p>
                <p className="text-lg font-bold">{title}</p>
                <div className="flex gap-2 mt-3">
                    <p className={`text-xs text-white px-2 py-1 rounded-full ${isTeam ? "bg-blue-500" : "bg-yellow-500"}`}>{isTeam ? "Team" : "Personal"}</p>
                    {stacks.slice(0, 3).map((stack, index) => (
                        <p key={index} className="text-xs text-white bg-gray-300 px-2 py-1 rounded-full">
                            {stack}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
