"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex"
            >
                <FontAwesomeIcon
                    icon={faSun}
                    className=" h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"
                />
                <FontAwesomeIcon
                    icon={faMoon}
                    className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
            </button>
        </div>
    );
};

export default ThemeToggler;
