/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const projectsDB = [
        {
            id: 0,
            title: "Title1",
            description: "description",
            isTeam: false,
            stacks: ["React", "NodeJs", "tailwind", "github", "Typescript"],
            screens: ["bg.jpg", "bg2.jpg"],
            gitLink: "https://www.test.com",
            role: "test",
            challenges: "test",
            createdAt: "2023-11",
        },
        {
            id: 1,
            title: "Title2",
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

    const [clickedId, setClickedId] = useState(0);
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
    const handleProjectDetail = (project: any) => {
        setPrjDetail(project);
        setClickedId(project.id);
    };

    return (
        <div className="h-full w-full overflow-hidden">
            <div className="flex flex-col gap-3 my-10">
                <p className="text-5xl font-bold">Projects</p>
                <p>See my portfolio</p>
            </div>
            <div className="flex gap-7">
                <div className="w-[836px] h-[568px] flex flex-wrap gap-7 overflow-scroll scrollbar-hide">
                    {projectsDB.map((project, index) => (
                        <ProjectCard
                            key={index}
                            onClick={() => handleProjectDetail(project)}
                            className={`${project.id === clickedId ? "opacity-60" : "opacity-100"}`}
                            title={project.title}
                            mainImg={project.screens[0]}
                            mainStacks={project.stacks.filter((el, index) => index < 3)}
                        />
                    ))}
                </div>
                <div className="w-[336px] h-[568px]">
                    <div className="flex">
                        {prjDetail.screens.map((img, index) => (
                            <img key={index} src={`/assets/` + img} className="w-[300px] rounded-xl" />
                        ))}
                    </div>
                    <p className="text-lg font-bold">{prjDetail.title}</p>
                    <p className="font-bold">{prjDetail.description}</p>
                    <p className="font-bold">{prjDetail.createdAt}</p>
                    <p className="font-bold">{prjDetail.role}</p>
                    <p className="font-bold">{prjDetail.challenges}</p>
                    <span className="text-sm bg-green-500 text-white font-bold">{prjDetail.isTeam ? "Team" : "Personal"}</span>
                    <div className="flex gap-2">
                        {prjDetail.stacks.map((img, index) => (
                            <img key={index} src={`/assets/logo-` + img + `.png`} className="w-10" />
                        ))}
                    </div>
                    <a href="https://github.com/JiHye0214" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/logo-github3.png" alt="" className="w-10" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
