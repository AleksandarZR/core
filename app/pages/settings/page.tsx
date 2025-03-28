import Card from "@/app/components/common/Card";
import CardTextLine from "@/app/components/common/CardTextLine";

export default function Settings() {
    return (
        <div className="pt-[calc(var(--navheight)+var(--space5))] sm:pt-[calc(var(--navheight)+var(--space22))] pb-space5 sm:pb-space22 px-space5 sm:px-space22 w-full min-h-screen grid grid-cols-3 md:grid-cols-2 sm:flex sm:flex-col gap-space5 sm:gap-space22 bg-color10 text-color1">
            <Card header="Tailwind Config">
                <CardTextLine
                    textLine="Large screen values for paddings, margins:"
                    customStyle="font-bold text-xl"
                ></CardTextLine>
                <CardTextLine textLine="space1"></CardTextLine>
                <CardTextLine textLine="space2"></CardTextLine>
                <CardTextLine textLine="space3"></CardTextLine>
                <CardTextLine textLine="..."></CardTextLine>

                <CardTextLine
                    textLine="Middle screen values for paddings, margins:"
                    customStyle="pt-space1 font-bold text-xl"
                ></CardTextLine>
                <CardTextLine textLine="space11"></CardTextLine>
                <CardTextLine textLine="space12"></CardTextLine>
                <CardTextLine textLine="space13"></CardTextLine>
                <CardTextLine textLine="..."></CardTextLine>

                <CardTextLine
                    textLine="Small screen values for paddings, margins:"
                    customStyle="pt-space1 font-bold text-xl"
                ></CardTextLine>
                <CardTextLine textLine="space21"></CardTextLine>
                <CardTextLine textLine="space22"></CardTextLine>
                <CardTextLine textLine="space23"></CardTextLine>
                <CardTextLine textLine="..."></CardTextLine>

                <CardTextLine
                    textLine="Colours:"
                    customStyle="font-bold pt-space1 text-xl"
                ></CardTextLine>
                <CardTextLine textLine="color1"></CardTextLine>
                <CardTextLine textLine="color1-transparent"></CardTextLine>
                <CardTextLine textLine="color2"></CardTextLine>
                <CardTextLine textLine="color2-transparent"></CardTextLine>
                <CardTextLine textLine="color3"></CardTextLine>
                <CardTextLine textLine="color3-transparent"></CardTextLine>
                <CardTextLine textLine="..."></CardTextLine>
            </Card>

            <Card header="ESLint Config">
            <CardTextLine
                    textLine="Formater settings:"
                    customStyle="font-bold text-xl"
                ></CardTextLine>
                <CardTextLine textLine="quotes: double"></CardTextLine>
                <CardTextLine textLine="semicolon: always"></CardTextLine>
                <CardTextLine textLine="tab-size: 4"></CardTextLine>
                <CardTextLine textLine="..."></CardTextLine>
            </Card>

            <Card></Card>

            <Card></Card>
        </div>
    );
}
