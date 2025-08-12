import { AiFillHome, AiFillMacCommand } from "react-icons/ai";
import { FaQuoteLeft, FaUser } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { IoNotifications, IoLogOutOutline } from "react-icons/io5";
import { RiSettingsFill } from "react-icons/ri";
import type { IconType } from "react-icons";

export interface NavItemData {
    to: string;
    icon: IconType;
    label: string;
}

export const mainNavItems: NavItemData[] = [
    {
        to: "/",
        icon: AiFillHome,
        label: "Dashboard"
    },
    {
        to: "/reviews",
        icon: FaQuoteLeft,
        label: "Reviews"
    },
    {
        to: "/keywords",
        icon: FaHashtag,
        label: "Keywords"
    },
    {
        to: "/web-crawler",
        icon: AiFillMacCommand,
        label: "Web crawler"
    },
    {
        to: "/notifications",
        icon: IoNotifications,
        label: "Notifications"
    },
    {
        to: "/settings",
        icon: RiSettingsFill,
        label: "Settings"
    },
    {
        to: "/user-management",
        icon: FaUser,
        label: "User management"
    }
];

export const bottomNavItems: NavItemData[] = [
    {
        to: "/log-out",
        icon: IoLogOutOutline,
        label: "Log out"
    }
];
