import React, { useContext, useState } from "react";
import InputField from "../../components/reuseable/InputField";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCheckoutMutation,
  useCreateFounderMutation,
} from "../../services/appApi";
import appContext from "../../context/AppContext";

export default function Prem_Checkout() {
  const navigate = useNavigate();
  const { assessmentEvaluation: assessmentInfo } = useSelector(
    (state) => state.app
  );
  const { finalScore: score, level } = useContext(appContext);

  const prem_checkout_form = [
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

  const [premiumFormVal, setPremiumFormVal] = useState({});
  function handleChange(e) {
    setPremiumFormVal({
      ...premiumFormVal,
      [e.target.name]: e.target.value,
    });
  }

  const [checkoutApi] = useCheckoutMutation();
  const [createFounderApi] = useCreateFounderMutation();
  function onSubmitForm(e) {
    e.preventDefault();
    createFounderApi({
      body: {
        name: premiumFormVal.name,
        email: premiumFormVal.email,
        founderInfo: premiumFormVal,
        assessmentInfo,
        score,
        level,
      },
    });
    checkoutApi({
      body: {
        name: premiumFormVal.name,
        email: premiumFormVal.email,
        founderInfo: premiumFormVal,
        score,
        level,
      },
    })
      .unwrap()
      .then((result) => (window.location.href = result.url))
      .catch((err) => console.log(err));
  }

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
        <p className="text-[24px] md:text-[38px] text-center font-semibold border2 border-Dark">
          Get your complete report
        </p>
        <div className="grid md:flex gap-4 md:gap-6 justify-items-center base:justify-items-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M39.9995 75.4834C59.5967 75.4834 75.4834 59.5967 75.4834 39.9995C75.4834 20.4023 59.5967 4.51562 39.9995 4.51562M39.9995 75.4834C20.4023 75.4834 4.51562 59.5967 4.51562 39.9995M39.9995 75.4834C49.9642 75.4834 58.0421 59.5967 58.0421 39.9995C58.0421 20.4023 49.9642 4.51562 39.9995 4.51562M39.9995 75.4834C30.0348 75.4834 21.9569 59.5967 21.9569 39.9995C21.9569 20.4023 30.0348 4.51562 39.9995 4.51562M4.51562 39.9995C4.51562 20.4023 20.4023 4.51562 39.9995 4.51562M4.51562 39.9995H76.0848M17.7469 12.0334C17.7469 12.0334 41.3024 22.859 62.2521 12.0334M62.2521 67.9656C62.2521 67.9656 38.6966 57.14 17.7469 67.9656"
              stroke="#051C09"
              strokeWidth="2"
            />
          </svg>
          <p className="text-center md:text-left">
            visualization breakdown of the % of founders per region
          </p>
        </div>
        <div className="grid md:flex gap-4 md:gap-6 justify-items-center base:justify-items-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            className="w-[unset] base:w-[114.8px]"
          >
            <path
              d="M40 40L3.125 40C3.12501 19.6345 19.6345 3.12499 40 3.125L40 40ZM40 40L76.875 40C76.875 60.3655 60.3655 76.875 40 76.875L40 40Z"
              stroke="#051C09"
              strokeWidth="2"
            />
          </svg>
          <p className="text-center md:text-left">
            overall level for all founders globally and the % of founders
            scoring in each level
          </p>
        </div>
        <div className="grid md:flex gap-4 md:gap-6 justify-items-center base:justify-items-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M40 4.0625L46.0459 17.4366L57.9688 8.87721L56.5176 23.4824L71.1228 22.0312L62.5634 33.9541L75.9375 40L62.5634 46.0459L71.1228 57.9688L56.5176 56.5176L57.9688 71.1228L46.0459 62.5634L40 75.9375L33.9541 62.5634L22.0312 71.1228L23.4824 56.5176L8.87721 57.9688L17.4366 46.0459L4.0625 40L17.4366 33.9541L8.87721 22.0312L23.4824 23.4824L22.0312 8.87721L33.9541 17.4366L40 4.0625Z"
              stroke="#051C09"
              strokeWidth="2"
            />
          </svg>
          <p className="text-center md:text-left">
            examples of eventual unicorns from each level
          </p>
        </div>
        <div className="grid md:flex gap-4 md:gap-6 justify-items-center base:justify-items-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            className="w-[unset] base:w-[136px]"
          >
            <path
              d="M40 3.125L71.875 21.5625V58.4375L40 76.875M40 3.125L8.125 21.5625V58.4375L40 76.875M40 3.125V40M40 76.875V40M8.18457 21.5625L40 40M40 40L71.8154 58.4375M40 40L8.18457 58.4375M40 40L71.8154 21.5625"
              stroke="#051C09"
              strokeWidth="2"
            />
          </svg>
          <p className="text-center md:text-left">
            personalized action report based on your responses to help you drive
            next-level GROWTH
          </p>
        </div>
      </div>
      <form
        onSubmit={onSubmitForm}
        className="border-2 border-Dark rounded-[20px] py-[60px] px-4 md:px-[48px] relative grid gap-8 md:gap-12"
      >
        <div className="absolute grid place-items-center -top-[37px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            Premium
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
        <div className="grid gap-12">
          <p className="text-[24px] md:text-[38px] text-center font-semibold border2 border-Dark">
            Fill in your info to get your complete report
          </p>
          {prem_checkout_form.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              onChange={handleChange}
              required={true}
            />
          ))}
        </div>
        <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-center">
          limited time just $29 ($300 value)
        </p>
        <button className="p-4 bg-Dark text-white rounded-[4px] border-2 border-Dark md:mx-auto mx-[unset]">
          Proceed to checkout
        </button>
      </form>
    </div>
  );
}
