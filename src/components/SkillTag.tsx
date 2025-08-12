/* eslint-disable jsx-a11y/alt-text */
import React from "react";

type LayoutProps = {
    skill: {
        id: number;
        name: string;
        icon: string;
        type: string;
        level: number;
        expDuration: number;
    };
};

const SkillTag = ({ skill }: LayoutProps) => {
    return (
        <div className="w-full flex justify-between items-center gap-8 font-semibold shadow-xl shadow-gray-200 p-5 rounded-xl">
            <div className="w-[40px] h-[40px] overflow-hidden flex justify-center items-center">
                <img src={`/assets/logo/${skill.icon}`} alt="" title={skill.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
                <span className="text-xs">
                    {skill.name} / {skill.expDuration} {skill.expDuration < 2 ? "year" : "years"}
                </span>
                <div>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i}>{i < skill.level ? "■" : "□"}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillTag;
