"use client";

import React from "react";
import LogoAndName from "@/app/components/common/LogoAndName";
import DropDownMenu from "@/app/components/navigation/DropdownMenu";
import LogoMob from "@/app/components/common/LogoMob";
import MenuItems from "@/app/components/navigation/MenuItems";
import ButtonLoginArrow from "@/app/components/common/ButtonLoginArrow";
import LogoutButtonArrow from "@/app/components/common/ButtonLogoutArrow";
import { usePathname, useRouter } from "next/navigation";
import UserIcon from "@/app/components/common/UserIcon";
import Arrow from "@/app/components/common/Arrow";

const Navigation = ({ session }: any) => {
    const pathname = usePathname();
    const router = useRouter();
    const lang = pathname.split("/")[1];

    return (
        <>
            {/* Desktop Navigation */}
            <div className="md:hidden sm:hidden flex flex-row justify-between items-center w-full h-20 fixed top-0 left-0 z-100 pt-4 pb-4 pl-space2 pr-space2 bg-color1-transparent border-b-2">
                <div>
                    <LogoAndName session={session} />
                </div>
                <MenuItems session={session} />
                {session && (
                    <div className=" min-w-[42px]">
                        <UserIcon></UserIcon>
                    </div>
                )}
                
                {!session && (
                    <Arrow/>
                )}
                {session && <LogoutButtonArrow />}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex flex-row justify-between items-center w-full max-w-full h-20 fixed top-0 left-0 z-100 pt-4 pb-4 pl-space1 pr-space1 bg-color1-transparent border-b-2">
                <DropDownMenu session={session} />

                {/* Center the Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <LogoMob />
                </div>

                {/* User Icons on the right */}
                <div className="flex items-center md:space-x-2">
                    {session && <UserIcon />}
                    {!session && <Arrow/>}
                </div>
            </div>
        </>
    );
};

export default Navigation;
