"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import city1 from "../../../public/images/wolverine.png";
import city2 from "@/public/images/batman.png";
import city3 from "@/public/images/superman.png";
import planet1 from "@/public/images/thor.png";
import planet2 from "@/public/images/executioner.png";

const ImageSlider = () => {
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
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };

    return (
        <div className="flex items-center flex-col justify-center bg-black h-screen">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="rounded-[12px]"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: "40%", position: "absolute" }}
                >
                    <Image src={image} alt={image} />
                </motion.div>
            ))}

            <div className="flex flex-row gap-3 mt-96">
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
