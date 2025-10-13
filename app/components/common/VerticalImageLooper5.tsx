"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

const images = [img1, img2, img3, img4, img5];

const VerticalImageLooper = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-100%", scale: 1, zIndex: 4 },
        left: { x: "-200%", scale: 1, zIndex: 1 },
        right: { x: "200%", scale: 1, zIndex: 1 },
        right1: { x: "100%", scale: 1, zIndex: 4 },
    };

    return (
        <div className="relative flex items-center flex-col justify-center bg-white h-[500px] overflow-hidden z-3" style={{ zIndex: 3 }}>
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="my-4 rounded-[12px]"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: "40%", position: "absolute" }}
                >
                    <Image src={image} alt={image} />
                </motion.div>
            ))}

            <div className="flex flex-row gap-3 mt-space5">
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 z-10"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 z-10"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default VerticalImageLooper;
