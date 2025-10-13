import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
//import { StaticImageData } from "../../../node_modules/next/image";

export default function MarqueeItem({
    images,
    from,
    to,
}: {
    images: StaticImageData[];
    from: number | string;
    to: number | string;
}) {
    return (
        <div className="flex my-24">
            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((image: any, index: number) => {
                    return (
                        <Image
                            width={200}
                            height={200}
                            alt={`marqueImg${index}`}
                            className="object-contain pr-20"
                            src={image}
                            key={index}
                        />
                    );
                })}
            </motion.div>

            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((image: any, index: number) => {
                    return (
                        <Image
                            width={200}
                            height={200}
                            alt={`marqueImg${index}`}
                            className="object-contain pr-20"
                            src={image}
                            key={index}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
}
