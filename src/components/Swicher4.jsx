import { useState } from "react";
import PropTypes from "prop-types";

const Switcher4 = ({checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
console.log(checked);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block md:h-8 md:w-14 h-5 w-8 rounded-full ${
              isChecked ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex md:h-6 md:w-6 h-3 w-3  items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};
Switcher4.propTypes = {
    checked: PropTypes.bool.isRequired,
  };
  
  Switcher4.defaultProps = {
    checked: true,
  };
export default Switcher4;
