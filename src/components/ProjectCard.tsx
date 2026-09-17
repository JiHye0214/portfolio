import React from "react";

interface Stack {
    id: number;
    icon: string;
    name: string;
    type: string;
    level: number;
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
        <div onClick={onClick} className="group w-[300px] overflow-hidden cursor-pointer">
            {/* Image */}
            <div className="w-full h-[180px] overflow-hidden bg-gray-100">
                <img
                    src={`/assets/projects/${title.toLocaleLowerCase()}/${mainImg}`}
                    alt={title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
            </div>

            {/* Info */}
            <div className="pt-5">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400">
                        {startDate} → {endDate}
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400">{isTeam ? "Team" : "Personal"}</p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold tracking-[-0.03em]">{title}</p>

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>

                {/* Stacks */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                    {stacks.slice(0, 3).map((stack, index) => (
                        <span key={index} className="text-xs text-gray-400">
                            {stack.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
