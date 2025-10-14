/* Mogu da stavim y margine, ali onda moram da smanjim visinu slike. 
   Ako je kontejner visine 500px, svaki image mora da zauzme 100px sa marginom da animacija ne bi stucala
   U ovom primeru sam y pomeraj povecao 250%, tj. na 250%, ali sam zato i (height + margin) slike povecao 250%, tj na (240px + 10px)*/

"use client";

import { motion } from "framer-motion";
import Image, {StaticImageData} from "next/image";
import { Key } from "react";

interface Properties {
    images: StaticImageData[];
    customStyleContainer?: string;
}

export default function VerticalImageLooper({ images, customStyleContainer = "" }: Properties) {
    {/* Duplicate images to create a seamless loop */ }
    const doubleImageArray: StaticImageData = [...images, ...images];

    return (
        <div className={`overflow-hidden h-full w-full rounded-xl flex justify-center ${customStyleContainer}`} >
            <motion.div
                animate={{
                    y: ["0%", "-250%"],
                    transition: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
                className="flex flex-col "
            >
                
                {doubleImageArray.map((img: StaticImageData, i: any) => (
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
