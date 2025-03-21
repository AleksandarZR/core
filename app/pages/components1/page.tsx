"use client";
import ProgressBarCircular from "@/app/components/common/ProgressBarCircular";
import CoveredImage from "@/app/components/common/CoveredImage";
import CoveredImageFlexible from "@/app/components/common/CoveredImageFlexible";
import ButtonLink from "@/app/components/common/ButtonLink";
import { ButtonState } from "@/app/enums/enums";
import ButtonClick from "@/app/components/common/ButtonClick";
import MessageWindow, {
    MessageType,
} from "@/app/components/common/MessageWindow";
import { useState } from "react";

export default function Components1() {
    const [infoWindowVisible, setInfoWindowVisible] = useState(false);
    const [errorWindowVisible, setErrorWindowVisible] = useState(false);

    const buttonInfoClick = () => {
        setInfoWindowVisible(true);
    };

    const buttonErrorClick = () => {
        setErrorWindowVisible(true);
    };

    const onClosingInfoWindow = () => {
        setInfoWindowVisible(false);
    };

    const onClosingErrorWindow = () => {
        setErrorWindowVisible(false);
    };

    return (
        <div className="px-space5 sm:px-space22 pt-[calc(var(--navheight)+var(--space5))] sm:pt-[calc(var(--navheight)+var(--space22))] pb-space5 sm:pb-space22 w-full min-h-screen flex flex-row flex-wrap justify-start items-start gap-space5 sm:gap-space22 bg-color10 text-color1">
            <ProgressBarCircular></ProgressBarCircular>

            <CoveredImageFlexible
                customStyle="min-w-[100px] min-h-[100px] w-[200px] h-[200px] bg-white"
                imagePath="/images/consulting.png"
            ></CoveredImageFlexible>

            <CoveredImage></CoveredImage>

            <CoveredImageFlexible
                customStyle="min-w-[256px] min-h-[256px] bg-white"
                imagePath="/images/consulting.png"
            ></CoveredImageFlexible>

            <ButtonLink text="Home" link="/"></ButtonLink>

            <ButtonClick
                text="Show Info"
                handler={buttonInfoClick}
                state={ButtonState.ENABLED}
                customStyle="bg-white"
            />

            {infoWindowVisible && (
                <MessageWindow
                    messageType={MessageType.INFO}
                    messageContent="This is a message of the custom message window."
                    onClose={onClosingInfoWindow}
                ></MessageWindow>
            )}

            <ButtonClick
                text="Show Error"
                handler={buttonErrorClick}
                state={ButtonState.ENABLED}
                customStyle="bg-white"
            />

            {errorWindowVisible && (
                <MessageWindow
                    messageType={MessageType.ERROR}
                    messageContent="This is a message of the custom message window."
                    onClose={onClosingErrorWindow}
                ></MessageWindow>
            )}
        </div>
    );
}
