/* eslint-disable jsx-a11y/alt-text */
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

    return (
        <div className="h-full w-full overflow-hidden">
            <div className="flex flex-col gap-3 my-10">
                <p className="text-5xl font-bold">Projects</p>
                <p>See my portfolio</p>
            </div>
            <div className="flex gap-7">
                <div className="min-w-[1200px] h-[568px] flex flex-wrap gap-7 overflow-scroll scrollbar-hide">
                    {projectsDB.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
