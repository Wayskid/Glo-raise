import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import appContext from "../../context/AppContext";
import { setAssessmentEvaluation } from "../../store/features/appSlice";

export default function ChooseCountry({
  assessmentNumber,
  assessment,
  next,
  forFunders,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const { assessmentEvaluation, fundersAssessment, fundersAssessmentStarted } =
    useSelector((state) => state.app);
  const [choice, setChoice] = useState({
    country: "",
    state: "",
  });

  useEffect(() => {
    async function getCountries() {
      const { data } = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/states"
      );
      setCountries(data.data);
    }
    getCountries();
  }, []);

  //Country choice
  function handleChange(e) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: "02",
        qstn: assessment.qstn,
        answer: {
          country: e.target.value,
          state: "",
        },
        score: 0,
      })
    );
    setChoice({
      country: e.target.value,
      state: "",
    });
  }

  //STate choice
  function handleState(e) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: "02",
        qstn: assessment.qstn,
        answer: {
          country: choice.country,
          state: e.target.value,
        },
        score: 0,
      })
    );
    setChoice({
      country: choice.country,
      state: e.target.value,
    });
  }

  useEffect(() => {
    function getValue() {
      const value = (
        fundersAssessmentStarted === true
          ? fundersAssessment
          : assessmentEvaluation
      ).find((v) => v.qstnNumber === "02");
      setChoice({ country: value?.answer.country, state: value?.answer.state });
    }
    getValue();
  }, [assessment]);

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
        <p className="text-2xl md:text-[38px] font-semibold text-Dark text-center leading-snug">
          {assessment.qstn}
        </p>
        <div className="grid gap-4">
          <select
            name="Country"
            id="Country"
            onChange={handleChange}
            className="w-full"
            autoComplete="Country"
            value={choice.country ? choice.country : "Select Country"}
          >
            <option
              key="-1"
              value="Select Country"
              disabled
              className="text-gray-500"
            >
              Select Country
            </option>
            {countries.length &&
              countries.map((oneCountry, index) => (
                <option key={oneCountry.name + index} value={oneCountry.name}>
                  {oneCountry.name}
                </option>
              ))}
          </select>
          {choice.country === "United States" && (
            <select
              name="State"
              id="State"
              onChange={handleState}
              className="w-full"
              autoComplete="State"
              value={choice.state ? choice.state : "Select State"}
            >
              <option
                key="-1"
                value="Select State"
                disabled
                className="text-gray-500"
              >
                Select State
              </option>
              {countries.length &&
                countries[232].states.map((usState, index) => (
                  <option key={index} value={usState.name}>
                    {usState.name}
                  </option>
                ))}
            </select>
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
            disabled={!choice.country}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
