/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SkillTag from "../components/SkillTag";
import { supabase } from "../supabaseClient";

interface Skill {
  id: number;
  name: string;
  type: string;
  level: number;
  icon: string;
  expDuration: number;
}

const Skills = () => {
    const [skillsDB, setSkillsDB] = useState<Skill[]>([]);
    useEffect(() => {
        supabase
            .from("skills")
            .select("*")
            .then(({ data, error }) => {
                if (!error) setSkillsDB(data);
            });
    }, []);

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
