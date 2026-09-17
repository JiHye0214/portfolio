import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="min-h-[calc(100vh-96px)]">
            <section className="w-full max-w-[1200px] mx-auto min-h-[calc(100vh-96px)] py-10 md:py-14 flex flex-col">
                {/* Intro */}
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-gray-400 mb-2">Digital designer & developer</p>

                        <h1 className="text-2xl md:text-3xl font-medium tracking-[-0.04em]">Jihye PARK</h1>
                    </div>

                    <p className="hidden md:block text-xs text-gray-400 text-right leading-relaxed">
                        Toronto, Canada
                        <br />
                        2026
                    </p>
                </div>

                {/* Main */}
                <div className="flex-1 flex items-center py-12 md:py-16">
                    <div className="w-full grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-16 items-center">
                        {/* Statement */}
                        <div>
                            <h2 className="font-black uppercase tracking-[-0.07em] leading-[0.88] text-[clamp(4rem,8vw,8rem)]">
                                I BUILD
                                <br />
                                DIGITAL
                                <br />
                                <span className="text-gray-300">THINGS.</span>
                            </h2>

                            <p className="mt-8 max-w-md text-sm md:text-base leading-relaxed text-gray-500">
                                Websites, apps, and interfaces shaped through design, code, and curiosity.
                            </p>
                        </div>

                        {/* Images */}
                        <div className="relative h-[400px] md:h-[500px]">
                            <img
                                src="/assets/me1.jpg"
                                alt="Jihye Park"
                                className="absolute top-0 right-0 w-[82%] h-[82%] object-cover"
                            />

                            <img
                                src="/assets/me2.jpg"
                                alt="Jihye Park"
                                className="absolute bottom-0 left-0 w-[45%] h-[45%] object-cover border-[8px] border-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex justify-end">
                    <Link to="/work" className="group flex items-center gap-3 w-fit text-sm font-medium">
                        <span className="border-b border-black pb-1">View work</span>

                        <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
