"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

const images = [img1, img2, img3, img4, img5];

export default function VerticalImageLooper3D() {
    return (
        <div
            className="overflow-hidden h-[500px] w-[300px] bg-black rounded-xl flex justify-center"
            style={{ perspective: "800px" }} // 3D effect depth
        >
            <motion.div
                animate={{
                    y: ["0%", "-100%"], // vertical loop
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
                className="flex flex-col"
                style={{
                    transformOrigin: "center center",
                    rotateX: 20, // rotate around X axis
                    rotateZ: -5, // rotate around Z axis
                }}
            >
                {[...images, ...images].map((img, i) => (
                    <div
                        key={i}
                        className="relative w-[300px] h-[90px] flex-shrink-0 my-[5px]" // fixed height + margin
                    >
                        <Image
                            src={img}
                            alt={`img-${i}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
