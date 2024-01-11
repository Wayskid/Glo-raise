import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/reuseable/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  setAssessmentEvaluation,
  setAssessmentProgress,
} from "../../../store/features/appSlice.js";

export default function FortyOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const assessment = useSelector((state) => state.app.assessmentFile[40]);
  const { assessmentFile: assessment, assessmentEvaluation } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 42));
  }, []);

  const [values, setValues] = useState(
    assessment[40]?.qstns.map((assessment) => ({
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
        qstnNumber: assessment[40].number,
        qstn: assessment[40].qstn,
        answer: values.map((val) => {
          if (val.qstn === option.qstn) {
            return { qstn: val.qstn, ans: e.target.value };
          }
          return val;
        }),
        score: 0,
      })
    );
  }

  useEffect(() => {
    function getValue() {
      const value = assessmentEvaluation.find(
        (v) => v.qstnNumber === assessment[40].number
      );
      if (value?.answer.length) {
        setValues(value.answer);
      }
    }
    getValue();
  }, [assessment]);

  return (
    <div className="w-[min(800px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
      <div className="border-2 border-Dark rounded-[20px] py-[60px] px-4 lg:px-[12px] relative grid gap-8 md:gap-12">
        <div className="absolute grid place-items-center -top-[32.3px] justify-self-center">
          <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-white absolute">
            {assessment[40].number}
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
        <div className="grid gap-10">
          {assessment[40].qstns.map((item) => (
            <div key={item.qstn} className="grid gap-2">
              <label
                htmlFor=""
                className="text-2xl md:text-[38px] font-semibold text-Dark text-center leading-snug"
              >
                {item.qstn}
              </label>
              <input
                type="text"
                name={item.qstn}
                id={item.qstn}
                className="py-5 px-4 md:px-8 rounded-[20px] border-[3px] border-[#EAE5FA]"
                placeholder={item.placeholder}
                value={values.find((val) => val.qstn === item.qstn).ans}
                onChange={(e) => handleChange(e, item)}
              />
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
            onClick={() => navigate(`../../get_started/plan`)}
            className="py-2 px-4 bg-Dark text-white rounded-[4px] border-2 border-Dark"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
