import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  resetEvaluation,
  setFoundersAssessmentStarted,
} from "../../store/features/appSlice";
import appContext from "../../context/AppContext";
import { Helmet } from "react-helmet-async";

export default function Founders_Success() {
  const dispatch = useDispatch();
  const { setFinalScore, setLevel } = useContext(appContext);
  useEffect(() => {
    dispatch(setFoundersAssessmentStarted(false));
    dispatch(resetEvaluation());
    setFinalScore(0);
    setLevel(1);
  }, []);
  return (
    <div className="grid gap-12 pb-[70px] md:pb-[90px] base:pb-[132px] py-[64px] w-[min(800px,100%)] mx-auto px-4 md:px-[48px] text-Dark relative">
      <Helmet>
        <title>Glo Raise - Success!</title>
        <meta
          name="description"
          content="Get connected with a Funder or Founder. Take the Readiness Assessment and get matched with a funder who best matches your needs and interests."
          data-rh="true"
        />
        <link
          rel="canonical"
          href="http://localhost:5173/get_started/founders_success"
        />
      </Helmet>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="341"
        height="354"
        viewBox="0 0 341 354"
        fill="none"
        className="hidden lg:grid absolute -right-36 top-48"
      >
        <path
          d="M15 339.225L170.772 183.452L326.545 339.225M15 184.772L170.772 29L326.545 184.772"
          stroke="#5A43F0"
          strokeWidth="40"
        />
      </svg>
      <p className="text-[38px] md:text-[58px] font-semibold">
        Please check your mailbox to see the results
      </p>
      <div className="grid gap-6">
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path d="M19.9961 0V40" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 5.88965L5.8251 34.1739"
              stroke="#5A43F0"
              strokeWidth="4"
            />
            <path d="M40 20L-1.10641e-06 20" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 34.1104L5.8251 5.82608"
              stroke="#5A43F0"
              strokeWidth="4"
            />
          </svg>
          <p className="text-xl">
            visualization breakdown
            <br /> of the % of founders per region
          </p>
        </div>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path d="M19.9961 0V40" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 5.88965L5.8251 34.1739"
              stroke="#5A43F0"
              strokeWidth="4"
            />
            <path d="M40 20L-1.10641e-06 20" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 34.1104L5.8251 5.82608"
              stroke="#5A43F0"
              strokeWidth="4"
            />
          </svg>
          <p className="text-xl">
            overall level for all founders globally
            <br /> and the % of founders scoring in each level
          </p>
        </div>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path d="M19.9961 0V40" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 5.88965L5.8251 34.1739"
              stroke="#5A43F0"
              strokeWidth="4"
            />
            <path d="M40 20L-1.10641e-06 20" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 34.1104L5.8251 5.82608"
              stroke="#5A43F0"
              strokeWidth="4"
            />
          </svg>
          <p className="text-xl">
            examples of eventual unicorns
            <br /> from each level
          </p>
        </div>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path d="M19.9961 0V40" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 5.88965L5.8251 34.1739"
              stroke="#5A43F0"
              strokeWidth="4"
            />
            <path d="M40 20L-1.10641e-06 20" stroke="#5A43F0" strokeWidth="4" />
            <path
              d="M34.1094 34.1104L5.8251 5.82608"
              stroke="#5A43F0"
              strokeWidth="4"
            />
          </svg>
          <p className="text-xl">
            personalized action report based on your responses
            <br /> to help you drive next-level GROWTH
          </p>
        </div>
      </div>
    </div>
  );
}
