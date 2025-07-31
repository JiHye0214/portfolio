import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type LayoutProps = {
    isFirst: boolean;
    title?: string;
    children: ReactNode;
};

const ScrollDiv = ({ isFirst, title, children }: LayoutProps ) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }} // 시작 상태: 투명하고 아래쪽(y=50)
            whileInView={{ opacity: 1, y: 0 }} // 뷰포트에 보일 때: 완전 보이고 위치 원상복귀
            viewport={{ once: false, amount: 0.3 }} // 한 번만 실행, 30% 보이면 애니메이션 실행
            transition={{ duration: 0.5, ease: "easeOut" }} // 애니메이션 시간과 이징
            className={`h-full flex justify-center items-center text-center ${isFirst ? "font-bold text-6xl" : "flex-col gap-10 text-xl"}`}
        >
            <p className="text-4xl font-bold">{title}</p>
            {children}
        </motion.div>
    );
};

export default ScrollDiv;
