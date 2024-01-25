import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAssessmentEvaluation,
  setAssessmentProgress,
} from "../../../store/features/appSlice";

export default function FortyOne({}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    assessmentEvaluation,
    fundersAssessment,
    fundersAssessmentStarted,
    forFunders,
    assessmentFile,
  } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 42));
  }, []);

  function handleChange(e, firm_Name) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: "41",
        qstn: assessmentFile[40].qstn,
        answer: { choice: e, firm_Name },
        score: 0,
      })
    );
  }

  function getValue() {
    const value = (
      fundersAssessmentStarted === true
        ? fundersAssessment
        : assessmentEvaluation
    ).find((v) => v.qstnNumber === "41");
    return value;
  }

  return (
    <div className="w-[min(800px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
      <div className="border-2 border-Dark rounded-[20px] py-[56px] px-4 lg:px-[12px] relative grid gap-8 md:gap-12">
        <div className="absolute grid place-items-center -top-[32.3px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            41
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
            {assessmentFile[40].qstn}
          </p>
          <p className="text-Dark text-center mb">select one</p>
        </div>
        <div className="grid gap-4">
          {assessmentFile[40].options.map((option) => (
            <div
              key={option}
              className={`px-6 flex items-center gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden cursor-pointer ${
                option === "No" && "order-3"
              }`}
            >
              <input
                type="radio"
                className="peer/radio absolute w-full h-full opacity-0 z-30 cursor-pointer"
                id={option}
                name={assessmentFile[40].qstn}
                checked={getValue()?.answer.choice === option}
                value={option}
                onChange={(e) => handleChange(e.target.value, "")}
              />
              <div className="w-6 h-6 rounded-full border-4 bg-white peer-checked/radio:bg-Dark z-20"></div>
              <label
                htmlFor={option}
                className="py-4 text-Dark w-[calc(100%-2.5rem)] z-20 cursor-pointer"
              >
                {option}
              </label>
              <div className="absolute h-full w-full peer-checked/radio:bg-[#E5DFFA] z-10 top-0 left-0 cursor-pointer"></div>
            </div>
          ))}
          {getValue()?.answer.choice === "Yes" && (
            <div className="bg-[#F8F8F8] rounded-[20px] overflow-hidden focus-within:border-2 focus-within:border-gray-600 border-2 border-transparent">
              <input
                type="text"
                className="text-xl py-2 px-5 bg-transparent w-full outline-none"
                placeholder="Please specify the name of the firm or angle"
                value={getValue()?.answer.firm_Name}
                onChange={(e) =>
                  handleChange(getValue()?.answer.choice, e.target.value)
                }
                autoFocus
              />
            </div>
          )}
        </div>
        <div className="flex mx-auto gap-4">
          <button
            onClick={() => navigate(-1)}
            className="py-2 px-4 text-Dark rounded-[4px] border-2 border-Dark"
          >
            Previous
          </button>
          <button
            onClick={() => navigate(`../../get_started/42`)}
            className="py-2 px-4 bg-Dark text-white rounded-[4px] border-2 border-Dark disabled:opacity-40"
            disabled={!getValue()?.answer.choice}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
