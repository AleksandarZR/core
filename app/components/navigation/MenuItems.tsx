import React, { JSX } from "react";
import MenuItemWithSubMenu from "./MenuItemWithSubMenu";
import MenuItemLink from "./MenuItemLink";
import SubMenuItemLink from "./SubMenuItemLink";
import MenuItemLinkWithIcon from "./MenuItemLinkWithIcon";
import settingsIcon from "@/public/svg/settings.svg";
// import settingsIcon from "@/app/components/common/SvgComponent";

const MenuItems = (): JSX.Element => {
    return (
        <div className="w-full flex flex-row justify-center items-center space-x-4 text-nowrap">
            <MenuItemWithSubMenu menuItemName="Components" relatedPaths={["/pages/components1", "/pages/components2"]}>
                <SubMenuItemLink href="/pages/components1" label="Components 1" />
                <SubMenuItemLink href="/pages/components2" label="Components 2" />
            </MenuItemWithSubMenu>

            <MenuItemWithSubMenu menuItemName="Parallax" relatedPaths={["/pages/parallax1", "/pages/parallax2", "/pages/parallax3", "/pages/parallax4", "/pages/parallax5", "/pages/parallax6"]}>
                <SubMenuItemLink href={"/pages/parallax1"} label={"Parallax effect 1"} />
                <SubMenuItemLink href={"/pages/parallax2"} label={"Parallax effect 2"} />
                <SubMenuItemLink href={"/pages/parallax3"} label={"Parallax effect 3"} />
                <SubMenuItemLink href={"/pages/parallax4"} label={"Parallax effect 4"} />
                <SubMenuItemLink href={"/pages/parallax5"} label={"Parallax effect 5"} />
                <SubMenuItemLink href={"/pages/parallax6"} label={"Parallax effect 6"} />
                <SubMenuItemLink href={"/pages/parallax7"} label={"Parallax effect 7"} />
                {/* <SubMenuItemLink href={"/pages/parallax8"} label={"Parallax effect 8"} /> */}
                {/* <SubMenuItemLink href={"/pages/parallax9"} label={"Parallax effect 9"} /> */}
                {/* <SubMenuItemLink href={"/pages/parallax10"} label={"Parallax effect 10"} /> */}
            </MenuItemWithSubMenu>

            <MenuItemWithSubMenu menuItemName="Animation" relatedPaths={["/pages/animation1", "/pages/animation2", "/pages/animation3"]}>
                <SubMenuItemLink href={"/pages/animation1"} label={"Animation 1"} />
                <SubMenuItemLink href={"/pages/animation2"} label={"Animation 2"} />
                <SubMenuItemLink href={"/pages/animation3"} label={"Animation 3"} />
                <SubMenuItemLink href={"/pages/animation4"} label={"Animation 4"} />
            </MenuItemWithSubMenu>

            <MenuItemLink href={"/pages/settings"} label={"Settings"} />
            {/* <MenuItemLinkWithIcon href={"/pages/aaahor"} label={"Panel"} iconPath={settingsIcon}></MenuItemLinkWithIcon> */}

            <MenuItemWithSubMenu menuItemName="Home" relatedPaths={["/pages/home1", "/pages/home2"]}>
                <SubMenuItemLink href={"/pages/home1"} label={"Home 1"} />
                <SubMenuItemLink href={"/pages/home2"} label={"Home 2"} />
            </MenuItemWithSubMenu>
        </div>
    );
};

export default MenuItems;
