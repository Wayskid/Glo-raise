import React from "react";
import { useNavigate } from "react-router-dom";

export default function RankOrder({
  assessmentNumber,
  assessment,
  choice,
  answer,
  next,
  forFunders,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-[min(740px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
      <div className="border-2 border-Dark rounded-[20px] py-[56px] px-2 md:px-[6px] lg:px-[12px] relative grid gap-8 md:gap-12">
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
          <p className="text-Dark text-center mb">rank in order</p>
        </div>
        <ul className="grid gap-4">
          {assessment.options.map((option) => (
            <li
              key={option}
              className="py-4 px-6 flex gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden cursor-pointer items-center"
              draggable
            >
              <input
                type="checkbox"
                className="hidden peer/radio cursor-pointer"
                id={option}
                name={assessment.qstn}
              />
              <div className="w-6 h-6 bg-[#2222221A] peer-checked/radio:bg-Dark z-20  cursor-pointer shrink-0"></div>
              <label
                htmlFor={option}
                className="text-Dark w-[calc(100%-2.5rem)] z-20 cursor-pointer"
              >
                {option}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g opacity="0.5" clip-path="url(#clip0_877_257)">
                  <path
                    d="M14.6673 23.9997C14.6673 25.4663 13.4673 26.6663 12.0007 26.6663C10.534 26.6663 9.33398 25.4663 9.33398 23.9997C9.33398 22.533 10.534 21.333 12.0007 21.333C13.4673 21.333 14.6673 22.533 14.6673 23.9997ZM12.0007 13.333C10.534 13.333 9.33398 14.533 9.33398 15.9997C9.33398 17.4663 10.534 18.6663 12.0007 18.6663C13.4673 18.6663 14.6673 17.4663 14.6673 15.9997C14.6673 14.533 13.4673 13.333 12.0007 13.333ZM12.0007 5.33301C10.534 5.33301 9.33398 6.53301 9.33398 7.99967C9.33398 9.46634 10.534 10.6663 12.0007 10.6663C13.4673 10.6663 14.6673 9.46634 14.6673 7.99967C14.6673 6.53301 13.4673 5.33301 12.0007 5.33301ZM20.0007 10.6663C21.4673 10.6663 22.6673 9.46634 22.6673 7.99967C22.6673 6.53301 21.4673 5.33301 20.0007 5.33301C18.534 5.33301 17.334 6.53301 17.334 7.99967C17.334 9.46634 18.534 10.6663 20.0007 10.6663ZM20.0007 13.333C18.534 13.333 17.334 14.533 17.334 15.9997C17.334 17.4663 18.534 18.6663 20.0007 18.6663C21.4673 18.6663 22.6673 17.4663 22.6673 15.9997C22.6673 14.533 21.4673 13.333 20.0007 13.333ZM20.0007 21.333C18.534 21.333 17.334 22.533 17.334 23.9997C17.334 25.4663 18.534 26.6663 20.0007 26.6663C21.4673 26.6663 22.6673 25.4663 22.6673 23.9997C22.6673 22.533 21.4673 21.333 20.0007 21.333Z"
                    fill="#051C09"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_877_257">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute h-full w-full peer-checked/radio:bg-[#E5DFFA] z-10 top-0 left-0"></div>
            </li>
          ))}
        </ul>
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
