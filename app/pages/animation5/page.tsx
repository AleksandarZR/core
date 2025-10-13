"use client";

import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import HamburgerAnimation from "@/app/components/common/HamburgerAnimation";
import VerticalImageLooper from "../../components/common/VerticalImageLooper3";
import InfiniteImageLooper from "../../components/common/InfiniteImageLooper";
import Marquee from "../../components/common/Marquee";

interface ImageData {
    imagePath: StaticImageData;
    index: number;
}

export default function Animation5() {
    const [isVisible, setIsVisible] = useState(true);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const hamburgerClickedHandler = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <div className="flex flex-col items-center pt-[calc(var(--navheight)+var(--space5))] pb-space10 bg-black w-full min-h-screen">
            {/* Blue square */}
            <motion.div
                className="w-48 h-48 bg-blue-200 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
            ></motion.div>

            {/* Green square */}
            <motion.div
                className="mt-space5 w-48 h-48 bg-green-200 rounded-xl"
                initial={{
                    maskImage:
                        "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)",
                }}
                animate={{
                    maskImage:
                        "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
                }}
                transition={{ duration: 3 }}
            />

            {/* 
            TRANSFORMS
            Translate: x, y, z
            Scale: scale, scaleX, scaleY
            Rotate: rotate, rotateX, rotateY, rotateZ
            Skew: skew, skewX, skewY
            Perspective: transformPerspective 
            */}

            {/* Red button */}
            <motion.button
                className="mt-space5 w-48 h-12 bg-red-200 rounded-xl font-bold text-black"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.1, transition: 0.5 }}
                whileTap={{ scale: 0.9, transition: 0.2 }}
                transition={{ duration: 2 }}
            >
                Click me
            </motion.button>

            {/* Yellow square */}
            <motion.div
                className="mt-space5 w-48 h-48 bg-yellow-200 rounded-xl"
                initial={{ transform: "translateX(-200px)" }}
                animate={{ transform: "translateX(0px)" }}
                transition={{ type: "spring" }}
            />

            {/* Purple list with 3 green items */}
            <motion.ul
                className="flex flex-col items-center justify-between  mt-space5 w-48 h-48 bg-purple-200 rounded"
                initial={{ "--rotate": "0deg" }}
                animate={{ "--rotate": "360deg" }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <li
                    style={{ transform: "rotate(var(--rotate))" }}
                    className="h-12 w-32 bg-green-800 rounded"
                />
                <li
                    style={{ transform: "rotate(var(--rotate))" }}
                    className="h-12 w-32 bg-green-800 rounded"
                />
                <li
                    style={{ transform: "rotate(var(--rotate))" }}
                    className="h-12 w-32 bg-green-800 rounded"
                />
            </motion.ul>

            {/* Purple list with 3 green items - OVAKO MI JE JASNIJE DEFINISANO IAKO IMA VISE KODA */}
            <motion.ul
                className="flex flex-col items-center justify-between  mt-space5 w-48 h-48 bg-purple-200 rounded"
                transition={{ duration: 2, repeat: Infinity }}
            >
                <motion.li
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-12 w-32 bg-green-800 rounded"
                />
                <motion.li
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-12 w-32 bg-green-800 rounded"
                />
                <motion.li
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-12 w-32 bg-green-800 rounded"
                />
            </motion.ul>

            {/* Pink square - Overriding default transitions with specific transition */}
            <motion.div
                className="flex flex-col items-center justify-between  mt-space5 w-48 h-48 bg-pink-200 rounded"
                animate={{ opacity: 1 }}
                whileHover={{
                    opacity: 0.7,
                    // Specific transitions override default transitions
                    transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Exit animations
            Motion for React can animate elements as they're removed from the DOM.
            In React, when a component is removed, it's usually removed instantly.
            Motion provides the AnimatePresence component which keeps elements in the DOM while they perform an animation defined with the exit prop. */}

            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="flex flex-col items-center justify-between  mt-space5 w-48 h-48 bg-orange-200 rounded"
                        key="box"
                    />
                ) : null}
            </AnimatePresence>

            <motion.button
                className="mt-space5 w-48 h-12 bg-orange-200 rounded-xl font-bold text-black"
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>

            {/* White square - KEYFRAMES */}
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                className="flex flex-col items-center justify-between  mt-space5 w-48 h-48 bg-white"
            />

            <div className="mt-space10" onClick={hamburgerClickedHandler}>
                <HamburgerAnimation isOpen={isHamburgerOpen} />
            </div>

            <div className="mt-space5 mb-space5" >
                <VerticalImageLooper />
            </div>

            {/* <div className="mt-space5 mb-space5" >
                <InfiniteImageLooper />
            </div> */}

            {/* <Marquee></Marquee> */}
        </div>
    );
}
