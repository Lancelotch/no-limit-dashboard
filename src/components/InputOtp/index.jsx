import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {useStyles} from './style';

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;
export default function InputOtp({ OTPLength, onChange }) {
  const [activeInput, setActiveInput] = useState(0);
  const [values, setValues] = useState();
  const itemRef = useRef([]);
  const classes = useStyles();

  const focusInput = function(value) {
    const activeInput = Math.max(Math.min(OTPLength - 1, value), 0);
    itemRef.current[activeInput].focus();
    setActiveInput(activeInput);
  };

  const nextFocus = function() {
    focusInput(activeInput + 1);
  };

  const prevFocus = function() {
    focusInput(activeInput - 1);
  };

  const updateValue = function(value) {
    let tempValues = [...values];
    tempValues[activeInput] = value;
    setValues(tempValues);
  };

  const handleChange = function(value) {
    updateValue(value);
    nextFocus();
  };

  const handleOnPaste = function(e) {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, OTPLength)
      .split("");
    const tempValues = [...values];
    pastedData.forEach((data, idx) => {
      tempValues[idx] = data;
    });
    setValues(tempValues);
  };

  const removeValue = function(value) {
    updateValue(value);
  };

  const handleOnKeyDown = function(e) {
    if (e.keyCode === BACKSPACE || e.key === "Backspace") {
      e.preventDefault();
      prevFocus();
      removeValue("");
    } else if (e.keyCode === DELETE || e.key === "Delete") {
      e.preventDefault();
      removeValue("");
    } else if (e.keyCode === LEFT_ARROW || e.key === "ArrowLeft") {
      e.preventDefault();
      prevFocus();
    } else if (e.keyCode === RIGHT_ARROW || e.key === "ArrowRight") {
      e.preventDefault();
      nextFocus();
    } else if (
      e.keyCode === SPACEBAR ||
      e.key === " " ||
      e.key === "Spacebar"
    ) {
      e.preventDefault();
      removeValue("");
      nextFocus();
    }
  };

  useEffect(() => {
    setValues(Array(OTPLength).fill(""));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    itemRef.current = itemRef.current.slice(0, OTPLength);
  }, [OTPLength]);

  useEffect(() => {
    const finalValue = values ? values.join("") : null;
    onChange(finalValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return values
    ? Array(OTPLength)
        .fill(null)
        .map((el, i) => (
          <React.Fragment key={i}>
            <input
              className={classes.inputOtp}
              ref={ref => {
                return (itemRef.current[i] = ref);
              }}
              onFocus={e => {
                setActiveInput(i);
                e.target.select();
              }}
              onBlur={() => {
                setActiveInput(-1);
              }}
              onPaste={handleOnPaste}
              value={values[i]}
              onChange={e => handleChange(e.target.value)}
              onKeyDown={handleOnKeyDown}
              size={1}
              maxLength={1}
              name={`OTPInput${i}`}
            />
          </React.Fragment>
        ))
    : null;
}

InputOtp.propTypes = {
  OTPLength: PropTypes.number,
  onChange: PropTypes.func
};

InputOtp.defaultProps = {
  OTPLength: 3,
  onChange: () => {}
};
