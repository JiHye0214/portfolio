/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
// import { supabase } from "../supabaseClient";

interface Project {
    id: number;
    title: string;
    description: string;
    isTeam: boolean;
    role: string;
    challenges: string;
    stacks: string[];
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
interface ProjectWithStacks extends Omit<Project, "stacks"> {
    stacks: Stack[];
}

const Projects = () => {
    const stacks: Stack[] = [
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
    ];

    const prjOrigin: Project[] = [
        {
            id: 0,
            title: "My Child",
            description: "A site for parents raising young children",
            isTeam: true,
            role: "Built the project using MyBatis and Spring, covering core features such as login, post creation, and file attachments.",
            challenges:
                "Implementing login with Spring Security was difficult at first, especially understanding how user information is stored and processed through filters.",
            stacks: ["6", "9", "23", "0", "1", "3", "8", "12", "13", "14", "16"],
            screens: [
                "home.png",
                "home2.png",
                "signUpAgree.jpg",
                "signUp.jpg",
                "logIn.jpg",
                "idPwFind.jpg",
                "zzimList.jpg",
                "togetherList.jpg",
                "togetherDetail.jpg",
                "protectList.jpg",
                "protectDetail.jpg",
                "communityList.jpg",
                "communityWrite.jpg",
                "communityDetail.jpg",
                "communityUpdate.jpg",
                "marketList.jpg",
            ],
            link: "https://github.com/JiHye0214/ChildPrj",
            startedAt: "2023-11-27",
            createdAt: "2023-12-29",
        },
        {
            id: 1,
            title: "KKIA TIGERS",
            description: "A site for fans of baseball team KIA TIGERS",
            isTeam: true,
            role: "Designed and implemented the backend logic, while connecting the client, server, and database to deliver a functional web service.",
            challenges:
                "File upload handling was challenging until I learned to use MultipartFile with the enctype attribute, and to prevent duplicate file names by renaming files at the service layer.",
            stacks: ["6", "9", "23", "0", "1", "3", "8", "12", "13", "14", "16"],
            screens: [
                "home.png",
                "logIn.jpg",
                "idPwFind.jpg",
                "signUp.jpg",
                "mypage-board.jpg",
                "mypage-record.jpg",
                "mypage-record2.jpg",
                "mypage-userInfo.jpg",
                "mypage-userInfo2.jpg",
                "game.jpg",
                "marketlist.jpg",
                "marketDetail.jpg",
                "marketDetailChat.jpg",
                "marketDetailChat2.jpg",
                "marketWrite.jpg",
                "marketUpdate.jpg",
                "community.jpg",
                "foodList.jpg",
                "foodDetail.jpg",
                "foodWrite.jpg",
                "foodWrite2.jpg",
                "foodWrite3.jpg",
                "favoriteList.jpg",
                "favoriteDetail.jpg",
                "favoriteWrite.jpg",
                "favoriteUpdate.jpg",
                "postList.jpg",
                "postDetail.jpg",
                "postComment.jpg",
                "postWrite.jpg",
                "postUpdate.jpg",
            ],
            link: "https://github.com/JiHye0214/KkiaPrj",
            startedAt: "2024-01-04",
            createdAt: "2024-01-30",
        },
        {
            id: 2,
            title: "VCEC",
            description:
                "Built a website for a small study abroad agency (VCEC) in collaboration with 2 planners and 2 designers. The project was expected to take a month, but after receiving delayed designs, I implemented the site in 5 days using Wix.",
            isTeam: true,
            role: "Implemented the website based on provided designs, adapting to Wix’s limitations and ensuring usability. Collaborated closely with the planning team, providing detailed feedback and suggestions for improvements via Notion.",
            challenges:
                "Wix’s developer mode allowed limited customization, so achieving 100% design fidelity was not possible. Time delays in design delivery compressed the development period, requiring rapid implementation.",
            stacks: ["22"],
            screens: ["home.png", "home2.png", "pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png", "pic6.png"],
            link: "https://www.vancouvercec.com/",
            startedAt: "2025-02-10",
            createdAt: "2025-03-06",
        },
        {
            id: 3,
            title: "Dwellio",
            description:
                "A two-week college project built with a partner, creating a 12-page rental matching application. The project included collaboration via GitHub and covered both frontend and backend development.",
            isTeam: true,
            role: "Designed the site layout and implemented the Home, Login, Register, All Users (admin), and Messages pages. Set up the project structure, configured Express with MongoDB, and handled most of the core development.",
            challenges:
                "Limited time made it hard to polish design and features beyond client requirements. Faced technical issues with database integration and token handling, especially managing localStorage errors.",
            stacks: ["18", "21", "4", "0", "1", "3", "6", "7", "12", "13", "16", "17"],
            screens: [
                "home.png",
                "home2.png",
                "home3.png",
                "login.png",
                "register.png",
                "allUsers1.png",
                "allUsers2.png",
                "myProfile.png",
                "editProfile.png",
                "myFlat.png",
                "myFav.png",
                "msgInbox.png",
                "msgOutbox.png",
                "newFlat.png",
                "viewFlat.png",
                "viewFlat2.png",
                "editFlat.png",
            ],
            link: "https://github.com/FED-104-6/Jihye-Asuka",
            startedAt: "2025-08-13",
            createdAt: "2025-08-29",
        },
    ];
    const [prjDB, setPrjDB] = useState<ProjectWithStacks[]>([]);
    const [prjDetail, setPrjDetail] = useState<ProjectWithStacks>({
        id: 0,
        title: "",
        description: "",
        isTeam: false,
        role: "",
        challenges: "",
        stacks: [],
        screens: [],
        link: "",
        startedAt: "",
        createdAt: "",
    });

    // 로컬 조인 함수 (stack)
    const mergeProjectsAndStacks = (projects: Project[], stacks: Stack[]) => {
        return projects.map((project) => ({
            ...project,
            stacks: stacks.filter((s) => project.stacks.includes(String(s.id))),
        }));
    };

    useEffect(() => {
        const result = mergeProjectsAndStacks(prjOrigin, stacks);
        // set 밖에다 함부로 쓰면 infinite loop 걸림
        setPrjDB(result);
    }, []);

    // useEffect(() => {
    // SUPABASE 취소이슈로 일일이 적기 선택
    // const fetchProjects = async () => {
    //     const { data, error } = await supabase.rpc("get_projects_full_with_stack_names");

    //     if (error) {
    //         console.error("Supabase fetch error:", error);
    //     } else {
    //         console.log("Supabase fetch data:", data);
    //         setPrjDB(data ?? []);
    //     }
    // };
    // fetchProjects();
    // }, []);

    const [detailOpen, setDetailOpen] = useState(false);
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

    const handlePrjDetail = (project: ProjectWithStacks) => {
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
