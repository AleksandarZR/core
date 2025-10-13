import MarqueeItem from "./MarqueeItem";

import img1 from "@/public/images/strip01.jpg";
import img2 from "@/public/images/strip02.jpg";
import img3 from "@/public/images/strip03.jpg";
import img4 from "@/public/images/strip04.jpg";
import img5 from "@/public/images/strip05.jpg";

export default function Marquee() {
    //const images = ["@/public/images/strip01.jpg", "@/public/images/strip02.jpg", "@/public/images/strip03.jpg", "@/public/images/strip04.jpg", "@/public/images/strip05.jpg"];
    const images = [img1, img2, img3, img4, img5];

    return (
        <div className="container mx-auto overflow-hidden select-none">
            <MarqueeItem images={images} from={0} to={"-100%"} />
        </div>
    );
}
