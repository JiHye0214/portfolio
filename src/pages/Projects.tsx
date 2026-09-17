/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

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
}

interface ProjectWithStacks extends Omit<Project, "stacks"> {
    stacks: Stack[];
}

const Projects = () => {
    const stacks: Stack[] = [
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

    const [detailOpen, setDetailOpen] = useState(false);

    const mergeProjectsAndStacks = (projects: Project[], stacks: Stack[]) => {
        return projects.map((project) => ({
            ...project,
            stacks: stacks.filter((s) => project.stacks.includes(String(s.id))),
        }));
    };

    useEffect(() => {
        const result = mergeProjectsAndStacks(prjOrigin, stacks);
        setPrjDB(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePrjDetail = (project: ProjectWithStacks) => {
        setPrjDetail(project);
        setDetailOpen(true);
    };

    useEffect(() => {
        document.body.style.overflow = detailOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [detailOpen]);

    return (
        <div className="h-full w-full overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="flex flex-col gap-4 pt-20 pb-16">
                <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Selected work</p>

                <h1 className="text-6xl md:text-7xl font-black uppercase tracking-[-0.06em] leading-[0.9]">PROJECTS.</h1>

                <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-500">
                    A collection of projects built through design, development, and problem solving.
                </p>
            </div>

            {/* Project Cards */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="w-full max-w-[980px] mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
                {[...prjDB]
                    .sort((a, b) => b.id - a.id)
                    .map((project) => (
                        <ProjectCard
                            onClick={() => handlePrjDetail(project)}
                            key={project.id}
                            isTeam={project.isTeam}
                            title={project.title}
                            mainImg={project.screens[0]}
                            stacks={project.stacks.slice(0, 3)}
                            startDate={project.startedAt}
                            endDate={project.createdAt}
                        />
                    ))}
            </motion.div>

            {/* Project Detail Modal */}
            <div
                className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-6 py-10 transition-all duration-200 ${
                    detailOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Background */}
                <div className="fixed inset-0 bg-black/60" onClick={() => setDetailOpen(false)} />

                {/* Modal */}
                <div className="relative z-10 w-full max-w-[800px] my-auto flex flex-col gap-7 bg-white px-8 py-12 md:px-[50px] md:py-[60px] rounded-2xl shadow-xl text-gray-900">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-5">
                        <div>
                            <p className="text-xs uppercase tracking-[0.14em] text-gray-400 mb-3">Project</p>

                            <p className="text-4xl font-bold tracking-[-0.04em]">{prjDetail.title}</p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setDetailOpen(false)}
                            className="text-2xl leading-none text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            ×
                        </button>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Description</p>
                        <p className="leading-relaxed">{prjDetail.description}</p>
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Project Type</p>
                        <p>{prjDetail.isTeam ? "Team" : "Personal"}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Responsibilities</p>
                        <p className="leading-relaxed">{prjDetail.role}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</p>

                        <div className="flex flex-wrap gap-4">
                            {prjDetail.stacks.map((stack) => (
                                <img
                                    title={stack.name}
                                    key={stack.id}
                                    src={`/assets/logo/${stack.icon.toLowerCase()}.png`}
                                    className="w-8 h-8 object-contain"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Challenges */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Challenges</p>
                        <p className="leading-relaxed">{prjDetail.challenges}</p>
                    </div>

                    {/* Date */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Date</p>

                        <p>
                            {prjDetail.startedAt} ~ {prjDetail.createdAt}
                        </p>
                    </div>

                    {/* Preview */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Preview</p>

                        <div className="w-full flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {prjDetail.screens.map((img, index) => (
                                <img
                                    key={index}
                                    src={`/assets/projects/${prjDetail.title.toLowerCase()}/${img}`}
                                    className="w-[300px] flex-shrink-0 rounded-xl object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    {/* URL */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">URL</p>

                        <a
                            href={prjDetail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit max-w-full break-all text-sm border-b border-black/20 pb-1 hover:border-black transition-colors"
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
