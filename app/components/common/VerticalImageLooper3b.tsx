/* Mogu da stavim y margine, ali onda moram da smanjim visinu slike. 
   Ako je kontejner visine 500px, svaki image mora da zauzme 100px sa marginom da animacija ne bi stucala
   U ovom primeru sam y pomeraj povecao 250%, tj. na 250%, ali sam zato i (height + margin) slike povecao 250%, tj na (240px + 10px)*/

   "use client";

   import { motion } from "framer-motion";
   import Image from "next/image";
   
   import img1 from "@/public/images/strip01.jpg";
   import img2 from "@/public/images/strip02.jpg";
   import img3 from "@/public/images/strip03.jpg";
   import img4 from "@/public/images/strip04.jpg";
   import img5 from "@/public/images/strip05.jpg";
   
   const images = [img1, img2, img3, img4, img5];
   
   export default function VerticalImageLooper() {
       return (
           <div className="overflow-hidden h-[500px] w-[300px] bg-black rounded-xl flex justify-center">
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
                   {/* Duplicate images to create a seamless loop */}
                   {[...images, ...images].map((img, i) => (
                       <div
                           key={i}
                           className="relative w-[300px] h-[240px] flex-shrink-0 my-[5px]"
                       >
                           <Image
                               src={img}
                               alt={`img-${i}`}
                               fill
                               className="object-contain"
                           />
                       </div>
                   ))}
               </motion.div>
           </div>
       );
   }
   