import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setAssessmentProgress,
  setFoundersAssessmentStarted,
} from "../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";

export default function Get_Started() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38));
  }, []);

  return (
    <div className="w-[min(82rem,100%)] mx-auto pt-[44px] pb-[72px] md:pt-[70px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-10 md:gap-[60px] relative">
      <p className="text-Dark text-[48px] md:text-[58px] base:text-[92px] font-semibold leading-tight">
        Glo-raise GROWTH assessment
      </p>
      <p className="text-xl text-Dark w-[min(640px,100%)]">
        Regardless of what stage your project is in, the{" "}
        <span className="font-semibold text-Hero-Purple">
          Glo-raise GROWTH assessment
        </span>{" "}
        will help you better understand the attractiveness of your business and
        guide you down the path to your next, best moves.
      </p>
      <p className="text-[#051C09CC] w-[min(640px,100%)]">
        The assessment contains questions to help you to better understand the
        attractiveness of your business.
      </p>
      <p className="text-[#051C09CC] w-[min(640px,100%)]">
        Answer honestly with what is most typical of your experience to receive
        the most helpful feedback and, potentially, the most reliable funder
        matches.
      </p>
      <p className="text-[#051C09CC] w-[min(640px,100%)]">
        At the end, you'll receive a score that reflects your readiness for
        next-level success and have the opportunity to learn how you compare to
        other entrepreneurs, gain insights about each question, and receive
        customized GROWTH actions to advance your business.
      </p>
      <p className="text-[#051C09CC] w-[min(640px,100%)]">
        There are 41 questions and the assessment should take about 10 minutes.
      </p>
      <button
        onClick={() => {
          navigate("01");
          dispatch(setFoundersAssessmentStarted(true));
        }}
        className="bg-Violet px-9 py-6 text-Iceberg rounded-[4px] md:mr-auto md:ml-0"
      >
        Get Started
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="502"
        height="502"
        viewBox="0 0 502 502"
        fill="none"
        className="absolute top-[300.53px] hidden lg:grid -right-3"
      >
        <path
          d="M103.07 482.063L398.4 20.1031M103.07 482.063L184.725 464.096M103.07 482.063L85.1028 400.408M398.4 20.1031L316.745 38.0701M398.4 20.1031L416.367 101.758M463.748 317.093L481.715 398.748M481.715 398.748L400.06 416.715M481.715 398.748L19.7549 103.418M19.7549 103.418L37.7218 185.073M19.7549 103.418L101.41 85.4511"
          stroke="#5A43F0"
          stroke-width="39.3715"
        />
      </svg>
    </div>
  );
}