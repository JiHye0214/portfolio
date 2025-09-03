/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";

interface Project {
    id: number;
    title: string;
    description: string;
    isTeam: boolean;
    role: string;
    challenges: string;
    stacks: Stack[];
    screens: string[];
    link: string;
    startedAt: string;
    createdAt: string;
}
interface Stack {
    id: number;
    icon: string;
    name: string;
    type: string;
    level: number;
    expDuration: number;
}
interface ProjectDetail {
    id: number;
    title: string;
    description: string;
    isTeam: boolean;
    stacks: Stack[]; // 여기 명시
    screens: string[];
    link: string;
    role: string;
    challenges: string;
    startedAt: string;
    createdAt: string;
}

const Projects = () => {
    const [prjDB, setPrjDB] = useState<Project[]>([]);
    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase.rpc("get_projects_full_with_stack_names");

            if (error) {
                console.error("Supabase fetch error:", error);
            } else {
                console.log("Supabase fetch data:", data);
                setPrjDB(data ?? []);
            }
        };

        fetchProjects();
    }, []);

    const [detailOpen, setDetailOpen] = useState(false);
    const [prjDetail, setPrjDetail] = useState<ProjectDetail>({
        id: 0,
        title: "",
        description: "",
        isTeam: false,
        stacks: [],
        screens: [],
        link: "",
        role: "",
        challenges: "",
        startedAt: "",
        createdAt: "",
    });
    const useElementHeight = (ref: React.RefObject<HTMLElement | null>) => {
        const [height, setHeight] = useState<number>(0);

        useEffect(() => {
            if (!ref.current) return;

            const resizeObserver = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    setHeight(entry.contentRect.height + 340);
                }
            });

            resizeObserver.observe(ref.current);

            return () => resizeObserver.disconnect();
        }, [ref]);

        return height;
    };
    const modalContentRef = useRef<HTMLDivElement>(null);
    const contentHeight = useElementHeight(modalContentRef);

    useEffect(() => {
        if (detailOpen) {
            const el = document.getElementById("modalTop");
            el?.scrollIntoView({
                behavior: "auto",
                block: "start",
            });

            const el2 = document.getElementById("modalLeft");
            if (el2) {
                el2.scrollLeft = 0; 
            }
        }
    }, [detailOpen]);

    const handlePrjDetail = (project: any) => {
        setPrjDetail(project);
        setDetailOpen(!detailOpen);
    };

    return (
        <div className="h-full w-full">
            <div className="flex flex-col items-center gap-7 py-[100px]">
                <p className="text-5xl font-bold">Projects</p>
                <p>A collection of projects that demonstrate my skills and growth</p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-fit max-w-[910px] flex flex-wrap justify-start max-[924px]:justify-center gap-5 mx-auto pb-[100px]"
            >
                {prjDB.map((project, index) => (
                    <ProjectCard
                        onClick={() => handlePrjDetail(project)}
                        key={index}
                        isTeam={project.isTeam}
                        title={project.title}
                        mainImg={project.screens[0]}
                        stacks={project.stacks.slice(0, 3)}
                        startDate={project.startedAt}
                        endDate={project.createdAt}
                    />
                ))}
            </motion.div>

            <div
                className={`fixed w-full h-full top-0 left-0 flex justify-center items-center transition-all duration-200 ease-in-out overflow-scroll scrollbar-hide ${
                    detailOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                    id="modalTop"
                    style={{ height: contentHeight }}
                    className="absolute inset-0 bg-gray-500 bg-opacity-70"
                    onClick={() => setDetailOpen(!detailOpen)}
                ></div>
                <div
                    ref={modalContentRef}
                    className="absolute top-[100px] w-[800px] flex flex-col gap-7 opacity-100 bg-white px-[50px] py-[70px] rounded-xl"
                >
                    <p className="text-4xl font-bold">{prjDetail.title}</p>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Description</p>
                        <p className="">{prjDetail.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Project Type</p>
                        <p>{prjDetail.isTeam ? "Team" : "Personal"}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Responsibilities</p>
                        <p className="">{prjDetail.role}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Tech Stack</p>
                        <div className="flex gap-5">
                            {prjDetail.stacks.map((stack) => (
                                <img
                                    title={stack.name}
                                    key={stack.id}
                                    src={`/assets/logo/` + stack.icon.toLocaleLowerCase()}
                                    className="w-8 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Challenges</p>
                        <p className="">{prjDetail.challenges}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="">
                            {prjDetail.startedAt} ~ {prjDetail.createdAt}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Preview</p>
                        <div id="modalLeft" className="w-[700px] flex gap-3 overflow-x-scroll">
                            {prjDetail.screens.map((img, index) => (
                                <img
                                    key={index}
                                    src={`/assets/projects/` + prjDetail.title.toLocaleLowerCase() + "/" + img}
                                    className="w-[300px] rounded-xl"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Url</p>
                        <a
                            href="https://github.com/JiHye0214"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit text-sm rounded-xl px-3 py-2 border"
                        >
                            {prjDetail.link}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
