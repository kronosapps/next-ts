"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { path: "/pages/challenges", name: "challenges" },
    { path: "/pages/solutions", name: "solutions" },
    { path: "/pages/resources", name: "resources" },
    { path: "/pages/pro", name: "unlock pro" },
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
