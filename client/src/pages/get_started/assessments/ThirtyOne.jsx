import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAssessmentEvaluation,
  setAssessmentProgress,
} from "../../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";
import appContext from "../../../context/AppContext.jsx";

export default function ThirtyOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assessmentFile: assessment, assessmentEvaluation } = useSelector(
    (state) => state.app
  );
  const { scoring } = useContext(appContext);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 32));
  }, []);

  function handleChangeA(e) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: "31A",
        qstn: "This best describes how our stakeholders view us - Customer",
        answer: e.target.value,
        score: scoring(e.target.value),
      })
    );
  }

  function handleChangeB(e) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: "31B",
        qstn: "This best describes how our stakeholders view us - Employees",
        answer: e.target.value,
        score: scoring(e.target.value),
      })
    );
  }

  function handleChangeC(e) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: "31C",
        qstn: "This best describes how our stakeholders view us - Partners",
        answer: e.target.value,
        score: scoring(e.target.value),
      })
    );
  }

  function handleChangeD(e) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: "31D",
        qstn: "This best describes how our stakeholders view us - Community",
        answer: e.target.value,
        score: scoring(e.target.value),
      })
    );
  }

  function getValue(assessmentNumbers) {
    const value = assessmentEvaluation.find(
      (v) => v.qstnNumber === assessmentNumbers
    );
    return value;
  }

  return (
    <div className="w-[min(800px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
      <div className="border-2 border-Dark rounded-[20px] py-[56px] px-4 lg:px-[12px] relative grid gap-10 md:gap-12">
        <div className="absolute grid place-items-center -top-[32.3px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            {assessment[30].number}
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
        <p className="text-2xl md:text-[38px] font-semibold text-Dark text-center leading-snug">
          {assessment[30].qstn}
        </p>
        <ul className="grid gap-12">
          {assessment[30].qstns.map((item) => (
            <div key={item.qstn} className="grid gap-8 md:gap-12">
              <div className="grid gap-4">
                <p className="text-[22px] md:text-[32px] font-semibold text-Dark text-center leading-snug">
                  {item.qstn}
                </p>
                <p className="text-Dark text-center mb">Select One</p>
              </div>
              <ul className="grid gap-4">
                {item.options.map((option, index) => (
                  <li
                    key={index}
                    className="px-6 flex gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden cursor-pointer items-center"
                  >
                    <input
                      type="radio"
                      className="hidden peer/radio cursor-pointer"
                      id={item.qstn + option}
                      name={item.qstn}
                      checked={
                        getValue(
                          item.qstn === "Customer"
                            ? "31A"
                            : item.qstn === "Employees"
                            ? "31B"
                            : item.qstn === "Partners"
                            ? "31C"
                            : "31D"
                        )?.answer === option
                      }
                      value={option}
                      onChange={(e) =>
                        item.qstn === "Customer"
                          ? handleChangeA(e)
                          : item.qstn === "Employees"
                          ? handleChangeB(e)
                          : item.qstn === "Partners"
                          ? handleChangeC(e)
                          : handleChangeD(e)
                      }
                    />
                    <div className="w-6 h-6 bg-[#2222221A] peer-checked/radio:bg-Dark z-20  cursor-pointer rounded-full"></div>
                    <label
                      htmlFor={item.qstn + option}
                      className="text-Dark w-[calc(100%-5.5rem)] z-20 cursor-pointer py-4"
                    >
                      {option}
                    </label>
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
            className="py-2 px-4 bg-Dark text-white rounded-[4px] border-2 border-Dark disabled:opacity-30"
            disabled={
              !getValue("31A")?.answer ||
              !getValue("31B")?.answer ||
              !getValue("31C")?.answer ||
              !getValue("31D")?.answer
            }
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
