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
    // const variants = {
    //     animate: {
    //         y: ["0%", "-100%"], // move entire column upward
    //         transition: {
    //             y: {
    //                 duration: 10, // time to move from start to end
    //                 repeat: Infinity, // loop forever
    //                 ease: "linear", // constant speed
    //             },
    //         },
    //     },
    // };

    return (
        <div className="overflow-hidden h-[500px] w-[300px] bg-black rounded-xl flex justify-center">
            <motion.div
                animate={{
                    y: ["0%", "-100%"],
                    transition: { duration: 10, repeat: Infinity, ease: "linear" },
                  }}
                  className="flex flex-col"
            >
                {/* Duplicate images to create a seamless loop */}
                {[...images, ...images].map((img, i) => (
                    <div
                        key={i}
                        className="relative w-[300px] h-[100px] flex-shrink-0"
                    >
                        <Image
                            src={img}
                            alt={`img-${i}`}
                            fill
                            //style={{ objectFit: "cover" }}
                            className="object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
