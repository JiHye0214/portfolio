import React from "react";
import ScrollDiv from "../components/ScrollDiv";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="h-full w-full overflow-hidden">
            <div className="h-[802px] overflow-y-scroll scrollbar-hide">
                <ScrollDiv isFirst={true}>Hi! I'm Jihye</ScrollDiv>
                <ScrollDiv isFirst={false} title="Quick Intro">
                    I’m a front-end development student at Greystone College in Vancouver, <br /> passionate about building interactive
                    and user-friendly web applications. <br /> Currently, I’m seeking a front-end internship where I can apply my skills
                    and grow through real-world projects.
                </ScrollDiv>
                <ScrollDiv isFirst={false} title="Core Technologies">
                    <div className="flex flex-col gap-5">
                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/react.png" title="React" alt="React" className="w-14" />
                            <p>Building dynamic and responsive user interfaces</p>
                        </div>
                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/tailwind.png" title="Tailwind CSS" alt="Tailwind CSS" className="w-14" />
                            <p>Fast and customizable styling framework</p>
                        </div>
                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/typescript.png" title="TypeScript" alt="TypeScript" className="w-14" />
                            <p>Core programming languages for front-end and back-end</p>
                        </div>
                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/nodejs.png" title="Node.js" alt="Node.js" className="w-14" />
                            <p>Backend development with server-side JavaScript</p>
                        </div>
                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/github.png" title="Git/GitHub" alt="GitHub" className="w-14" />
                            <p>Version control and collaboration tools</p>
                        </div>
                    </div>
                </ScrollDiv>
                <ScrollDiv isFirst={false} title="Building Things">
                    <p>
                        I have completed two full-stack team projects during my studies at a Korean IT academy, gaining hands-on
                        experience in both frontend and backend development. <br /> Additionally, I collaborated on a real-world
                        project developing a small language school website in Vancouver using a no-code framework. For detailed
                        descriptions and demos, please visit my{" "}
                        <Link to={"/projects"} className="text-yellow-500">
                            projects
                        </Link>{" "}
                        page.
                    </p>
                </ScrollDiv>
                <ScrollDiv isFirst={false} title="Passion for Development">
                    <p>
                        Web development feels like having a conversation with a computer—step by step, I build something I can see
                        and interact with. <br /> I’m drawn to the clear cause-and-effect nature of coding, where logical input
                        leads to a direct result. I especially enjoy how errors come with specific, fixable solutions. That
                        clarity makes the process both challenging and rewarding.
                    </p>
                </ScrollDiv>
                <ScrollDiv isFirst={false} title="Now & Next">
                    <div className="flex flex-col gap-10">
                        <p>
                            I'm currently focusing on front-end development and actively seeking opportunities to gain real-world
                            experience as a developer. <br /> I'm expanding my skills through personal and team projects, with a
                            strong interest in user-centered design and collaboration.
                        </p>
                        <p>
                            My goal is to gain professional experience in Canada as a developer, grow as a well-rounded engineer,
                            <br /> and work on practical projects where I can improve my problem-solving and teamwork skills.
                        </p>
                    </div>
                </ScrollDiv>
                <ScrollDiv isFirst={false} title="Wanna Know More?">
                    <div className="flex gap-7">
                        <a href="https://github.com/JiHye0214" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo/github.png" alt="" className="w-14" />
                        </a>
                        <a href="https://www.linkedin.com/in/jihye-p-2b3755344/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo/linkedin.png" alt="" className="w-14" />
                        </a>
                    </div>
                </ScrollDiv>
            </div>
        </div>
    );
};

export default About;
