"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { path: "/", name: "home" },
    { path: "/pages/projects", name: "projects" },
    { path: "/pages/contact", name: "contact" },
];

const Navigation = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween" }}
                                layoutId="underline"
                                className={`${underlineStyles}`}
                            ></motion.span>
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navigation;
