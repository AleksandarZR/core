import Link from "next/link";

interface Properties {
    text: string;
    link: string;
}

export default function ButtonGeneric(properties: Properties) {
    return (
        <div className="bg-button-background-color text-button-text-color pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center cursor-pointer">
            <Link href={properties.link} className="">
                {properties.text}
            </Link>
        </div>
    );
}
