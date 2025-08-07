/* eslint-disable array-callback-return */
import React from "react";
import { motion } from "framer-motion";
import SkillTag from "../components/SkillTag";

const Skills = () => {
    const skillsDB = [
        {
            id: 0,
            name: "HTML",
            type: "frontend",
            level: 8,
            icon: "html.png",
            experienceDuration: 3,
        },
        {
            id: 1,
            name: "CSS",
            type: "frontend",
            level: 8,
            icon: "css.png",
            experienceDuration: 3,
        },
        {
            id: 2,
            name: "Tailwind CSS",
            type: "frontend",
            level: 6,
            icon: "tailwind.png",
            experienceDuration: 1,
        },
        {
            id: 3,
            name: "JavaScript",
            type: "frontend",
            level: 7,
            icon: "javascript.png",
            experienceDuration: 1,
        },
        {
            id: 4,
            name: "TypeScript",
            type: "frontend",
            level: 5,
            icon: "typescript.png",
            experienceDuration: 1,
        },
        {
            id: 5,
            name: "React",
            type: "frontend",
            level: 6,
            icon: "react.png",
            experienceDuration: 1,
        },
        {
            id: 6,
            name: "Node.js",
            type: "backend",
            level: 6,
            icon: "nodejs.png",
            experienceDuration: 2,
        },
        {
            id: 7,
            name: "Express.js",
            type: "backend",
            level: 5,
            icon: "express.png",
            experienceDuration: 1,
        },
        {
            id: 8,
            name: "MySQL",
            type: "backend",
            level: 7,
            icon: "mysql.png",
            experienceDuration: 3,
        },
        {
            id: 9,
            name: "REST API",
            type: "backend",
            level: 6,
            icon: "restapi.png",
            experienceDuration: 1,
        },
        {
            id: 10,
            name: "Python",
            type: "aipython",
            level: 3,
            icon: "python.png",
            experienceDuration: 1,
        },
        {
            id: 11,
            name: "AI basic",
            type: "aipython",
            level: 1,
            icon: "ai.png",
            experienceDuration: 1,
        },
        {
            id: 12,
            name: "GitHub",
            type: "devops",
            level: 5,
            icon: "github3.png",
            experienceDuration: 3,
        },
        {
            id: 13,
            name: "VS Code",
            type: "devops",
            level: 7,
            icon: "vscode.png",
            experienceDuration: 3,
        },
        {
            id: 14,
            name: "IntelliJ",
            type: "devops",
            level: 6,
            icon: "intellij.png",
            experienceDuration: 3,
        },
        {
            id: 15,
            name: "PyCharm",
            type: "devops",
            level: 3,
            icon: "pycharm.png",
            experienceDuration: 1,
        },
        {
            id: 16,
            name: "Postman",
            type: "devops",
            level: 5,
            icon: "postman.png",
            experienceDuration: 2,
        },
        {
            id: 17,
            name: "npm/yarn",
            type: "devops",
            level: 5,
            icon: "npm.png",
            experienceDuration: 1,
        },
        {
            id: 18,
            name: "Angular",
            type: "frontend",
            level: 5,
            icon: "angular.png",
            experienceDuration: 1,
        },
        {
            id: 19,
            name: "Firebase",
            type: "backend",
            level: 5,
            icon: "firebase.png",
            experienceDuration: 1,
        },
    ];
    const category = [
        {
            type: "frontend",
            label: "Frontend",
        },
        { type: "backend", label: "Backend" },
        { type: "devops", label: "DevOps & Tools" },
        { type: "aipython", label: "AI & Python" },
    ];

    return (
        <div className="h-full w-full overflow-hidden">
            <div className="flex flex-col items-center gap-7 py-[100px]">
                <p className="text-5xl font-bold">Skills</p>
                <p>The tools in my developer toolbox.</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full flex justify-between pb-[100px]"
            >
                {category.map((category, index) => (
                    <div className="flex flex-col items-center gap-4">
                        <p className={`w-full rounded-xl px-4 py-2 border-2 border-gray-800 ${index % 2 === 0 ? "bg-gray-800 text-white" : ""}`}>{category.label}</p>
                        <div className="flex flex-col gap-3">
                            {skillsDB.map((skill, index) => {
                                if (skill.type === category.type) {
                                    return <SkillTag key={index} skill={skill} />;
                                }
                            })}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
