import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput({ name, onChange, value, order, label }) {
  return (
    <div className={`grid gap-2 row-start-${order}`}>
      <label htmlFor={name} className="text-Dark text-xl font-semibold">
        {label}
      </label>
      <div className="py-4 px-4 md:px-8 rounded-[20px] border-[3px] border-[#EAE5FA] relative">
        <DatePicker selected={value} onChange={onChange} name={name} />
      </div>
    </div>
  );
}
