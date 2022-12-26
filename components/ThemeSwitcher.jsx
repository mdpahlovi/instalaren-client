import { Switch } from "@material-tailwind/react";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const handelTheme = (event) => {
        if (event.target.checked) {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    return <Switch circleProps={<i className="fas fa-heart" />} onChange={handelTheme} checked={theme === "dark" ? true : false} />;
};

export default ThemeSwitcher;
