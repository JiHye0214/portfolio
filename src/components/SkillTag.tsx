/* eslint-disable jsx-a11y/alt-text */
import React from "react";

type LayoutProps = {
    skill: {
        id: number;
        name: string;
        type: string;
        level: number;
        experienceDuration: string;
        lastUsed: string;
    };
};

const SkillTag = ({ skill }: LayoutProps) => {
    return (
        <div>
            <div className="w-full flex justify-between gap-5 font-semibold">
                <p>{skill.name}</p>
                <div>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i}>{i < skill.level ? "■" : "□"}</span>
                    ))}
                </div>

            </div>
            {/* 진짜 모르겠어 디자인을 어떻게 해야 되는지 */}
            {/* <p>{skill.experienceDuration}</p>
            <p>{skill.lastUsed}</p> */}
        </div>
    );
};

export default SkillTag;
