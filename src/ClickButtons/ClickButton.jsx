import React, { useState } from "react";
import "../Nominis/Nominis.css";

const ClickButton = (props) => {
  const [value, setValue] = useState(false);
  const { textContent, setContent, content, reset, setReset } = props;

  const handleClick = () => {
    setContent(content + " " + textContent);
    setValue(!value);
    console.log("test 1");
  };

  const handleReset = () => {
    if (!reset) {
      console.log("test 3");
      return value ? " " : handleClick();
    }
  };

  const handleClassName = () => {
    if (reset && !value) {
      return "abled";
    } else if (!reset && value) {
      return "disabled";
    }
  };

  return (
    <React.Fragment>
      {reset ? (
        <div className={handleClassName()} onClick={handleReset}>
          {textContent}
        </div>
      ) : (
        <div className={handleClassName()} onClick={handleReset}>
          {textContent}
        </div>
      )}
    </React.Fragment>
  );
};

export default ClickButton;
