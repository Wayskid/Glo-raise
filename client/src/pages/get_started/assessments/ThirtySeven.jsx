import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAssessmentEvaluation,
  setAssessmentProgress,
} from "../../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/reuseable/InputField.jsx";

export default function ThirtySeven() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assessmentFile, assessmentEvaluation } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 38));
  }, []);

  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime(61);
    }, 61000);
  }, []);

  const [values, setValues] = useState(
    assessmentFile[36]?.qstns.map((assessment) => ({
      qstn: assessment.qstn,
      ans: "",
    }))
  );

  function handleChange(e, option) {
    setValues(
      values.map((val) => {
        if (val.qstn === option.qstn) {
          return { qstn: val.qstn, ans: e.target.value };
        }
        return val;
      })
    );

    dispatch(
      setAssessmentEvaluation({
        qstnNumber: assessmentFile[36].number,
        qstn: assessmentFile[36].qstn,
        answer: values.map((val) => {
          if (val.qstn === option.qstn) {
            return { qstn: val.qstn, ans: e.target.value };
          }
          return val;
        }),
        score:
          values.length - values.filter((val) => val.ans.length > 0).length ===
            0 && time < 61
            ? 4
            : values.length -
                values.filter((val) => val.ans.length > 0).length ===
              0
            ? 3
            : values.length -
                values.filter((val) => val.ans.length > 0).length ===
              1
            ? 2
            : values.length -
                values.filter((val) => val.ans.length > 0).length >
              1
            ? 1
            : 0,
      })
    );
  }

  useEffect(() => {
    function getValue() {
      const value = assessmentEvaluation.find(
        (v) => v.qstnNumber === assessmentFile[36].number
      );
      if (value?.answer.length) {
        setValues(value.answer);
      }
    }
    getValue();
  }, [assessmentFile]);
  return (
    <div className="w-[min(800px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
      <div className="border-2 border-Dark rounded-[20px] py-[56px] px-4 lg:px-[12px] relative grid gap-10 md:gap-12">
        <div className="absolute grid place-items-center -top-[32.3px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            {assessmentFile[36].number}
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
            {assessmentFile[36].qstn}
          </p>
          <p className="text-Dark text-center mb">
            Using this format, describe the primary challenge you solve and who
            is your target audience.
          </p>
        </div>
        <ul className="grid gap-8 ">
          {assessmentFile[36].qstns.map((option) => (
            <InputField
              key={option.qstn}
              id={option.qstn}
              name={option.qstn}
              type="text"
              placeholder={option.placeholder}
              label={option.qstn}
              value={values.find((val) => val.qstn === option.qstn).ans}
              onChange={(e) => handleChange(e, option)}
            />
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
            onClick={() => navigate(`../../get_started/38`)}
            className="py-2 px-4 bg-Dark text-white rounded-[4px] border-2 border-Dark"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
