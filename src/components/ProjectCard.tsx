import React from "react";

interface Stack {
    id: number;
    icon: string;
    name: string;
    type: string;
    level: number;
    expDuration: number;
}
type LayoutProps = {
    mainImg: string;
    title: string;
    stacks: Stack[];
    startDate: string;
    endDate: string;
    isTeam: boolean;
    onClick?: () => void;
};

const ProjectCard = ({ mainImg, title, stacks, startDate, endDate, isTeam, onClick }: LayoutProps) => {
    return (
        <div
            onClick={onClick}
            className="w-[290px] h-fit overflow-hidden bg-gray-100 rounded-xl hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in-out"
        >
            <img className="w-full h-[151px] object-cover" src={`/assets/projects/` + title + '/' + mainImg} alt="" />
            <div className="p-5">
                <p className="text-xs">
                    {startDate} → {endDate}
                </p>
                <p className="text-lg font-bold">{title}</p>
                <p className={`w-fit text-xs text-white px-2 py-1 mt-3 rounded-full ${isTeam ? "bg-blue-500" : "bg-yellow-500"}`}>
                    {isTeam ? "Team" : "Personal"}
                </p>
                <div className="flex gap-2 mt-3">
                    {stacks.slice(0, 3).map((stack, index) => (
                        <p key={index} className="text-xs text-white bg-gray-300 px-2 py-1 rounded-full">
                            {stack.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
