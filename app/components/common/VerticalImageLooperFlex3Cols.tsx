/* Mogu da stavim y margine, ali onda moram da smanjim visinu slike. 
   Ako je kontejner visine 500px, svaki image mora da zauzme 100px sa marginom da animacija ne bi stucala
   U ovom primeru sam y pomeraj povecao 250%, tj. na 250%, ali sam zato i (height + margin) slike povecao 250%, tj na (240px + 10px)*/

"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Key } from "react";

interface Properties {
    imagesRow1: StaticImageData[];
    imagesRow2: StaticImageData[];
    imagesRow3: StaticImageData[];
    customStyleContainer?: string;
}

export default function VerticalImageLooper({
    imagesRow1,
    imagesRow2,
    imagesRow3,
    customStyleContainer = "",
}: Properties) {
    /* Duplicate images to create a seamless loop */
    const doubleImageArray1: StaticImageData[] = [...imagesRow1, ...imagesRow1];
    const doubleImageArray2: StaticImageData[] = [...imagesRow2, ...imagesRow2];
    const doubleImageArray3: StaticImageData[] = [...imagesRow3, ...imagesRow3];

    return (
        <div
            className={`overflow-hidden h-full w-full rounded-xl flex justify-center gap-[10px] ${customStyleContainer}`}
        >
            <motion.div
                animate={{
                    y: ["0%", "-250%"],
                    transition: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
                // className="flex flex-col items-center w-1/3"
                className="flex flex-col"
            >
                {doubleImageArray1.map((img: StaticImageData, i: any) => (
                    <div
                        key={i}
                        className="relative h-[calc(50%-10px)] flex-shrink-0 my-[5px] bg-red-200"
                    >
                        <Image
                            src={img}
                            alt={`img-${i}`}
                            className="h-full w-auto"
                        />
                    </div>
                ))}
            </motion.div>

            <motion.div
                animate={{
                    y: ["-250%", "0%"],
                    transition: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
                // className="flex flex-col items-center w-1/3"
                className="flex flex-col"
            >
                {doubleImageArray2.map((img: StaticImageData, i: any) => (
                    <div
                        key={i}
                        className="relative h-[calc(50%-10px)] flex-shrink-0 my-[5px] bg-red-200"
                    >
                        <Image
                            src={img}
                            alt={`img-${i}`}
                            className="h-full w-auto"
                        />
                    </div>
                ))}
            </motion.div>

            <motion.div
                animate={{
                    y: ["0%", "-250%"],
                    transition: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
                // className="flex flex-col items-center w-1/3"
                className="flex flex-col"
            >
                {doubleImageArray3.map((img: StaticImageData, i: any) => (
                    <div
                        key={i}
                        className="relative h-[calc(50%-10px)] flex-shrink-0 my-[5px] bg-red-200"
                    >
                        <Image
                            src={img}
                            alt={`img-${i}`}
                            className="h-full w-auto"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
