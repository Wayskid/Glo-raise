import React from "react";
import SubscriberForm from "../../components/SubscriberForm";
import star from "../../assets/Icon/Star Six Points.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFundersAssessmentStarted } from "../../store/features/appSlice";
import { Helmet } from "react-helmet-async";

export default function For_Funders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="">
      <Helmet>
        <title>Glo Raise - For Funders</title>
        <meta
          name="description"
          content="Get connected with a Funder or Founder. Take the Readiness Assessment and get matched with a funder who best matches your needs and interests."
          data-rh="true"
        />
        <link rel="canonical" href="http://localhost:5173/for_funders" />
      </Helmet>
      <section className="bg-Nature">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] ">
          <div className="grid gap-8 md:gap-10 base:md:gap-[60px] w-[min(900px,100%)]">
            <p className="text-[32px] xs:text-[50px] sm:text-[92px] text-white font-semibold">
              The{" "}
              <span className="relative inline-block w-fit">
                opportunity
                <span className="absolute w-full h-1 md:h-2 bg-Lime bottom-0 left-0"></span>
              </span>
              discovery revolution is here
            </p>
            <p className="text-xl text-white leading-tight">
              With Glo-raise you are intelligently matched with founders who
              meet your funding interests and have achieved the desired score on
              the premier GROWTH assessment developed by leading funders and
              scholars
            </p>
            <button
              onClick={() => {
                navigate("/get_started/funders");
                dispatch(setFundersAssessmentStarted(true));
              }}
              className="bg-Dark px-[36px] py-5 text-white [font-family:'Roboto',sans-serif;] mr-auto"
            >
              Interests Radar
            </button>
          </div>
        </div>
      </section>
      <section className="bg-Light">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap gap-8 md:gap-10">
          <p className="text-Dark text-[38px] font-semibold text-center leading-tight mb-10">
            Here's How It Works
          </p>
          <div className="grid text-Emerald gap-y-14 base:grid-cols-2 base:gap-x-7 base:gap-y-8 lg:grid-cols-3">
            <div className="grid gap-10 px-3">
              <p className="[font-family:'Instrument_Serif',serif;] text-5xl text-center">
                1.
              </p>
              <div className="relative grid items-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="282"
                  height="283"
                  viewBox="0 0 282 283"
                  fill="none"
                >
                  <path
                    d="M278.948 141.499C278.948 217.87 217.037 279.781 140.667 279.781C64.2959 279.781 2.38525 217.87 2.38525 141.499C2.38525 65.1288 64.2959 3.2182 140.667 3.2182C217.037 3.2182 278.948 65.1288 278.948 141.499Z"
                    stroke="#02B68A"
                    strokeWidth="4.6875"
                  />
                  <path
                    d="M187.542 141.499C187.542 167.388 166.555 188.374 140.667 188.374C114.778 188.374 93.7915 167.388 93.7915 141.499C93.7915 115.611 114.778 94.6245 140.667 94.6245C166.555 94.6245 187.542 115.611 187.542 141.499Z"
                    stroke="#02B68A"
                    strokeWidth="4.6875"
                  />
                  <path
                    d="M234.417 141.499C234.417 193.276 192.443 235.249 140.667 235.249C88.8898 235.249 46.9165 193.276 46.9165 141.499C46.9165 89.7228 88.8898 47.7495 140.667 47.7495C192.443 47.7495 234.417 89.7228 234.417 141.499Z"
                    stroke="#02B68A"
                    strokeWidth="4.6875"
                  />
                </svg>
              </div>
              <p className="text-xl text-center">
                Complete the Funder Interests Radar.
              </p>
            </div>
            <div className="grid gap-10 px-3">
              <p className="[font-family:'Instrument_Serif',serif;] text-5xl text-center">
                2.
              </p>
              <div className="flex mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="272"
                  height="271"
                  viewBox="0 0 272 271"
                  fill="none"
                >
                  <path
                    d="M92.9107 92.4101C162.473 22.848 238.156 -14.2515 261.953 9.54604C285.751 33.3436 248.651 109.027 179.089 178.589C109.527 248.151 33.8442 285.25 10.0466 261.453C-13.751 237.655 23.3485 161.972 92.9107 92.4101Z"
                    stroke="#02B68A"
                    strokeWidth="4.6875"
                  />
                  <path
                    d="M179.089 92.4101C248.651 161.972 285.751 237.655 261.953 261.453C238.156 285.25 162.473 248.151 92.9107 178.589C23.3486 109.027 -13.7509 33.3436 10.0466 9.54604C33.8442 -14.2515 109.527 22.848 179.089 92.4101Z"
                    stroke="#02B68A"
                    strokeWidth="4.6875"
                  />
                </svg>
              </div>
              <p className="text-xl text-center">
                Receive a premium report to access steps to strengthen your
                positioning.
              </p>
            </div>
            <div className="grid gap-10 px-3 md:col-span-3 lg:col-span-1">
              <p className="[font-family:'Instrument_Serif',serif;] text-5xl text-center">
                3.
              </p>
              <div className="flex mx-auto">
                <img src={star} alt="star" className="w-full" />
              </div>
              <p className="text-xl text-center">
                Receive a warm connection by Glo-raise to virtually meet with
                the Founders who match your interests.
              </p>
            </div>
          </div>
          <p className="text-Dark text-xl md:text-2xl text-center leading-tight [font-family:'Instrument_Serif',serif;] w-[min(501px,100%)] mx-auto mt-10">
            Save time, leverage resources, and improve potential deal flow — no
            wonder Glo-raise is quickly becoming a leading Funder sourcing
            strategy globally
          </p>
          <button
            onClick={() => {
              navigate("/get_started/funders");
              dispatch(setFundersAssessmentStarted(true));
            }}
            className="bg-Dark px-[36px] py-5 text-white [font-family:'Roboto',sans-serif;] mx-auto"
          >
            Interests Radar
          </button>
        </div>
      </section>
      <SubscriberForm />
    </div>
  );
}
