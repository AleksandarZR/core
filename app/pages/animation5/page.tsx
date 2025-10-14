"use client";

import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import HamburgerAnimation from "@/app/components/common/HamburgerAnimation";
import VerticalImageLooperFlex from "@/app/components/common/VerticalImageLooperFlex";
import VerticalImageLooperFlex3Cols from "@/app/components/common/VerticalImageLooperFlex3Cols";
import HorizontalImageLooper from "@/app/components/common/HorizontalImageLooper";
import InfiniteImageLooper from "@/app/components/common/InfiniteImageLooper";
import VerticalImageLooper3a from "@/app/components/common/VerticalImageLooper3a";
import Marquee from "@/app/components/common/Marquee";

import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

const images = [img1, img2, img3, img4, img5];

import img21 from "@/public/images/superman.png";
import img22 from "@/public/images/thor.png";
import img23 from "@/public/images/wolverine.png";
import img24 from "@/public/images/batman.png";
import img25 from "@/public/images/executioner.png";
import PathMorphing from "../../components/common/PathMorphing";
import SVGAnimation from "../../components/common/SVGAnimation";
import SVGLoginArrow from "../../components/common/SVGLoginArrow";

//const images2 = [img21, img22, img23, img23, img22];
const images2 = [img3, img4, img5, img1, img2];
const images3 = [img5, img1, img2, img3, img4];

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

            <div className="mt-space5 mb-space5 ml-space5 mr-space5 h-[800px] w-[calc(100%-2*var(--space5))] border-solid border-[2px] border-white rounded-xl">
                <VerticalImageLooperFlex images={images} />
            </div>

            <div className="mt-space5 mb-space5 ml-space5 mr-space5 h-[800px] w-[calc(100%-2*var(--space5))] border-solid border-[2px] border-white rounded-xl">
                <VerticalImageLooperFlex3Cols
                    imagesRow1={images}
                    imagesRow2={images2}
                    imagesRow3={images3}
                />
            </div>

            <div className="mt-space5 mb-space5 ml-space5 mr-space5 h-[250px] w-[calc(100%-2*var(--space5))] border-solid border-[2px] border-white rounded-xl">
                <HorizontalImageLooper />
            </div>

            <VerticalImageLooper3a></VerticalImageLooper3a>

            {/* OVO KOCI CELU STRANICU SVAKI PUT NAKON PROMENE OBLIKA */}
            {/* <PathMorphing></PathMorphing> */}

            <div className="w-full min-h-[250px]">
                <SVGAnimation></SVGAnimation>
            </div>

            <SVGLoginArrow></SVGLoginArrow>

            {/* <div className="mt-space5 mb-space5" >
                <InfiniteImageLooper />
            </div> */}

            {/* <Marquee></Marquee> */}
        </div>
    );
}
