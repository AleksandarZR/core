"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
    useViewportScroll,
    useScroll,
    motion,
    useTransform,
    useMotionValue,
} from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import image1 from "@/public/images/strip01.jpg";
import image2 from "@/public/images/strip02.jpg";
import image3 from "@/public/images/strip03.jpg";
import image4 from "@/public/images/strip04.jpg";
import image5 from "@/public/images/strip05.jpg";

interface ImageData {
    imagePath: StaticImageData;
    index: number;
}

export default function Parallax9() {
    const Images: ImageData[] = [
        { imagePath: image1, index: 1 },
        { imagePath: image2, index: 2 },
        { imagePath: image3, index: 3 },
        { imagePath: image4, index: 4 },
        { imagePath: image5, index: 5 },
    ];

    return (
        <div className="flex flex-col items-center pt-[calc(var(--navheight)+var(--space5))] bg-black w-full min-h-screen">
            {Images.map((image) => (
                <motion.div
                    className="pb-space5"
                    key={image.index}
                    initial={{
                        scale: 0.5
                    }}
                    // animate={{
                    //     rotate: 360,
                    //     transition: { duration: 2 },
                    // }}
                    whileInView={{
                        scale: 1,
                        transition: { duration: 1.5 },
                    }}
                >
                    <Image src={image.imagePath} alt={image.imagePath} />
                </motion.div>
            ))}
        </div>
    );
}
