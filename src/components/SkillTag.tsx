/* eslint-disable jsx-a11y/alt-text */
import React from "react";

type LayoutProps = {
    skill: {
        id: number;
        name: string;
        icon: string;
        type: string;
        level: number;
    };
};

const SkillTag = ({ skill }: LayoutProps) => {
    return (
        <div className="w-full flex items-center gap-4 py-3 border-b border-black/10">
            {/* Icon */}
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <img src={`/assets/logo/${skill.icon}.png`} alt="" title={skill.name} className="w-full h-full object-contain" />
            </div>

            {/* Name + Level */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium">{skill.name}</span>

                    <span className="text-[10px] text-gray-400 tracking-[0.08em]">{skill.level}/10</span>
                </div>

                {/* Level */}
                <div className="flex gap-[2px] mt-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className={`h-[3px] flex-1 ${i < skill.level ? "bg-black" : "bg-gray-200"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillTag;
