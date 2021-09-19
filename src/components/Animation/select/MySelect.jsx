import React from 'react';
import classes from './MySelcet.module.css';
const MySelect = function ({ options, startValue, value, onChange }) {
  return (
    <span className={classes.customdropdown}>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">
          {startValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </span>
  );
};
export default MySelect;
