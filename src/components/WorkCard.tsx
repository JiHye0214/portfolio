import React from "react";

interface Tech {
    id: number;
    icon: string;
    name: string;
    type: string;
    level: number;
}

type LayoutProps = {
    title: string;
    role: string;
    period: string;
    description: string;
    tech: Tech[];
    isOngoing: boolean;
    thumb: string;
    link: string;
};

const WorkCard = ({ thumb, title, role, description, tech, period, isOngoing, link }: LayoutProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group w-full overflow-hidden cursor-pointer">
            {/* Image */}
            <div className="w-full h-[280px] overflow-hidden bg-gray-100">
                <img
                    src={`/assets/works/${thumb}.png`}
                    alt={title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
            </div>

            {/* Content */}
            <div className="pt-6">
                {/* Top */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400">{period}</p>

                    <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400">{isOngoing ? "Ongoing" : "Completed"}</p>
                </div>

                {/* Title */}
                <div className="flex items-center justify-between gap-5">
                    <div>
                        <p className="text-2xl font-semibold tracking-[-0.03em]">{title}</p>

                        <p className="mt-1 text-sm text-gray-400">{role}</p>
                    </div>

                    <span className="text-xl flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-500">{description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
                    {tech.slice(0, 3).map((item) => (
                        <span key={item.id} className="text-xs text-gray-400">
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default WorkCard;
