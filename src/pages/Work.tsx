/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WorkCard from "../components/WorkCard";
// import { supabase } from "../supabaseClient";

interface Work {
    id: number;
    title: string;
    role: string;
    period: string;
    description: string;
    tech: string[];
    isOngoing: boolean;
    link: string;
    thumb: string;
}

interface Tech {
    id: number;
    icon: string;
    name: string;
    type: string;
    level: number;
}

interface ProjectWithtech extends Omit<Work, "tech"> {
    tech: Tech[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Work = () => {
    const tech: Tech[] = [
        { id: 0, icon: "html", name: "HTML", type: "frontend", level: 8 },
        { id: 1, icon: "css", name: "CSS", type: "frontend", level: 8 },
        { id: 2, icon: "tailwind", name: "Tailwind CSS", type: "frontend", level: 6 },
        { id: 3, icon: "javascript", name: "JavaScript", type: "frontend", level: 7 },
        { id: 4, icon: "typescript", name: "TypeScript", type: "frontend", level: 5 },
        { id: 5, icon: "react", name: "React", type: "frontend", level: 6 },
        { id: 6, icon: "nodejs", name: "Node.js", type: "backend", level: 6 },
        { id: 7, icon: "express", name: "Express.js", type: "backend", level: 5 },
        { id: 8, icon: "mysql", name: "MySQL", type: "backend", level: 7 },
        { id: 9, icon: "default", name: "REST API", type: "backend", level: 6 },
        { id: 10, icon: "python", name: "Python", type: "others", level: 3 },
        { id: 11, icon: "default", name: "AI basic", type: "others", level: 1 },
        { id: 12, icon: "github3", name: "GitHub", type: "devops", level: 5 },
        { id: 13, icon: "vscode", name: "VS Code", type: "devops", level: 7 },
        { id: 14, icon: "intelli-j", name: "IntelliJ", type: "devops", level: 6 },
        { id: 15, icon: "pycharm", name: "PyCharm", type: "devops", level: 3 },
        { id: 16, icon: "postman", name: "Postman", type: "devops", level: 5 },
        { id: 17, icon: "npm", name: "npm/yarn", type: "devops", level: 5 },
        { id: 18, icon: "angular", name: "Angular", type: "frontend", level: 5 },
        { id: 19, icon: "firebase", name: "Firebase", type: "backend", level: 5 },
        { id: 20, icon: "supabase", name: "Supabase", type: "backend", level: 3 },
        { id: 21, icon: "mongo", name: "MongoDB", type: "backend", level: 3 },
        { id: 22, icon: "wix", name: "WIX", type: "others", level: 5 },
        { id: 23, icon: "springboot", name: "Spring Boot", type: "backend", level: 5 },
        { id: 24, icon: "webflow", name: "Webflow", type: "others", level: 5 },
    ];

    const workOrigin: Work[] = [
        {
            id: 0,
            title: "LingoBootCamp",
            role: "Frontend Maintenance",
            tech: ["6", "9", "23", "0", "1", "3", "8", "12", "13", "14", "16"],
            period: "2026.06 - Present",
            description: "Codebase maintenance and UX/UI optimization.",
            link: "https://www.lingobootcamp.com/en",
            isOngoing: true,
            thumb: "lingoboot",
        },
    ];

    const [workDB, setWorkDB] = useState<ProjectWithtech[]>([]);

    const mergeWorkAndtech = (works: Work[], tech: Tech[]) => {
        return works.map((work) => ({
            ...work,
            tech: tech.filter((s) => work.tech.includes(String(s.id))),
        }));
    };

    useEffect(() => {
        const result = mergeWorkAndtech(workOrigin, tech);
        setWorkDB(result);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-full w-full overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="flex flex-col gap-4 pt-20 pb-16">
                <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Professional experience</p>

                <h1 className="text-6xl md:text-7xl font-black uppercase tracking-[-0.06em] leading-[0.9]">WORK.</h1>

                <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-500">
                    A look at the professional work, maintenance, and development experience I've gained along the way.
                </p>
            </div>

            {/* Work Cards */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="w-full max-w-[980px] mx-auto px-6 pb-24 grid grid-cols-1 gap-12"
            >
                {[...workDB]
                    .sort((a, b) => b.id - a.id)
                    .map((work) => (
                        <WorkCard
                            key={work.id}
                            title={work.title}
                            role={work.role}
                            period={work.period}
                            description={work.description}
                            tech={work.tech.slice(0, 3)}
                            isOngoing={work.isOngoing}
                            thumb={work.thumb}
                            link={work.link}
                        />
                    ))}
            </motion.div>
        </div>
    );
};

export default Work;
