import React from "react";
import ScrollDiv from "../components/ScrollDiv";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="h-full w-full overflow-hidden">
            <div className="h-[802px] overflow-y-scroll scrollbar-hide">
                <ScrollDiv isFirst={true}>Hi! I'm Jihye</ScrollDiv>
                <ScrollDiv isFirst={false} title="Quick Intro">
                    I am a front-end developer based in Toronto, recently graduated from college.
                    <br /> I am passionate about building interactive, user-friendly web applications through clean and logical
                    code.
                    <br /> Currently, I am seeking opportunities to contribute to real-world projects and grow as a professional
                    engineer.
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
                        I have successfully delivered multiple full-stack projects, building a solid foundation in both front-end
                        and back-end development.
                        <br /> Beyond my academic studies, I have collaborated on real-world projects, including developing a
                        professional website for a local language school.
                        <br /> Please visit my{" "}
                        <Link to={"/projects"} className="text-yellow-500">
                            projects
                        </Link>{" "}
                        page for detailed descriptions, live demos, and insights into my development process.
                    </p>
                </ScrollDiv>
                <ScrollDiv isFirst={false} title="Passion for Development">
                    <p>
                        To me, web development is like having a constant conversation with a computer—step by step, I build
                        interfaces that come to life.
                        <br /> I’m drawn to the clear cause-and-effect nature of coding, where logic leads to immediate, tangible
                        results.
                        <br /> I particularly enjoy the process of troubleshooting; finding specific, fixable solutions to complex
                        errors makes the journey both challenging and deeply rewarding.
                    </p>
                </ScrollDiv>
                <ScrollDiv isFirst={false} title="Now & Next">
                    <div className="flex flex-col gap-10">
                        <p>
                            I am currently focused on honing my front-end development skills and am actively seeking opportunities
                            to contribute to professional projects in Toronto. <br /> Through a blend of personal and team-based
                            initiatives, I am deeply committed to crafting user-centered experiences and effective collaborative
                            solutions.
                        </p>
                        <p>
                            My goal is to leverage my technical foundation to grow as a well-rounded software engineer, delivering
                            meaningful value while continuously refining my problem-solving and teamwork capabilities.
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
