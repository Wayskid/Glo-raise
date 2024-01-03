import React from "react";
import { useNavigate } from "react-router-dom";

export default function SelectOneRadio({
  assessmentNumber,
  assessment,
  choice,
  answer,
  next,
  forFunders,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-[min(740px,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
      <div className="border-2 border-Dark rounded-[20px] py-[56px] px-4 lg:px-[12px] relative grid gap-8 md:gap-12">
        <div className="absolute grid place-items-center -top-[32.3px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            {assessmentNumber}
          </p>
          {forFunders ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="46"
              viewBox="0 0 62 46"
              fill="none"
            >
              <ellipse
                cx="31"
                cy="23.0009"
                rx="32"
                ry="20"
                transform="rotate(-24.5455 31 23.0009)"
                fill="#051C09"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M28.1716 1.82842C29.7337 0.266327 32.2663 0.26633 33.8284 1.82843L60.1716 28.1716C61.7337 29.7337 61.7337 32.2663 60.1716 33.8284L33.8284 60.1716C32.2663 61.7337 29.7337 61.7337 28.1716 60.1716L1.82842 33.8284C0.266327 32.2663 0.26633 29.7337 1.82843 28.1716L28.1716 1.82842Z"
                fill="#051C09"
              />
            </svg>
          )}
        </div>
        <div className="grid gap-4">
          <p className="text-2xl md:text-[38px] font-semibold text-Dark text-center leading-snug">
            {assessment.qstn}
          </p>
          <p className="text-Dark text-center mb">select one</p>
        </div>
        <div className="grid gap-4">
          {assessment.options.map((option) => (
            <div
              key={option}
              className="px-6 flex items-center gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden"
            >
              <input
                type="radio"
                className="hidden peer/radio "
                id={option}
                name={assessment.qstn}
              />
              <div className="w-6 h-6 rounded-full bg-[#2222221A] peer-checked/radio:bg-Dark z-20"></div>
              <label
                htmlFor={option}
                className="py-4 text-Dark w-[calc(100%-2.5rem)] z-20"
              >
                {option}
              </label>
              <div className="absolute h-full w-full peer-checked/radio:bg-[#E5DFFA] z-10 top-0 left-0"></div>
            </div>
          ))}
        </div>
        <div className="flex mx-auto gap-4">
          <button
            onClick={() => navigate(-1)}
            className="py-2 px-4 text-Dark rounded-[4px] border-2 border-Dark"
          >
            Previous
          </button>
          <button
            onClick={() =>
              forFunders
                ? navigate(`../../../get_started/funders/${next}`)
                : navigate(`../../get_started/${next}`)
            }
            className="py-2 px-4 bg-Dark text-white rounded-[4px] border-2 border-Dark"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
