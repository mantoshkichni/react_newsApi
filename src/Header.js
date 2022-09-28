import { useState } from "react";
import ReactSwitch from "react-switch";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className="header">
      <h7>mks NewsApp</h7>
      <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
    </div>
  );
};
