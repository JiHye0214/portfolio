import React from "react";
import ScrollDiv from "../components/ScrollDiv";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="h-full w-full overflow-hidden">
            <div className="h-full overflow-y-scroll scrollbar-hide">
                <ScrollDiv isFirst={true}>Hi! I'm Jihye</ScrollDiv>

                <ScrollDiv isFirst={false} title="Quick Intro">
                    I am a software developer based in Toronto and a recent college graduate.
                    <br />
                    I enjoy turning ideas into interactive, responsive web applications through thoughtful design and clean,
                    maintainable code.
                    <br />I am currently looking for opportunities to grow as a developer while contributing to real-world
                    projects.
                </ScrollDiv>

                <ScrollDiv isFirst={false} title="What I Work With">
                    <div className="flex flex-col gap-5">
                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/react.png" title="React" alt="React" className="w-14" />
                            <p>Building interactive and responsive user interfaces</p>
                        </div>

                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/tailwind.png" title="Tailwind CSS" alt="Tailwind CSS" className="w-14" />
                            <p>Creating clean and flexible layouts with utility-first styling</p>
                        </div>

                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/typescript.png" title="TypeScript" alt="TypeScript" className="w-14" />
                            <p>Writing structured and reliable code with TypeScript</p>
                        </div>

                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/nodejs.png" title="Node.js" alt="Node.js" className="w-14" />
                            <p>Building backend functionality and working with APIs</p>
                        </div>

                        <div className="h-[55px] flex items-center gap-5">
                            <img src="/assets/logo/github.png" title="Git/GitHub" alt="Git/GitHub" className="w-14" />
                            <p>Managing code, version control, and collaborative development</p>
                        </div>
                    </div>
                </ScrollDiv>

                <ScrollDiv isFirst={false} title="What I've Built">
                    <p>
                        I have built multiple full-stack projects that have helped me develop a strong foundation across both
                        front-end and back-end development.
                        <br />
                        My projects range from personal applications to real-world websites, where I have worked with responsive
                        interfaces, APIs, databases, and user-focused functionality.
                        <br />
                        Take a look at my{" "}
                        <Link to="/projects" className="text-yellow-500">
                            projects
                        </Link>{" "}
                        to see what I have built and how I approached each one.
                    </p>
                </ScrollDiv>

                <ScrollDiv isFirst={false} title="How I Like to Build">
                    <p>
                        I enjoy taking an idea and turning it into something people can actually use.
                        <br />
                        I like breaking problems into smaller pieces, understanding how each part should work, and refining the
                        details along the way.
                        <br />
                        When something does not work, I enjoy tracing the problem back to its source and finding a practical
                        solution.
                    </p>
                </ScrollDiv>

                <ScrollDiv isFirst={false} title="Now & Next">
                    <div className="flex flex-col gap-10">
                        <p>
                            I am currently focused on strengthening my software development skills and looking for opportunities
                            to contribute to professional projects in Toronto.
                            <br />I am interested in working across both front-end and back-end development while learning from
                            experienced developers and contributing to real-world products.
                        </p>

                        <p>
                            My goal is to grow into a well-rounded software engineer who can understand a problem, build a
                            practical solution, and continuously improve along the way.
                        </p>
                    </div>
                </ScrollDiv>

                <ScrollDiv isFirst={false} title="Wanna Know More?">
                    <div className="flex gap-7">
                        <a href="https://github.com/JiHye0214" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo/github.png" alt="GitHub" className="w-14" />
                        </a>

                        <a href="https://www.linkedin.com/in/jihye-p-2b3755344/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo/linkedin.png" alt="LinkedIn" className="w-14" />
                        </a>
                    </div>
                </ScrollDiv>
            </div>
        </div>
    );
};

export default About;
