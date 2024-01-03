import React from "react";

export default function InputField({
  type,
  label,
  name,
  id,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor="" className="text-Dark text-xl font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        className="py-4 px-4 md:px-8 rounded-[20px] border-[3px] border-[#EAE5FA]"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
