"use client";

import { motion } from "framer-motion";

export default function SVGAnimation() {
    return (
        // <div>
        //     <motion.svg>
        //         <motion.circle
        //             style={{ fill: "#00f" }}
        //             animate={{ fill: "#f00" }}
        //         />
        //     </motion.svg>

        //     <motion.svg
        //         viewBox="0 0 200 200"
        //         animate={{ viewBox: "100 0 200 200" }} // 100px to the right
        //     />

        //     <motion.path
        //         d="M 0,0 l 0,10 l 10,10"
        //         animate={{ d: "M 0,0 l 10,0 l 10,10" }}
        //     />
        // </div>

        <div className="flex items-center justify-center h-full bg-black">
            <motion.svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <motion.path
                    /*
                    M 20 100 -  Move To (x=20, y=100) - Moves the "pen" to the point (20,100) — this is where drawing starts. It doesn’t draw anything yet.
                    Q 100 20, 180 100 - Quadratic Bézier curve - Draws a smooth curve from the current point (20,100) to (180,100). The point (100,20) is the control point, which pulls the curve upward like a handle. 
                    Q 100 180, 20 100 - Another quadratic Bézier curve - Draws another curve, this time from (180,100) back to (20,100). The control point (100,180) pulls the curve downward.
                    Z - Close Path - Closes the shape by connecting the last point back to the first one (20,100).*/
                    d="M 20 100 Q 100 20, 180 100 Q 100 180, 20 100 Z"
                    fill="transparent"
                    stroke="#00ffff"
                    strokeWidth="4"
                    variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                            pathLength: 1,
                            opacity: 1,
                            transition: {
                                duration: 2,
                                ease: "easeInOut",
                            },
                        },
                    }}
                />
            </motion.svg>

            {/* motion.svg → enables Framer Motion animations inside an SVG.
                motion.circle → the circle element itself, now animatable.
                cx, cy, r → define the circle’s position and radius.
                pathLength → Framer Motion’s special property that controls how much of a path (or stroke) is visible — great for “drawing” effects.
                transition → controls the timing and looping of the animation. */}
            
            {/* Circle */}
            <motion.svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="100" // circle center X
                    cy="100" // circle center Y
                    r="80" // radius
                    stroke="yellow"
                    strokeWidth="8"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
        </div>
    );
}
