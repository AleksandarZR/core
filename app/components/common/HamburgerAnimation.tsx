"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

interface Properties {
    customStyleBackground?: string;
    customStyleLine?: string;
    isMenuOpen?: (isOpen: boolean) => void;
}

const HamburgerAnimation = ({ customStyleBackground = "", customStyleLine = "", isMenuOpen }: Properties) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);

        // Call parent method
        if (isMenuOpen)
            isMenuOpen(!isOpen);
    };

    return (
        <motion.div
            className={`${customStyleBackground} flex flex-col items-center justify-between m-0 w-10 h-8 cursor-pointer bg-rblack`}
            id="hamburgerContainerId"
            transition={{ duration: 1 }}
            onClick={() => handleClick()}
        >
            <motion.span
                className={`${customStyleLine} w-10 h-1 bg-white rounded`}
                style={{ transformOrigin: "center" }} // <-- ensures center rotation
                id="bar1"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                    y: isOpen ? [0, 14, 14] : [14, 14, 0],
                    rotate: isOpen ? [0, 0, -45] : [-45, 0, 0],
                }}
                transition={{
                    duration: 1,
                    times: [0, 0.5, 1],
                }}
            />
            <motion.span
                className={`${customStyleLine} w-10 h-1 bg-white rounded`}
                id="bar2"
                initial={{ rotate: 0 }}
                animate={{
                    rotate: isOpen ? [0, 0, -45] : [-45, 0, 0],
                }}
                transition={{
                    duration: 1,
                    times: [0, 0.5, 1],
                }}
            />
            <motion.span
                className={`${customStyleLine} w-10 h-1 bg-white rounded`}
                id="bar3"
                initial={{ y: 0 }}
                animate={{
                    y: isOpen ? [0, -14, -14] : [-14, -14, 0],
                    rotate: isOpen ? [0, 0, 45] : [45, 0, 0],
                }}
                transition={{
                    duration: 1,
                    times: [0, 0.5, 1],
                }}
            />
        </motion.div>
    );
};

export default HamburgerAnimation;