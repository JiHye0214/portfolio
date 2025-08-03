import React from "react";

type Props = {
    project: {
        id: number;
        title: string;
        description: string;
        isTeam: boolean;
        stacks: Array<string>;
        screens: Array<string>;
        gitLink: string;
        role: string;
        challenges: string;
        createdAt: string;
    };
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="min-w-[260px] h-fit overflow-hidden hover:cursor-pointer">
            <img className={`w-[260px] hover:shadow-xl hover:shadow-gray-300`} src={`/assets/` + project.screens[0]} alt="" />
            <div className="flex flex-col gap-2 pt-5">
                <div className="flex gap-2">
                    {project.stacks
                        .slice(0, 3)
                        .map((stack, index) => (
                            <p key={index} className="text-xs text-white bg-gray-300 px-2 py-1 rounded-full">
                                {stack}
                            </p>
                        ))}
                </div>
                <p className="text-lg font-bold">{project.title}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
