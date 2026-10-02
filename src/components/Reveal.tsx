"use client";
import { ReactNode } from "react";
import { useInView } from "@/app/hooks/useInView";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export default function Reveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: RevealProps) {
    const { ref, inView } = useInView();

    const dirMap = {
        up: "translate-y-8",
        down: "-translate-y-8",
        left: "translate-x-8",
        right: "-translate-x-8",
    };

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${inView
                ? "opacity-100 translate-x-0 translate-y-0"
                : `opacity-0 ${dirMap[direction]}`
                } ${className}`}
        >
            {children}
        </div>
    );
}