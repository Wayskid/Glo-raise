import React from "react";
import InputField from "../../components/reuseable/InputField";
import { useNavigate } from "react-router-dom";

export default function Free_Checkout() {
  const navigate = useNavigate();
  const free_checkout_form = [
    { label: "Name", id: "name", type: "text", placeholder: "Your Name" },
    {
      label: "Company name",
      id: "company_name",
      type: "text",
      placeholder: "Your company name",
    },
    {
      label: "Company website",
      id: "company_website",
      type: "text",
      placeholder: "Your company website",
    },
    {
      label: "Birth year",
      id: "birth_year",
      type: "text",
      placeholder: "Your birth year",
    },
    {
      label: "Postal code",
      id: "postal_code",
      type: "text",
      placeholder: "Your postal code",
    },
    {
      label: "Phone number",
      id: "phone_number",
      type: "number",
      placeholder: "Your phone number",
    },
    { label: "Email", id: "email", type: "email", placeholder: "Your email" },
  ];

  return (
    <div className="grid gap-[50px] base:gap-[68px] base:grid-cols-[0.6fr_1fr] pb-[70px] md:pb-[90px] base:pb-[132px] py-[64px] w-[min(1176px,100%)] mx-auto px-4 md:px-[48px]">
      <div className="grid gap-12 order-2 base:order-[unset] self-start">
        <button
          onClick={() => navigate(`../../get_started/plan`)}
          className="flex gap-2 justify-self-center items-center -mb-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
          >
            <path
              d="M20.5 7.93359L0.499999 7.93359"
              stroke="#051C09"
              strokeWidth="1.73913"
            />
            <path
              d="M7.96875 15.4697C7.96875 11.201 4.76717 7.99937 0.498395 7.99937"
              stroke="#051C09"
              strokeWidth="1.73913"
            />
            <path
              d="M7.96875 0.530273C7.96875 4.79905 4.76717 8.00063 0.498394 8.00063"
              stroke="#051C09"
              strokeWidth="1.73913"
            />
          </svg>
          <p className="text-Dark">Back to option selection</p>
        </button>
        <p
          className="
          text-[24px]  md:text-[38px] text-center font-semibold"
        >
          Get your free raw score
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="293"
          height="238"
          viewBox="0 0 293 238"
          fill="none"
          className="m-auto"
        >
          <path
            d="M146.5 0.875C146.5 107.188 131.922 119 0.71875 119C131.922 119 146.5 130.812 146.5 237.125C146.5 130.812 161.078 119 292.281 119C161.078 119 146.5 107.188 146.5 0.875Z"
            stroke="#051C09"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="border-2 border-Dark rounded-[20px] py-[60px] px-4 md:px-[48px] relative grid gap-8 md:gap-12">
        <div className="absolute grid place-items-center -top-[37px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            Free
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="222"
            height="72"
            viewBox="0 0 222 72"
            fill="none"
          >
            <path
              d="M109.851 0.344816C110.6 0.11989 111.4 0.119891 112.149 0.344817L218.229 32.1687C222.03 33.3089 222.03 38.6911 218.229 39.8313L112.149 71.6552C111.4 71.8801 110.6 71.8801 109.851 71.6552L3.77102 39.8313C-0.0297918 38.6911 -0.0297947 33.3089 3.77102 32.1687L109.851 0.344816Z"
              fill="#051C09"
            />
          </svg>
        </div>
        <form className="grid gap-12">
          <p className="text-[24px] md:text-[38px] text-center font-semibold border2 border-Dark">
            Fill in your info to get your raw score
          </p>
          {free_checkout_form.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              onChange={() => {}}
              required="required"
            />
          ))}
        </form>
        <button
          onClick={() => navigate(`../../get_started/founders_success`)}
          className="p-4 bg-Dark text-white rounded-[4px] border-2 border-Dark md:mx-auto mx-[unset]"
        >
          Get it for free
        </button>
      </div>
    </div>
  );
}
