import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <section className="bg-Light">
        <div className="w-[min(80rem,100%)] mx-auto">
          <div className="grid gap-8 md:gap-12 w-[min(1200px,100%)] h-fit pt-[56px] pb-[72px] md:py-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
            <h1 className="text-[32px] xs:text-[50px] sm:text-[92px] font-medium leading-snug">
              The simplest
              <br />
              <div className="hidden sm:inline-flex md:hidden items-center -translate-y-3 -ml-16">
                <span className="-mr-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="369"
                    height="15"
                    viewBox="0 0 369 15"
                    fill="none"
                  >
                    <path
                      d="M368.943 7.98918L-7.99951 7.98918"
                      stroke="#5A43F0"
                      strokeWidth="14"
                    />
                  </svg>
                </span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="110"
                    viewBox="0 0 63 110"
                    fill="none"
                  >
                    <path
                      d="M62.8365 54.9904C32.2232 54.9904 7.40625 29.828 7.40625 9.25064e-05"
                      stroke="#5A43F0"
                      strokeWidth="14"
                    />
                    <path
                      d="M62.8365 54.9904C32.2232 54.9904 7.40625 79.0479 7.40625 109.981"
                      stroke="#5A43F0"
                      strokeWidth="14"
                    />
                  </svg>
                </span>
              </div>
              path to the right funding
            </h1>
            <div className="grid gap-6 md:text-xl ">
              <p>
                Welcome to Glo-raise - the premier platform for assessing
                business attractiveness and matching founders and funder
                globally. <br />
                <br />
                Our data-driven approach radically shifts the game - improving
                access for founders and opportunity sourcing for funders.
              </p>
              <div className="grid sm:flex items-center justify-between gap-2 ">
                <p className="font-semibold">
                  Take the free Glo-GROWTH assessment to discover your
                  fundability
                </p>
                <button
                  onClick={() => navigate("/get_started")}
                  className="bg-Dark px-[36px] py-5 text-white rounded-[4px] [font-family:'Roboto',sans-serif;] shrink-0"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Lavender">
        <div className="w-[min(80rem,100%)] gap-8 lg:gap-0 mx-auto grid pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
          <div className="text-Hero-Purple text-[26px] sm:text-5xl text-center [font-family:'Instrument_Serif',serif;]">
            Forget what you know about
            <br /> the traditional investment route
          </div>
          <div className="flex items-center gap-10">
            <div className="relative grid place-items-center [&>*:first-child]:w-[64px] [&>*:first-child]:h-[64px] md:[&>*:first-child]:w-[80px] md:[&>*:first-child]:h-[80px] lg:[&>*:first-child]:w-[120px] lg:[&>*:first-child]:h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <mask
                  id="mask0_182_29279"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  // width="120"
                  // height="120"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M59.9609 119.5C92.8219 119.5 119.461 92.8609 119.461 60C119.461 27.1391 92.8219 0.5 59.9609 0.5C27.1 0.5 0.460938 27.1391 0.460938 60C0.460938 92.8609 27.1 119.5 59.9609 119.5ZM59.9612 97.399C80.6166 97.399 97.3612 80.6545 97.3612 59.999C97.3612 39.3435 80.6166 22.599 59.9612 22.599C39.3057 22.599 22.5612 39.3435 22.5612 59.999C22.5612 80.6545 39.3057 97.399 59.9612 97.399Z"
                    fill="#E5DFFA"
                  />
                </mask>
                <g mask="url(#mask0_182_29279)">
                  <path
                    d="M60.3857 0.5V120.35"
                    stroke="#5A43F0"
                    strokeWidth="8"
                  />
                  <path
                    d="M102.759 18.052L18.012 102.799"
                    stroke="#5A43F0"
                    strokeWidth="8"
                  />
                  <path
                    d="M102.76 102.798L18.013 18.0512"
                    stroke="#5A43F0"
                    strokeWidth="8"
                  />
                  <path
                    d="M120.311 60.4246L0.460518 60.4246"
                    stroke="#5A43F0"
                    strokeWidth="8"
                  />
                </g>
              </svg>
              <span className="absolute text-[40px] md:text-[45px] lg:text-[70px] text-Hero-Purple [font-family:'Roboto',sans-serif;] font-semibold">
                ?
              </span>
            </div>
            <div className="flex items-center w-full">
              <div className="-mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="50"
                  viewBox="0 0 30 50"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.960938 21C12.4883 21 21.8968 11.3868 21.8968 0L29.8968 3.5059e-07C29.8968 10.4668 24.1796 19.8411 15.6369 24.9447C24.1669 29.9286 29.8968 39.1741 29.8968 50L21.8968 50C21.8968 38.1634 12.5406 29 0.960938 29L0.960938 21Z"
                    fill="#5A43F0"
                  />
                </svg>
              </div>
              <div className="h-[4px] md:h-[9px] w-full bg-Hero-Purple"></div>
              <div className="-ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="50"
                  viewBox="0 0 29 50"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.9613 21C17.4339 21 8.02539 11.3868 8.02539 0H0.0253906C0.0253906 10.4668 5.74264 19.8411 14.2853 24.9447C5.75536 29.9286 0.0253913 39.1741 0.0253927 50H8.02539C8.02539 38.1634 17.3816 29 28.9613 29L28.9613 21Z"
                    fill="#5A43F0"
                  />
                </svg>
              </div>
            </div>
            <div className="relative grid place-items-center [&>*:first-child]:w-[64px] [&>*:first-child]:h-[64px] md:[&>*:first-child]:w-[80px] md:[&>*:first-child]:h-[80px] lg:[&>*:first-child]:w-[120px] lg:[&>*:first-child]:h-[120px]">
              <svg
                viewBox="0 0 105 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="52.5391"
                  cy="52.5"
                  r="48"
                  stroke="#5A43F0"
                  strokeWidth="8"
                  strokeDasharray="16 16"
                />
              </svg>
              <span className="absolute text-[40px] md:text-[45px] lg:text-[70px] text-Hero-Purple [font-family:'Roboto',sans-serif;] font-semibold">
                $
              </span>
            </div>
          </div>
          <div className="grid md:flex items-center gap-1 md:gap-5 mx-auto text-Hero-Purple">
            <p className="text-[26px] sm:text-[38px] font-semibold mx-auto">
              10,000 +
            </p>
            <p className="text-lg">
              people are{" "}
              <span className="font-medium">
                streamlining their <br /> funding process
              </span>{" "}
              with Glo-raise
            </p>
          </div>
        </div>
      </section>
      <section className="bg-Iceberg overflow-hidden">
        <div className="w-[min(80rem,100%)] pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] grid gap-10 base:flex md:gap-[42px] lg:px-[132px]  mx-auto">
          <div className="flex gap-5 mx-auto w-full justify-center items-center base:order-2">
            <div className="w-[220px] md:w-[350px] h-[220px] md:h-[350px] border-[8px] border-Violet rounded-full shrink-0 relative ">
              <div className="absolute w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-Violet rounded-full shrink-0 -left-[calc(220px+20px)] md:-left-[calc(350px+20px)] base:-top-[calc(350px+20px)] base:-left-[0]"></div>
              <div className="absolute w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-Violet rounded-full shrink-0 -right-[calc(220px+20px)] md:-right-[calc(350px+20px)] base:-bottom-[calc(350px+20px)] base:-left-[0]"></div>
            </div>
          </div>
          <div className="grid gap-[23px] px-4 md:px-[60px] lg:px-0 w-[min(600px,100%)] md:w-[unset]">
            <p className="text-[20px] md:text-[26px] text-Violet [font-family:'Instrument_Serif',serif;]">
              Matching Founders & Funders
            </p>
            <div className="grid gap-8">
              <p className="font-semibold text-[38px] md:text-[58px] text-Violet leading-tight">
                A direct path to the right funders
              </p>
              <p className="text-xl text-Violet leading-tight">
                Glo-raise uses a leading-edge assessment developed by premier
                funders and scholars to evaluate your readiness for funding,
                leaving you time to do what you do best.
              </p>
              <button
                onClick={() => navigate("/get_started")}
                className="bg-Violet px-[36px] py-6 text-white rounded-[4px] [font-family:'Roboto',sans-serif;] mr-0 md:mr-auto"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
