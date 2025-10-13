import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

const images = [img1, img2, img3, img4, img5];

const repeatedImages = [...images, ...images]; // Duplicate for seamless loop

export default function InfiniteLooper() {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }} className="w-[500px] bg-white">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }} // Adjust based on your layout and content width
        transition={{
          duration: 5, // Adjust duration as needed
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ display: "inline-flex" }} // Keeps images in a row
      >
        {repeatedImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Looped Image ${index}`}
            width={200} // Set appropriate width and height
            height={150}
            style={{ marginRight: "20px" }} // Add spacing between images
          />
        ))}
      </motion.div>
    </div>
  );
}