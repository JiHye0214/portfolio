import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type LayoutProps = {
    isFirst: boolean;
    title?: string;
    children: ReactNode;
};

const ScrollDiv = ({ isFirst, title, children }: LayoutProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full w-full max-w-[980px] mx-auto px-6 md:px-10 flex ${
                isFirst ? "items-center" : "flex-col justify-center gap-10"
            }`}
        >
            {isFirst ? (
                <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-white/50 mb-5">About me</p>

                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-[-0.07em] leading-[0.88]">
                        Hi! I'm
                        <br />
                        Jihye.
                    </h1>
                </div>
            ) : (
                <>
                    <div className="border-b border-white/20 pb-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-white/50">{title}</p>
                    </div>

                    <div className="max-w-3xl text-sm md:text-base leading-[1.9] text-white/70">{children}</div>
                </>
            )}
        </motion.div>
    );
};

export default ScrollDiv;
