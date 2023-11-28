import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import PropTypes from "prop-types";
const Icon = ({ size, color, children }) => {
    const iconColor = color === "dark" ? "white" : "#171717";
  
    return (
      <span
        className={`flex h-9 w-9 items-center justify-center rounded`}
        style={{ backgroundColor: color === "dark" ? "#171717" : "white", color: iconColor }}
      >
        {React.cloneElement(children, { size, color: iconColor })}
      </span>
    );
  };
  
  
const ModeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsChecked(savedTheme === "dark");
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(savedTheme);
  }, []);

  const handleCheckboxChange = () => {
    const newTheme = isChecked ? "light" : "dark";
    setIsChecked(!isChecked);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <label className="theme-switcher relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only"
      />

      <div className="shadow-card flex h-[46px] w-[82px] gap-4 items-center justify-center rounded-md">
        <Icon size={28} color={isChecked ? "light" : "light"}>
          <CiLight />
        </Icon>
        <Icon size={28} color={isChecked ? "dark" : "dark"}>
          <CiDark />
        </Icon>
      </div>
    </label>
  );
};
Icon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.oneOf(["dark", "light"]).isRequired,
    children: PropTypes.element.isRequired,
  };
export default ModeToggle;
