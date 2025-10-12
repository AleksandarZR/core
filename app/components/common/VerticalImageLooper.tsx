"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

// Import your images (replace with your own)
import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

const images = [img1, img2, img3, img4, img5];
const IMAGE_HEIGHT = 200; // px (adjust to your image height)
const SCROLL_SPEED = 0.5; // px per frame (adjust for smoothness/speed)

export default function VerticalImageLooper() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [y, setY] = useState(0);

    // useAnimationFrame gives us a smooth loop synced to frame updates
    useAnimationFrame(() => {
        setY((prev) => {
            const next = prev - SCROLL_SPEED;

            // When one full image scrolls past the top, loop back
            if (Math.abs(next) >= IMAGE_HEIGHT) {
                return 0; // reset offset after shifting the array
            }
            return next;
        });
    });

    // Determine how many visible + buffer images to render
    const visibleImages = [...images, ...images]; // duplicate for seamless loop
    const translateY = y % IMAGE_HEIGHT;

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden h-[1000px] w-[300px] flex flex-col items-center justify-start bg-black rounded-xl"
        >
            <motion.div style={{ y: translateY }} className="flex flex-col">
                {visibleImages.map((img, index) => (
                    <div
                        key={index}
                        className="relative w-[300px] h-[200px] flex-shrink-0"
                    >
                        <Image
                            src={img}
                            alt={`scroll-image-${index}`}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
