"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const links = [
    {
        url: "about",
        icon: "./profile.svg",
        alt: "about",
    },
    {
        url: "experiences",
        icon: "./briefcase.svg",
        alt: "experience",
    },
    {
        url: "projects",
        icon: "./terminal.svg",
        alt: "project",
    },
    {
        url: "contributions",
        icon: "./git-merge.svg",
        alt: "contributions",
    },
];

const Navbar = ({ currentPath }: { currentPath: string }) => {
    const activeIndex = useMemo(() => {
        return links.findIndex((link) => link.url === currentPath);
    }, [currentPath]);

    // Each link: p-2 (8px) + 20px icon + p-2 (8px) = 36px
    // Gap between links: gap-3 = 12px
    // Container top padding: py-3 = 12px
    // Center of nth item: 12 + n * (36 + 12) + 18 = 30 + n * 48
    // Indicator is w-8 h-8 (32px), so offset to center: -16px
    const indicatorTop = activeIndex >= 0 ? 30 + activeIndex * 48 - 16 : 0;
    return (
        <nav
            className="hidden sm:block fixed top-1/2 -translate-y-1/2 m-0 left-5 z-20"
        >
            <div className="bg-white z-20 relative flex flex-col justify-center items-center gap-3 py-3 rounded-full border-[1px] border-mute/20 shadow-sm shadow-mute/20 hover:shadow-mute/50 transition-all duration-200 px-1.5">
                {links.map((link) => (
                    <Link
                        key={link.url}
                        href={`#${link.url}`}
                        className="p-2 z-30"
                        >
                        {/* // className={` rounded-full transition-all duration-300 ${currentPath === link.url && "bg-primary/70  "}`} */}
                        <Image
                            src={link.icon}
                            alt={link.alt}
                            width={20}
                            height={20}
                            priority
                        />
                    </Link>
                ))}
                <div className="absolute z-10 w-8 h-8 bg-primary/70 rounded-full transition-all duration-300" style={{ top: `${indicatorTop}px` }}></div>
            </div>
        </nav>
    );
};
export default Navbar;
