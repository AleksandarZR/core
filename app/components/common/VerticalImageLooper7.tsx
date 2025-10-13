"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

const images = [img1, img2, img3, img4, img5];

export default function InfiniteLooper() {
    // Duplicate the array once for seamless looping
    const repeatedImages = [...images, ...images];

    return (
        <div className="w-[500px] overflow-hidden bg-white flex items-center">
            <motion.div
                className="flex w-[500px]"
                style={{ x: 0 }}
                animate={{ x: ["0%", "-100%"] }} // Move half of the total width (since we doubled it). NO, WORKS ONLY WITH -100%, NOT WITH -50%
                transition={{
                    duration: 3, // Adjust for speed
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {repeatedImages.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-[100px]">
                        <Image
                            src={src}
                            alt={`Looped Image ${index}`}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
