import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function ThemeToggler() {
    const [isLightMode, setIsLightMode] = useLocalStorage('theme_mode', false);

    const toggleTheme = () => {
        setIsLightMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (isLightMode) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isLightMode]);

    return (
        <div className="flex flex-col items-center min-w-fit" onClick={toggleTheme}>
            <div className={"themed theme-toggler " + (isLightMode ? "light" : "dark")}></div>
            <span className="theme-title font-extrabold text-[18px]">Dark Mode</span>
        </div>
    );
}

export default ThemeToggler;