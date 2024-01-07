import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setFundersAssessmentProgress,
  setFundersAssessmentStarted,
} from "../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";

export default function Interest_Radar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setFundersAssessmentStarted(true));
    dispatch(setFundersAssessmentProgress(5.88));
  }, []);

  return (
    <div className="w-[min(82rem,100%)] mx-auto pt-[44px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-10 md:gap-[60px] relative">
      <p className="text-Dark text-[48px] md:text-[58px] base:text-[92px] font-semibold leading-tight">
        Funder Interests Radar
      </p>
      <p className="text-xl text-Dark w-[min(640px,100%)]">
        The{" "}
        <span className="font-semibold text-Nature">
          Funder Interests Radar
        </span>{" "}
        asks questions to help you describe your preferred funding
        opportunities.
      </p>
      <p className="text-[#051C09CC] w-[min(640px,100%)]">
        Once completed, a member of the Glo-raise leadership team will set up a
        brief virtual overview with you.
      </p>
      <p className="text-[#051C09CC] w-[min(640px,100%)]">
        Then you'll be eligible to receive profiles and warm invitations to
        virtually connect with Founders whose businesses most closely match your
        interests and who have achieved the desired GROWTH assessment score.
      </p>
      <p className="text-[#051C09CC] w-[min(640px,100%)]">
        There are 15 questions that should take about 10 minutes to complete.
      </p>
      <button
        onClick={() => {
          navigate("01");
        }}
        className="bg-Nature px-9 py-6 text-white rounded-[4px] md:mr-auto md:ml-0"
      >
        Get Started
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="441"
        height="441"
        viewBox="0 0 441 441"
        fill="none"
        className="absolute top-[300.53px] hidden lg:grid -right-3"
      >
        <path
          d="M220.5 0.65625V147.219M377.139 63.8613L273.503 167.497M293.781 220.5H440.344M377.139 377.139L273.503 273.503M220.5 293.781V440.344M63.8613 377.139L167.497 273.503M0.65625 220.5H147.219M63.8613 63.8613L167.497 167.497"
          stroke="#02B68A"
          strokeWidth="44"
        />
      </svg>
    </div>
  );
}
