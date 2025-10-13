"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

const images = [img1, img2, img3, img4, img5];

export default function VerticalImageLooper() {
    const variants = {
        loop: {
            y: ["0%", "-50%"],
            transition: {
                duration: 12, // speed of one full scroll cycle
                ease: "linear",
                repeat: Infinity,
            },
        },
    };

    return (
        <div className="relative h-[400px] w-[300px] overflow-hidden bg-black flex justify-center items-center">
            <motion.div
                className="flex flex-col"
                variants={variants}
                animate="loop"
            >
                {[...images, ...images].map((img, i) => (
                    <div
                        key={i}
                        className="relative w-[250px] h-[120px] my-3 flex-shrink-0 flex items-center justify-center bg-black"
                    >
                        <Image
                            src={img}
                            alt={`image-${i}`}
                            fill
                            className="object-contain object-center"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
