"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollDemo() {
    // gives you a value from 0 (top of the page) to 1 (bottom).
    const { scrollYProgress } = useScroll();

    // Map scroll progress to motion values
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-550%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="min-h-[200vh] bg-gray-900 text-white">
            {/* Big scrollable page */}
            <motion.div
                className="fixed top-1/2 left-1/4 text-5xl font-bold"
                style={{ y, opacity }}
            >
                Scroll Animation Demo 🚀
            </motion.div>
        </div>
    );
}
