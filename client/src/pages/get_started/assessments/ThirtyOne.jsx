import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";

export default function ThirtyOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assessment = useSelector((state) => state.app.assessmentFile[30]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 32));
  }, []);

  return (
    <div className="w-[min(740px,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
      <div className="border-2 border-Dark rounded-[20px] py-[56px] px-2 md:px-[6px] lg:px-[12px] relative grid gap-10 md:gap-12">
        <div className="absolute grid place-items-center -top-[32.3px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            {assessment.number}
          </p>
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
        </div>
        <div className="grid gap-4">
          <p className="text-2xl md:text-[38px] font-semibold text-Dark text-center leading-snug">
            {assessment.qstn}
          </p>
          <p className="text-Dark text-center mb">Rank by each stakeholder</p>
        </div>
        <ul className="grid gap-12">
          {assessment.qstns.map((item) => (
            <div key={item.qstn} className="grid gap-8 md:gap-12">
              <div className="grid gap-4">
                <p className="text-[22px] md:text-[32px] font-semibold text-Dark text-center leading-snug">
                  {item.qstn}
                </p>
                <p className="text-Dark text-center mb">rank in order</p>
              </div>
              <ul className="grid gap-4">
                {item.options.map((option, index) => (
                  <li
                    key={index}
                    className="px-6 flex gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden cursor-pointer items-center"
                    draggable
                  >
                    <input
                      type="checkbox"
                      className="hidden peer/radio cursor-pointer"
                      id={item.qstn + option}
                      name={item.qstn + option}
                    />
                    <div className="w-6 h-6 bg-[#2222221A] peer-checked/radio:bg-Dark z-20  cursor-pointer"></div>
                    <label
                      htmlFor={item.qstn + option}
                      className="text-Dark w-[calc(100%-5.5rem)] z-20 cursor-pointer py-4"
                    >
                      {option}
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="z-20"
                    >
                      <g opacity="0.5" clip-path="url(#clip0_757_1022)">
                        <path
                          d="M14.6654 24.0007C14.6654 25.4673 13.4654 26.6673 11.9987 26.6673C10.532 26.6673 9.33203 25.4673 9.33203 24.0007C9.33203 22.534 10.532 21.334 11.9987 21.334C13.4654 21.334 14.6654 22.534 14.6654 24.0007ZM11.9987 13.334C10.532 13.334 9.33203 14.534 9.33203 16.0007C9.33203 17.4673 10.532 18.6673 11.9987 18.6673C13.4654 18.6673 14.6654 17.4673 14.6654 16.0007C14.6654 14.534 13.4654 13.334 11.9987 13.334ZM11.9987 5.33398C10.532 5.33398 9.33203 6.53398 9.33203 8.00065C9.33203 9.46732 10.532 10.6673 11.9987 10.6673C13.4654 10.6673 14.6654 9.46732 14.6654 8.00065C14.6654 6.53398 13.4654 5.33398 11.9987 5.33398ZM19.9987 10.6673C21.4654 10.6673 22.6654 9.46732 22.6654 8.00065C22.6654 6.53398 21.4654 5.33398 19.9987 5.33398C18.532 5.33398 17.332 6.53398 17.332 8.00065C17.332 9.46732 18.532 10.6673 19.9987 10.6673ZM19.9987 13.334C18.532 13.334 17.332 14.534 17.332 16.0007C17.332 17.4673 18.532 18.6673 19.9987 18.6673C21.4654 18.6673 22.6654 17.4673 22.6654 16.0007C22.6654 14.534 21.4654 13.334 19.9987 13.334ZM19.9987 21.334C18.532 21.334 17.332 22.534 17.332 24.0007C17.332 25.4673 18.532 26.6673 19.9987 26.6673C21.4654 26.6673 22.6654 25.4673 22.6654 24.0007C22.6654 22.534 21.4654 21.334 19.9987 21.334Z"
                          fill="#051C09"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_757_1022">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="absolute h-full w-full peer-checked/radio:bg-[#E5DFFA] z-10 top-0 left-0"></div>
                  </li>
                ))}
              </ul>
            </div>
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
            onClick={() => navigate(`../../get_started/32`)}
            className="py-2 px-4 bg-Dark text-white rounded-[4px] border-2 border-Dark"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
