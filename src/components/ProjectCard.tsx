import React from "react";

type LayoutProps = {
    mainImg: string;
    title: string;
    mainStacks: Array<string>;
    onClick?: () => void;
    className?: string;
};

const ProjectCard = ({ mainImg, title, mainStacks, onClick, className }: LayoutProps) => {
    return (
        <div onClick={onClick} className="min-w-[260px] overflow-hidden hover:cursor-pointer">
            <img className={`w-[260px] hover:shadow-xl rounded-xl hover:shadow-gray-300 transition-all duration-300 ease-in-out ${className}`} src={`/assets/` + mainImg} alt="" />
            <div className="flex flex-col gap-2 pt-5">
                <div className="flex gap-2">
                    {mainStacks.map((stack, index) => (
                        <p key={index} className="text-xs text-white bg-gray-300 px-2 py-1 rounded-full">{stack}</p>
                    ))}
                </div>
                <p className="text-lg font-bold">{title}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
