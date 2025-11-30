/* eslint-disable array-callback-return */
import { useState } from "react";
import { motion } from "framer-motion";
import SkillTag from "../components/SkillTag";
// import { supabase } from "../supabaseClient";

interface Skill {
    id: number;
    name: string;
    type: string;
    level: number;
    icon: string;
    expDuration: number;
}

const Skills = () => {
    const [skillsDB, setSkillsDB] = useState<Skill[]>([
        { id: 0, icon: "html.png", name: "HTML", type: "frontend", level: 8, expDuration: 3 },
        { id: 1, icon: "css.png", name: "CSS", type: "frontend", level: 8, expDuration: 3 },
        { id: 2, icon: "tailwind.png", name: "Tailwind CSS", type: "frontend", level: 6, expDuration: 1 },
        { id: 3, icon: "javascript.png", name: "JavaScript", type: "frontend", level: 7, expDuration: 3 },
        { id: 4, icon: "typescript.png", name: "TypeScript", type: "frontend", level: 5, expDuration: 1 },
        { id: 5, icon: "react.png", name: "React", type: "frontend", level: 6, expDuration: 2 },
        { id: 6, icon: "nodejs.png", name: "Node.js", type: "backend", level: 6, expDuration: 2 },
        { id: 7, icon: "express.png", name: "Express.js", type: "backend", level: 5, expDuration: 1 },
        { id: 8, icon: "mysql.png", name: "MySQL", type: "backend", level: 7, expDuration: 3 },
        { id: 9, icon: "default.png", name: "REST API", type: "backend", level: 6, expDuration: 1 },
        { id: 10, icon: "python.png", name: "Python", type: "others", level: 3, expDuration: 1 },
        { id: 11, icon: "default.png", name: "AI basic", type: "others", level: 1, expDuration: 1 },
        { id: 12, icon: "github3.png", name: "GitHub", type: "devops", level: 5, expDuration: 3 },
        { id: 13, icon: "vscode.png", name: "VS Code", type: "devops", level: 7, expDuration: 3 },
        { id: 14, icon: "intelli-j.png", name: "IntelliJ", type: "devops", level: 6, expDuration: 3 },
        { id: 15, icon: "pycharm.png", name: "PyCharm", type: "devops", level: 3, expDuration: 1 },
        { id: 16, icon: "postman.png", name: "Postman", type: "devops", level: 5, expDuration: 2 },
        { id: 17, icon: "npm.png", name: "npm/yarn", type: "devops", level: 5, expDuration: 1 },
        { id: 18, icon: "angular.png", name: "Angular", type: "frontend", level: 5, expDuration: 1 },
        { id: 19, icon: "firebase.png", name: "Firebase", type: "backend", level: 5, expDuration: 1 },
        { id: 20, icon: "supabase.png", name: "Supabase", type: "backend", level: 3, expDuration: 1 },
        { id: 21, icon: "mongo.png", name: "MongoDB", type: "backend", level: 3, expDuration: 0 },
        { id: 22, icon: "wix.png", name: "WIX", type: "others", level: 5, expDuration: 1 },
        { id: 23, icon: "springboot.png", name: "Spring Boot", type: "backend", level: 5, expDuration: 2 },
    ]);
    // useEffect(() => {
    //     supabase
    //         .from("skills")
    //         .select("*")
    //         .then(({ data, error }) => {
    //             if (!error) setSkillsDB(data);
    //         });
    // }, []);

    const category = [
        {
            type: "frontend",
            label: "Frontend",
        },
        { type: "backend", label: "Backend" },
        { type: "devops", label: "DevOps & Tools" },
        { type: "others", label: "Others" },
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
                    <div className="flex flex-col items-center gap-4" key={index}>
                        <p
                            className={`w-full rounded-xl px-4 py-2 border-2 border-gray-800 ${
                                index % 2 === 0 ? "bg-gray-800 text-white" : ""
                            }`}
                        >
                            {category.label}
                        </p>
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
