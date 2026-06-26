"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Spinner from "./Spinner";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/projects", label: "projects" },
        // { href: "/blogs", label: "blogs" },
        { href: "/resume", label: "resume" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md">
            <div className="mx-auto flex h-15 max-w-5xl items-center justify-between px-6">

                <Link
                    href="/"
                    className="font-mono text-[20px] font-extrabold tracking-wide flex flex-row items-center"
                >
                    <span className="flex text-primary mr-3 justify-center items-center">
                        <Spinner />
                    </span>
                    <span className="text-white hover:text-green-500 transition-colors duration-300 cursor-pointer">Ved-Mitra</span>
                </Link>

                <div className="flex items-center gap-8">
                    {links.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`px-2 py-2 rounded-lg text-[15px] font-medium tracking-wide transition-all duration-500 border
                                    ${isActive
                                        ? "bg-teal-500/10 border-teal-500/90 text-primary shadow-[0_0_15px_rgba(20,184,166,0.55)]"
                                        : "border-transparent bg-transparent text-foreground/80 hover:text-green-300"
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="h-0.25 w-full bg-accent"></div>
        </nav>
    );
}