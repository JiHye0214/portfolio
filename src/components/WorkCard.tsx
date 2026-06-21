import React from "react";

interface Tech {
    id: number;
    icon: string;
    name: string;
    type: string;
    level: number;
}
type LayoutProps = {
    title: string;
    role: string;
    period: string;
    description: string;
    tech: Tech[];
    isOngoing: boolean;
    thumb: string;
    link: string;
};

const WorkCard = ({ thumb, title, role, description, tech, period, isOngoing, link }: LayoutProps) => {
    return (
        <a
            href={link}
            target="blank"
            className="w-[300px] h-fit overflow-hidden bg-gray-100 rounded-xl hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in-out"
        >
            <img className="w-full h-[180px] object-cover object-top" src={`/assets/works/${thumb}.png`} alt="" />
            <div className="p-5 pt-8 pb-8 flex flex-col gap-10">
                <div>
                    <p className="text-xs">{period}</p>
                    <p className="text-lg font-bold">{title}</p>
                    <p
                        className={`w-fit text-xs text-white px-2 py-1 mt-2 rounded-full ${isOngoing ? "bg-blue-500" : "bg-yellow-500"}`}
                    >
                        {isOngoing ? "Ongoing" : "Completed"}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs text-gray-500">Responsibilities</p>
                    <p className="text-sm">{role}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs text-gray-500">Description</p>
                    <p className="text-sm">{description}</p>
                </div>
                <div className="flex gap-2">
                    {tech.slice(0, 3).map((tech, index) => (
                        <p key={index} className="text-xs text-white bg-gray-300 px-2 py-1 rounded-full">
                            {tech.name}
                        </p>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default WorkCard;
