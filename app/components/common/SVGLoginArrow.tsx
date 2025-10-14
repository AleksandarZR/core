"use client";

import { motion } from "framer-motion";

/* SVG ARC EXPLAINED
    A rx ry xAxisRotation largeArcFlag sweepFlag x y 
    largeArcFlag:
        0 → short arc (less than 180°)
        1 → long arc (more than 180°)
    sweepFlag:
        0 → counterclockwise
        1 → clockwise*/


export default function SVGLoginArrow() {
    const strokeWidth: string = "12";

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <motion.svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-pink-800 cursor-pointer"
                initial="rest"
                whileHover="hover"
            >
                {/* Long (complementary) arc */}
                <motion.path
                    d="M 180 80 A 80 80 0 1 0 180 120"
                    stroke="aqua"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeLinecap="round"
                />

                {/* Group the arrow elements together */}
                <motion.g
                    variants={{
                        rest: { x: 0 },
                        hover: { x: -20 }, // move slightly right on hover
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    {/* Arrow shaft */}
                    <motion.line
                        x1="180"
                        y1="100"
                        x2="80"
                        y2="100"
                        stroke="aqua"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    {/* Arrow head (two lines) */}
                    <motion.line
                        x1="80"
                        y1="100"
                        x2="120"
                        y2="70"
                        stroke="aqua"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    <motion.line
                        x1="80"
                        y1="100"
                        x2="120"
                        y2="130"
                        stroke="aqua"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />
                </motion.g>
            </motion.svg>
        </div>
    );
}
