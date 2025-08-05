import React from "react";

type LayoutProps = {
    skill: {
        id: number;
        name: string;
        type: string;
        level: number;
        icon: string;
        experienceDuration: string;
        lastUsed: string;
    };
};
type SkillType = "frontend" | "backend" | "devops" | "aipython";
const typeColorMap: Record<SkillType, string> = {
    frontend: "bg-pink-400",
    backend: "bg-blue-400",
    devops: "bg-gray-400",
    aipython: "bg-yellow-400",
};

const SkillTag = ({ skill }: LayoutProps) => {
    const category = typeColorMap[skill.type as SkillType] ?? "bg-black";

    return (
        <div className={`${category}`}>
            <p>{skill.name}</p>
            <p>{skill.level}</p>
            <p>{skill.icon}</p>
            <p>{skill.experienceDuration}</p>
            <p>{skill.lastUsed}</p>
        </div>
    );
};

export default SkillTag;
