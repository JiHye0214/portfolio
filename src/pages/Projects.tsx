/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
    const projectsDB = [
        {
            id: 0,
            title: "My child",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus error vel quasi ratione aperiam, incidunt quas labore ex iste doloribus nulla libero eum. Totam quaerat neque odio ipsa. Qui, delectus?",
            isTeam: false,
            stacks: ["React", "NodeJs", "tailwind", "github3", "Typescript"],
            screens: ["bg.jpg", "bg2.jpg", "bg.jpg", "bg2.jpg", "bg.jpg", "bg2.jpg"],
            gitLink: "https://www.test.com",
            role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus error vel quasi ratione aperiam, incidunt quas labore ex iste doloribus nulla libero eum. Totam quaerat neque odio ipsa. Qui, delectus?",
            challenges:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus error vel quasi ratione aperiam, incidunt quas labore ex iste doloribus nulla libero eum. Totam quaerat neque odio ipsa. Qui, delectus?",
            createdAt: "2023-11",
        },
        {
            id: 1,
            title: "KKIA Tigers",
            description: "description",
            isTeam: true,
            stacks: ["React", "NodeJs", "tailwind", "github", "Typescript"],
            screens: ["bg2.jpg", "bg.jpg"],
            gitLink: "https://www.test.com",
            role: "test",
            challenges: "test",
            createdAt: "2023-12",
        },
        {
            id: 2,
            title: "Title3",
            description: "description",
            isTeam: true,
            stacks: ["React", "NodeJs", "tailwind", "github", "Typescript"],
            screens: ["bg.jpg", "bg2.jpg"],
            gitLink: "https://www.test.com",
            role: "test",
            challenges: "test",
            createdAt: "2024-01",
        },
        {
            id: 3,
            title: "Title4",
            description: "description",
            isTeam: true,
            stacks: ["React", "NodeJs", "tailwind", "github", "Typescript"],
            screens: ["bg.jpg", "bg2.jpg"],
            gitLink: "https://www.test.com",
            role: "test",
            challenges: "test",
            createdAt: "2024-02",
        },
        {
            id: 4,
            title: "Title5",
            description: "description",
            isTeam: true,
            stacks: ["React", "NodeJs", "tailwind", "github", "Typescript"],
            screens: ["bg.jpg", "bg2.jpg"],
            gitLink: "https://www.test.com",
            role: "test",
            challenges: "test",
            createdAt: "2025-03",
        },
    ];

    const [detailOpen, setDetailOpen] = useState(false);
    const [prjDetail, setPrjDetail] = useState({
        id: 0,
        title: "",
        description: "",
        isTeam: false,
        stacks: [],
        screens: [],
        gitLink: "",
        role: "",
        challenges: "",
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

            el?.scrollIntoView({ behavior: "auto" });
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
                initial={{ opacity: 0, y: 50 }} // 시작 상태: 투명하고 아래쪽(y=50)
                whileInView={{ opacity: 1, y: 0 }} // 뷰포트에 보일 때: 완전 보이고 위치 원상복귀
                viewport={{ once: false, amount: 0.3 }} // 한 번만 실행, 30% 보이면 애니메이션 실행
                transition={{ duration: 0.3, ease: "easeOut" }} // 애니메이션 시간과 이징
                className="w-fit max-w-[910px] flex flex-wrap justify-start gap-5 mx-auto pb-[100px]"
            >
                {projectsDB.map((project, index) => (
                    <ProjectCard
                        onClick={() => handlePrjDetail(project)}
                        key={index}
                        isTeam={project.isTeam}
                        title={project.title}
                        mainImg={project.screens[0]}
                        stacks={project.stacks.slice(0, 3)}
                        date={project.createdAt}
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
                        <div className="flex gap-2">
                            {prjDetail.stacks.map((img, index) => (
                                <img key={index} src={`/assets/logo/` + img + `.png`} className="w-10" />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Challenges</p>
                        <p className="">{prjDetail.challenges}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="">{prjDetail.createdAt}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">Preview</p>
                        <div className="w-[700px] flex gap-3 overflow-x-scroll">
                            {prjDetail.screens.map((img, index) => (
                                <img key={index} src={`/assets/` + img} className="w-[300px] rounded-xl" />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Url</p>
                        <a href="https://github.com/JiHye0214" target="_blank" rel="noopener noreferrer">
                            github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
