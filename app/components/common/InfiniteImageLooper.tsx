"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import city1 from "@/public/images/strip01.jpg";
import city2 from "@/public/images/strip02.jpg";
import city3 from "@/public/images/strip03.jpg";
import planet1 from "@/public/images/strip04.jpg";
import planet2 from "@/public/images/strip05.jpg";

const InfiniteImageLooper = () => {
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

    const images = [city1, city2, city3, planet1, planet2];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { y: "0%" },
        left1: { y: "-50%" },
        left: { y: "-90%" },
        right: { y: "90%" },
        right1: { y: "50%" },
    };

    return (
        <div className="flex items-center flex-col justify-center bg-black h-screen">
            <div className = "flex flex-col items-center">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="rounded-[12px] h-16"
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        // style={{ width: "40%", position: "absolute" }}
                    >
                        <Image src={image} alt={image} className="h-48 w-auto"/>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-row gap-3 mt-96">
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

export default InfiniteImageLooper;
