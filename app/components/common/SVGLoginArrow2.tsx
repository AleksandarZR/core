"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

/* SVG ARC EXPLAINED
    A rx ry xAxisRotation largeArcFlag sweepFlag x y 
    rx = 80, ry = 80 → radius of the arc (X and Y radius) I think it's actually the start point of the arc
    xAxisRotation → rotation of the arc’s ellipse (0 = none)
    largeArcFlag:
        0 → short arc (less than 180°)
        1 → long arc (more than 180°)
    sweepFlag:
        0 → counterclockwise
        1 → clockwise
    x y:
        endpoint of the arc*/


export default function SVGLoginArrow2() : JSX.Element {
    const strokeWidth: string = "12";
    const strokeColor: string = "white";

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <motion.svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer overflow-visible"
                initial="rest"
                whileHover="hover"
            >
                {/* Long (complementary) arc */}
                <motion.path
                    d="M 193 80 A 94 94 0 1 0 193 120"
                    stroke={strokeColor}
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
                        x1="193"
                        y1="100"
                        x2="80"
                        y2="100"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    {/* Arrow head (two lines) */}
                    <motion.line
                        x1="80"
                        y1="100"
                        x2="120"
                        y2="70"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    <motion.line
                        x1="80"
                        y1="100"
                        x2="120"
                        y2="130"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />
                </motion.g>
            </motion.svg>
        </div>
    );
}
