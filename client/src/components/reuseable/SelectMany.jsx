import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { setAssessmentEvaluation } from "../../store/features/appSlice";

export default function SelectMany({
  assessmentNumber,
  assessment,
  next,
  forFunders,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assessmentEvaluation, fundersAssessment, fundersAssessmentStarted } =
    useSelector((state) => state.app);

  function getValue() {
    const value = (
      fundersAssessmentStarted === true
        ? fundersAssessment
        : assessmentEvaluation
    ).find((v) => v.qstnNumber === assessmentNumber);
    return value;
  }

  function handleSelectMany(e, others, assessment) {
    const answers = getValue()?.answer?.choices?.length
      ? !getValue()?.answer?.choices?.includes(e.target.value)
        ? { choices: [...getValue().answer.choices, e.target.value], others }
        : {
            choices: getValue().answer?.choices?.filter(
              (val) => val !== e.target.value
            ),
            others,
          }
      : { choices: [e.target.value], others };

    dispatch(
      setAssessmentEvaluation({
        qstnNumber: assessment.number,
        qstn: assessment.qstn,
        answer: answers,
        score:
          (assessment.number === "13") | (assessment.number === "33")
            ? answers.choices?.length > 3
              ? 4
              : answers.choices?.length === 3
              ? 3
              : answers.choices?.length === 2
              ? 2
              : answers.choices?.length === 1
              ? 1
              : 0
            : assessment.number === "29"
            ? answers.choices?.includes(
                "This is the first venture for all of us"
              )
              ? 0
              : answers.choices?.length === 3
              ? 4
              : answers.choices?.length === 2
              ? 3
              : answers.choices?.length === 1
              ? 2
              : 1
            : assessment.number === "38"
            ? answers.choices?.length === 0
              ? 4
              : answers.choices?.length === 1
              ? 4
              : answers.choices?.length === 2
              ? 3
              : answers.choices?.length === 3
              ? 2
              : 1
            : 0,
      })
    );
  }

  //Handle select others
  const [isOthers, setIsOthers] = useState(false);
  function handleSelectOthers(others, assessment) {
    let answers;
    if (isOthers) {
      answers = getValue()?.answer?.choices?.length
        ? { choices: [...getValue().answer.choices], others }
        : { choices: [], others };
    } else {
      answers = getValue()?.answer?.choices?.length
        ? { choices: [...getValue().answer.choices], others: "" }
        : { choices: [], others: "" };
    }

    dispatch(
      setAssessmentEvaluation({
        qstnNumber: assessment.number,
        qstn: assessment.qstn,
        answer: answers,
        score:
          (assessment.number === "13") | (assessment.number === "33")
            ? answers.choices?.length > 3
              ? 4
              : answers.choices?.length === 3
              ? 3
              : answers.choices?.length === 2
              ? 2
              : answers.choices?.length === 1
              ? 1
              : 0
            : assessment.number === "29"
            ? answers.choices?.includes(
                "This is the first venture for all of us"
              )
              ? 0
              : answers.choices?.length === 3
              ? 4
              : answers.choices?.length === 2
              ? 3
              : answers.choices?.length === 1
              ? 2
              : 1
            : assessment.number === "38"
            ? answers.choices?.length === 0
              ? 4
              : answers.choices?.length === 1
              ? 4
              : answers.choices?.length === 2
              ? 3
              : answers.choices?.length === 3
              ? 2
              : 1
            : 0,
      })
    );
  }

  //Focus others
  const inputRef = useRef(null);
  useEffect(() => {
    if (isOthers) {
      inputRef.current.focus();
    }
  }, [isOthers]);

  return (
    <div className="w-[min(800px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
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
          <p className="text-Dark text-center mb">select all that apply</p>
        </div>
        <div className="grid gap-4">
          {assessment.options.map((option) => (
            <div
              key={option}
              className="px-6 flex items-center gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden"
            >
              <input
                type="checkbox"
                className="peer/radio absolute w-full h-full opacity-0 z-30 cursor-pointer"
                id={option}
                name={assessment.qstn}
                checked={
                  getValue()?.answer?.choices?.includes(option) ? true : false
                }
                value={option}
                onChange={(e) => handleSelectMany(e, "", assessment)}
              />
              <div className="w-6 h-6 bg-[#2222221A] peer-checked/radio:bg-Dark z-20 cursor-pointer text-white grid place-items-center [&>*]:peer-checked/radio:opacity-100 [&>*]:opacity-0 border-4 peer-checked/radio:border-none bg-white rounded-[4px] text-sm">
                <FaCheck />
              </div>
              <label
                htmlFor={option}
                className="py-4 text-Dark w-[calc(100%-2.5rem)] z-20 cursor-pointer"
              >
                {option}
              </label>
              <div
                className={`absolute h-full w-full ${
                  fundersAssessmentStarted
                    ? "peer-checked/radio:bg-[#D7F5EE]"
                    : "peer-checked/radio:bg-[#E5DFFA]"
                } z-10 top-0 left-0 cursor-pointer`}
              ></div>
            </div>
          ))}
          {assessment.add_more === true && (
            <div className="px-6 py-2 flex items-center gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden">
              <input
                type="checkbox"
                className="hidden peer/radio "
                id="others"
                name="others"
                onChange={() => setIsOthers(!isOthers)}
                checked={
                  isOthers || getValue()?.answer?.others?.length ? true : false
                }
              />
              <div
                onClick={() => setIsOthers(!isOthers)}
                className="w-6 h-6 bg-[#2222221A] peer-checked/radio:bg-Dark z-20 cursor-pointer text-white grid place-items-center [&>*]:peer-checked/radio:opacity-100 [&>*]:opacity-0 border-4 peer-checked/radio:border-none bg-white rounded-[4px] text-sm shrink-0"
              >
                <FaCheck />
              </div>
              <input
                className="py-2 px-4 rounded-[8px] bg-white text-gray-500 w-full z-20 focus:placeholder-transparent"
                placeholder="Other (please specify)"
                ref={inputRef}
                onChange={(e) => handleSelectOthers(e.target.value, assessment)}
                value={getValue()?.answer?.others}
              />
              <div
                className={`absolute h-full w-full ${
                  fundersAssessmentStarted
                    ? "peer-checked/radio:bg-[#D7F5EE]"
                    : "peer-checked/radio:bg-[#E5DFFA]"
                } z-10 top-0 left-0 cursor-pointer`}
              ></div>
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
            onClick={() =>
              forFunders
                ? navigate(`../../../get_started/funders/${next}`)
                : navigate(`../../get_started/${next}`)
            }
            className="py-2 px-4 bg-Dark text-white rounded-[4px] border-2 border-Dark disabled:opacity-30"
            disabled={
              getValue()?.answer?.choices?.length ||
              getValue()?.answer?.others?.length
                ? false
                : true
            }
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
