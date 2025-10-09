"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";

export default function StarWarsParallax() {
    const { scrollYProgress } = useScroll();

    // Create a “crawl away” transform
    const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
    const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="relative min-h-[200vh] bg-black text-yellow-400 overflow-hidden perspective-[800px]">
            {/* Starfield background */}
            <div className="absolute inset-0 bg-[radial-gradient(white,transparent_1px)] [background-size:3px_3px]" />

            {/* Content crawl */}
            <motion.div
                style={{
                    translateY,
                    rotateX,
                    scale,
                    opacity,
                    transformOrigin: "50% 100%",
                }}
                className="absolute bottom-[-50vh] left-1/2 -translate-x-1/2 w-[80%] text-center text-2xl leading-relaxed font-semibold"
            >
                {/* Example: letters or images */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {[
                        "A",
                        "L",
                        "O",
                        "N",
                        "G",
                        " ",
                        "T",
                        "I",
                        "M",
                        "E",
                        " ",
                        "A",
                        "G",
                        "O",
                    ].map((letter, i) => (
                        <motion.div
                            key={i}
                            className="text-6xl md:text-8xl font-extrabold"
                            style={{
                                y: useTransform(
                                    scrollYProgress,
                                    [0, 1],
                                    [0, -i * 50]
                                ),
                            }}
                        >
                            {letter}
                        </motion.div>
                    ))}
                </div>

                {/* Optional image crawl */}
                <div className="mt-20 flex justify-center gap-6 flex-wrap">
                    {[1, 2, 3].map((n) => (
                        <motion.div
                            key={n}
                            className="w-40 h-40 relative"
                            style={{
                                y: useTransform(
                                    scrollYProgress,
                                    [0, 1],
                                    [0, -n * 150]
                                ),
                            }}
                        >
                            <Image
                                src={`/images/planet-${n}.png`}
                                alt={`planet-${n}`}
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
