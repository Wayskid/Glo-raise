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
        <div className="w-[min(80rem,100%)] pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] grid gap-10 base:flex md:gap-[42px] lg:px-[132px] mx-auto">
          <div className="flex mx-auto w-full justify-center items-center base:order-2">
            <div className="w-[220px] md:w-[350px] h-[220px] md:h-[350px] border-[8px] border-Violet rounded-full shrink-0 relative grid items-center justify-items-center">
              <div className="absolute w-[220px] md:w-[350px] h-[220px] md:h-[350px] border-[8px] border-Violet bg-Violet rounded-full shrink-0 -left-[calc(220px+20px)]  md:-left-[calc(350px+20px)] base:-top-[calc(350px+20px)] base:left-[unset]"></div>
              <div className="absolute w-[220px] md:w-[350px] h-[220px] md:h-[350px] border-[8px] border-Violet bg-Violet rounded-full shrink-0 -right-[calc(220px+20px)] md:-right-[calc(350px+20px)] base:-bottom-[calc(350px+20px)] base:right-[unset]"></div>
            </div>
          </div>
          <div className="grid gap-[23px] px-4 md:px-[60px] lg:px-0 w-[min(600px,100%)] md:w-[unset] mx-auto">
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
      <section className="bg-Dark">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-12 md:grid-cols-[1fr_min-content] md:justify-between">
          <div className="text-white grid gap-12 md:col-span-2 base:col-span-1">
            <p className="[font-family:'Instrument_Serif',serif;] text-[26px]">
              Get started at any step
            </p>
            <p className="font-semibold text-[38px] md:text-[64px] leading-tight">
              Scale your funding as your project evolves
            </p>
          </div>
          <div className="md:order-3 base:order-[unset] w-[343px] h-[343px] md:w-[379px] md:h-[379px] border-Light border-[5px] md:border-[8px] border-dashed base:row-span-3 self-center relative grid">
            <div className="w-[181px] h-[181px] md:w-[200px] md:h-[200px] bg-white self-end -ml-[5px] -mb-[5px] md:-ml-[8px] md:-mb-[8px]"></div>
            <div className="absolute w-20 h-[9px] bg-white -rotate-45 place-self-center translate-x-12 -translate-y-12 grid justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="50"
                viewBox="0 0 29 50"
                fill="none"
                className="-translate-y-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.9613 21C17.4339 21 8.02539 11.3868 8.02539 0H0.0253906C0.0253906 10.4668 5.74264 19.8411 14.2853 24.9447C5.75536 29.9286 0.0253913 39.1741 0.0253927 50H8.02539C8.02539 38.1634 17.3816 29 28.9613 29L28.9613 21Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
          <div className="text-white grid gap-12 h-fit">
            <p className="text-xl">
              Regardless where you’re at in the process, Glo-raise will help
              determine the best path to advance your business.
            </p>
            <button
              onClick={() => navigate("/get_started")}
              className="bg-white px-[36px] py-6 text-Dark rounded-[4px] [font-family:'Roboto',sans-serif;] mr-0 md:mr-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="bg-White">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-[60px] justify-center">
          <h4 className="text-Dark text-center text-[38px] font-semibold">
            How it works
          </h4>
          <div className="grid text-Emerald gap-y-12 base:grid-cols-2 base:gap-x-6 base:gap-y-8 lg:grid-cols-3">
            <div className="grid gap-10 px-3">
              <p className="[font-family:'Instrument_Serif',serif;] text-5xl text-center">
                1.
              </p>
              <div className="relative grid items-center mx-auto">
                <div className="absolute justify-self-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                  >
                    <circle cx="23.5" cy="23.499" r="23" fill="#02B68A" />
                    <path
                      d="M11.6035 23.4988L18.7414 30.6367L34.6035 14.7747"
                      stroke="white"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="249"
                  height="27"
                  viewBox="0 0 249 27"
                  fill="none"
                >
                  <circle
                    cx="54.5"
                    cy="13.4985"
                    r="10.9995"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <circle
                    cx="8.99951"
                    cy="13.9985"
                    r="6.5"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="6.5"
                    transform="matrix(-1 0 0 1 248.5 5.49854)"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <circle
                    cx="195"
                    cy="13.4985"
                    r="10.9995"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <path
                    d="M65.4995 13.4985L92.4995 13.4985"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <path
                    d="M15.4995 13.4985L42.4995 13.4985"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <path
                    d="M233.5 13.4985L206.5 13.4985"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <path
                    d="M156.5 13.4985L183.5 13.4985"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                  <path
                    d="M206.5 13.4985L233.5 13.4985"
                    stroke="#024F4A"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              <div className="w-[297px] h-[238px] border-Emerald border-[4px] grid justify-items-center items-center p-7 mx-auto">
                <div className="w-[82px] h-[9px] bg-Emerald"></div>
                <div className="w-full h-[9px] bg-Nature"></div>
                <div className="grid gap-2 w-full">
                  <div className="flex  items-center justify-between">
                    <div className="w-[94px] h-[9px] bg-Emerald"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                    >
                      <circle cx="14.5" cy="14.999" r="14.5" fill="#02B68A" />
                      <path
                        d="M7 14.999L11.5 19.499L21.5 9.49902"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div className="flex  items-center justify-between">
                    <div className="w-[94px] h-[9px] bg-Emerald"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                    >
                      <circle cx="14.5" cy="14.999" r="14.5" fill="#02B68A" />
                      <path
                        d="M7 14.999L11.5 19.499L21.5 9.49902"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div className="flex  items-center justify-between">
                    <div className="w-[94px] h-[9px] bg-Emerald"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                    >
                      <circle cx="14.5" cy="14.999" r="14.5" fill="#02B68A" />
                      <path
                        d="M7 14.999L11.5 19.499L21.5 9.49902"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xl text-center">
                Sign up and complete the free assessment.
              </p>
            </div>
            <div className="grid gap-10 px-3">
              <p className="[font-family:'Instrument_Serif',serif;] text-5xl text-center">
                2.
              </p>
              <div className="flex mx-auto justify-center relative mt-[45px]">
                <div className="w-[234px] h-[297px] border-Emerald border-[4px] absolute bg-white z-10 -bottom-[15px] px-5 py-7 grid gap-5 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="185"
                    height="58"
                    viewBox="0 0 185 58"
                    fill="none"
                  >
                    <path
                      d="M0.5 31.499H35L58 54.499L109.5 2.99902L138 31.499L152 17.499L166 31.499H184.5"
                      stroke="#024F4A"
                      stroke-width="4"
                    />
                  </svg>
                  <div className="flex justify-between items-center">
                    <div className="grid self-stretch items-center">
                      <div className="w-10 h-[4px] bg-Emerald self-start"></div>
                      <div className="w-10 h-[4px] bg-Emerald"></div>
                      <div className="w-10 h-[4px] bg-Emerald self-end"></div>
                    </div>
                    <div className="flex justify-evenly w-[112px] relative items-end">
                      <div className="w-[8px] h-[18px] bg-Emerald"></div>
                      <div className="w-[8px] h-[38px] bg-Emerald"></div>
                      <div className="w-[8px] h-[58px] bg-Emerald"></div>
                      <div className="w-[8px] h-[78px] bg-Emerald"></div>
                      <div className="absolute w-full h-[5px] bottom-0 bg-Emerald"></div>
                      <div className="absolute left-1 bottom-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="87"
                          height="86"
                          viewBox="0 0 87 86"
                          fill="none"
                        >
                          <path
                            d="M1.5 84.4321L77.5 8.43213"
                            stroke="#02B68A"
                            stroke-width="4"
                          />
                          <path
                            d="M78.6382 7.46851C74.4799 11.6268 67.691 11.5799 63.6394 7.52827"
                            stroke="#02B68A"
                            stroke-width="4"
                          />
                          <path
                            d="M78.6382 7.4685C74.4799 11.6268 74.3767 18.2656 78.5784 22.4673"
                            stroke="#02B68A"
                            stroke-width="4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[7px] bg-Emerald"></div>
                </div>
                <div className="w-[292px] h-[238px] border-Emerald border-[4px]"></div>
              </div>
              <p className="text-xl text-center">
                Receive a report including recommended steps to strengthen your
                positioning.
              </p>
            </div>
            <div className="grid gap-10 px-3 md:col-span-3 lg:col-span-1">
              <p className="[font-family:'Instrument_Serif',serif;] text-5xl text-center">
                3.
              </p>
              <div className="flex mx-auto justify-center relative mt-12 mb-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="188"
                  height="188"
                  viewBox="0 0 188 188"
                  fill="none"
                >
                  <circle
                    cx="93.9431"
                    cy="94.0564"
                    r="89.0896"
                    stroke="#024F4A"
                    stroke-width="8"
                  />
                  <path
                    d="M93.0566 4.51367V4.51367C42.5767 53.5375 42.5767 134.576 93.0566 183.6V183.6"
                    stroke="#024F4A"
                    stroke-width="8"
                  />
                  <path
                    d="M93.0566 183.6V183.6C144.208 134.862 144.208 53.2517 93.0566 4.51354V4.51354"
                    stroke="#024F4A"
                    stroke-width="8"
                  />
                  <path
                    d="M6.17285 94.0566H182.6"
                    stroke="#024F4A"
                    stroke-width="8"
                  />
                  <path
                    d="M160.436 32.8833V32.8833C124.489 69.8015 65.1708 69.8015 29.2241 32.8833V32.8833"
                    stroke="#024F4A"
                    stroke-width="8"
                  />
                  <path
                    d="M29.2236 156.117V156.117C65.0274 118.861 124.632 118.861 160.436 156.117V156.117"
                    stroke="#024F4A"
                    stroke-width="8"
                  />
                </svg>
                <div className="absolute flex -top-12 -right-[3.4rem] items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                    fill="none"
                    className="-mr-1"
                  >
                    <circle
                      cx="16.9434"
                      cy="16.7317"
                      r="14.1851"
                      stroke="#024F4A"
                      stroke-width="4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="5"
                    viewBox="0 0 92 5"
                    fill="none"
                  >
                    <path
                      d="M0.0146484 2.73145L91.3311 2.73144"
                      stroke="#024F4A"
                      stroke-width="4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6836 1.06901C16.0666 -0.145587 19.7339 -0.329727 23.2216 0.539893C25.5377 1.11699 27.7173 2.14472 29.6361 3.56436C31.5549 4.984 33.1752 6.76774 34.4044 8.8137C35.6337 10.8597 36.4478 13.1278 36.8004 15.4884C37.1529 17.8491 37.0369 20.2561 36.459 22.5719C35.5892 26.0596 33.7048 29.2111 31.044 31.6278C28.3832 34.0445 25.0655 35.618 21.5104 36.1491C17.9553 36.6803 14.3226 36.1454 11.0716 34.6119C7.82057 33.0785 5.09726 30.6155 3.24604 27.5344C1.39481 24.4532 0.498804 20.8923 0.671344 17.3019C0.843885 13.7116 2.0772 10.253 4.21535 7.36357C6.3535 4.47413 9.30047 2.28362 12.6836 1.06901ZM19.4101 26.1046L19.9882 28.2622L22.3587 27.6492L21.775 25.4709C24.2059 24.4193 25.4542 22.4395 24.8261 20.0952C23.9607 16.8654 21.2279 16.949 18.8792 17.0208C17.1096 17.0749 15.558 17.1223 15.1877 15.7405C14.9154 14.724 15.6295 13.8211 17.061 13.4376C18.5961 13.0262 19.8198 13.61 20.2834 14.8421L22.8973 14.1417C22.1821 11.8875 20.2756 10.664 17.8506 10.8246L17.3003 8.77082L14.9353 9.40451L15.4689 11.3961C13.1514 12.3728 11.9446 14.3416 12.5116 16.4576C13.3638 19.638 16.0918 19.6092 18.4267 19.5845C20.1736 19.566 21.7005 19.5499 22.0573 20.8816C22.4019 22.1678 21.4899 23.0792 19.934 23.4961C18.1914 23.9631 16.8347 23.2149 16.2559 21.6356L13.6212 22.3416C14.4628 24.9844 16.6435 26.4012 19.4101 26.1046Z"
                      fill="#02B68A"
                    />
                  </svg>
                </div>
                <div className="absolute flex -top-8 -left-[3.3rem] items-center rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    className="mr-2 -rotate-45"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6836 1.06901C16.0666 -0.145587 19.7339 -0.329727 23.2216 0.539893C25.5377 1.11699 27.7173 2.14472 29.6361 3.56436C31.5549 4.984 33.1752 6.76774 34.4044 8.8137C35.6337 10.8597 36.4478 13.1278 36.8004 15.4884C37.1529 17.8491 37.0369 20.2561 36.459 22.5719C35.5892 26.0596 33.7048 29.2111 31.044 31.6278C28.3832 34.0445 25.0655 35.618 21.5104 36.1491C17.9553 36.6803 14.3226 36.1454 11.0716 34.6119C7.82057 33.0785 5.09726 30.6155 3.24604 27.5344C1.39481 24.4532 0.498804 20.8923 0.671344 17.3019C0.843885 13.7116 2.0772 10.253 4.21535 7.36357C6.3535 4.47413 9.30047 2.28362 12.6836 1.06901ZM19.4101 26.1046L19.9882 28.2622L22.3587 27.6492L21.775 25.4709C24.2059 24.4193 25.4542 22.4395 24.8261 20.0952C23.9607 16.8654 21.2279 16.949 18.8792 17.0208C17.1096 17.0749 15.558 17.1223 15.1877 15.7405C14.9154 14.724 15.6295 13.8211 17.061 13.4376C18.5961 13.0262 19.8198 13.61 20.2834 14.8421L22.8973 14.1417C22.1821 11.8875 20.2756 10.664 17.8506 10.8246L17.3003 8.77082L14.9353 9.40451L15.4689 11.3961C13.1514 12.3728 11.9446 14.3416 12.5116 16.4576C13.3638 19.638 16.0918 19.6092 18.4267 19.5845C20.1736 19.566 21.7005 19.5499 22.0573 20.8816C22.4019 22.1678 21.4899 23.0792 19.934 23.4961C18.1914 23.9631 16.8347 23.2149 16.2559 21.6356L13.6212 22.3416C14.4628 24.9844 16.6435 26.4012 19.4101 26.1046Z"
                      fill="#02B68A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    viewBox="0 0 14 5"
                    fill="none"
                  >
                    <path
                      d="M0.0146484 2.73145L91.3311 2.73144"
                      stroke="#024F4A"
                      stroke-width="4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"
                    className="-ml-1"
                  >
                    <circle
                      cx="16.7894"
                      cy="16.9023"
                      r="14.1851"
                      transform="rotate(135 16.7894 16.9023)"
                      stroke="#024F4A"
                      stroke-width="4"
                    />
                  </svg>
                </div>
                <div className="absolute grid -bottom-14 -left-12 items-center justify-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                    fill="none"
                    className="-mb-1"
                  >
                    <circle
                      cx="16.9434"
                      cy="16.7317"
                      r="14.1851"
                      stroke="#024F4A"
                      stroke-width="4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="94"
                    viewBox="0 0 5 94"
                    fill="none"
                  >
                    <path
                      d="M2.61768 0.242188L2.61768 93.3317"
                      stroke="#024F4A"
                      stroke-width="4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    className="mt-1"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6836 1.06901C16.0666 -0.145587 19.7339 -0.329727 23.2216 0.539893C25.5377 1.11699 27.7173 2.14472 29.6361 3.56436C31.5549 4.984 33.1752 6.76774 34.4044 8.8137C35.6337 10.8597 36.4478 13.1278 36.8004 15.4884C37.1529 17.8491 37.0369 20.2561 36.459 22.5719C35.5892 26.0596 33.7048 29.2111 31.044 31.6278C28.3832 34.0445 25.0655 35.618 21.5104 36.1491C17.9553 36.6803 14.3226 36.1454 11.0716 34.6119C7.82057 33.0785 5.09726 30.6155 3.24604 27.5344C1.39481 24.4532 0.498804 20.8923 0.671344 17.3019C0.843885 13.7116 2.0772 10.253 4.21535 7.36357C6.3535 4.47413 9.30047 2.28362 12.6836 1.06901ZM19.4101 26.1046L19.9882 28.2622L22.3587 27.6492L21.775 25.4709C24.2059 24.4193 25.4542 22.4395 24.8261 20.0952C23.9607 16.8654 21.2279 16.949 18.8792 17.0208C17.1096 17.0749 15.558 17.1223 15.1877 15.7405C14.9154 14.724 15.6295 13.8211 17.061 13.4376C18.5961 13.0262 19.8198 13.61 20.2834 14.8421L22.8973 14.1417C22.1821 11.8875 20.2756 10.664 17.8506 10.8246L17.3003 8.77082L14.9353 9.40451L15.4689 11.3961C13.1514 12.3728 11.9446 14.3416 12.5116 16.4576C13.3638 19.638 16.0918 19.6092 18.4267 19.5845C20.1736 19.566 21.7005 19.5499 22.0573 20.8816C22.4019 22.1678 21.4899 23.0792 19.934 23.4961C18.1914 23.9631 16.8347 23.2149 16.2559 21.6356L13.6212 22.3416C14.4628 24.9844 16.6435 26.4012 19.4101 26.1046Z"
                      fill="#02B68A"
                    />
                  </svg>
                </div>
                <div className="relative -bottom-[3.45rem] -right-5">
                  <div className="absolute flex -bottom-0 -right-[2.05rem] items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      className="mr-1"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6836 1.06901C16.0666 -0.145587 19.7339 -0.329727 23.2216 0.539893C25.5377 1.11699 27.7173 2.14472 29.6361 3.56436C31.5549 4.984 33.1752 6.76774 34.4044 8.8137C35.6337 10.8597 36.4478 13.1278 36.8004 15.4884C37.1529 17.8491 37.0369 20.2561 36.459 22.5719C35.5892 26.0596 33.7048 29.2111 31.044 31.6278C28.3832 34.0445 25.0655 35.618 21.5104 36.1491C17.9553 36.6803 14.3226 36.1454 11.0716 34.6119C7.82057 33.0785 5.09726 30.6155 3.24604 27.5344C1.39481 24.4532 0.498804 20.8923 0.671344 17.3019C0.843885 13.7116 2.0772 10.253 4.21535 7.36357C6.3535 4.47413 9.30047 2.28362 12.6836 1.06901ZM19.4101 26.1046L19.9882 28.2622L22.3587 27.6492L21.775 25.4709C24.2059 24.4193 25.4542 22.4395 24.8261 20.0952C23.9607 16.8654 21.2279 16.949 18.8792 17.0208C17.1096 17.0749 15.558 17.1223 15.1877 15.7405C14.9154 14.724 15.6295 13.8211 17.061 13.4376C18.5961 13.0262 19.8198 13.61 20.2834 14.8421L22.8973 14.1417C22.1821 11.8875 20.2756 10.664 17.8506 10.8246L17.3003 8.77082L14.9353 9.40451L15.4689 11.3961C13.1514 12.3728 11.9446 14.3416 12.5116 16.4576C13.3638 19.638 16.0918 19.6092 18.4267 19.5845C20.1736 19.566 21.7005 19.5499 22.0573 20.8816C22.4019 22.1678 21.4899 23.0792 19.934 23.4961C18.1914 23.9631 16.8347 23.2149 16.2559 21.6356L13.6212 22.3416C14.4628 24.9844 16.6435 26.4012 19.4101 26.1046Z"
                        fill="#02B68A"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="92"
                      height="5"
                      viewBox="0 0 92 5"
                      fill="none"
                    >
                      <path
                        d="M0.0146484 2.73145L91.3311 2.73144"
                        stroke="#024F4A"
                        stroke-width="4"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="33"
                      viewBox="0 0 34 33"
                      fill="none"
                      className="-ml-1"
                    >
                      <circle
                        cx="16.9434"
                        cy="16.7317"
                        r="14.1851"
                        stroke="#024F4A"
                        stroke-width="4"
                      />
                    </svg>
                  </div>
                  <div className="absolute grid top-6 justify-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="33"
                      viewBox="0 0 34 33"
                      fill="none"
                      className="-mb-1"
                    >
                      <circle
                        cx="16.9434"
                        cy="16.7317"
                        r="14.1851"
                        stroke="#024F4A"
                        stroke-width="4"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="103"
                      viewBox="0 0 5 103"
                      fill="none"
                    >
                      <path
                        d="M2.26855 0.242188L2.26856 102.197"
                        stroke="#024F4A"
                        stroke-width="4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xl text-center">
                Once deemed fundable, your project will be introduced to our
                capital network.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/get_started")}
            className="bg-Dark px-9 py-6 text-white rounded-[4px] [font-family:'Roboto',sans-serif;] base:mx-auto"
          >
            Start Assessment
          </button>
        </div>
      </section>
      <section className="bg-Light">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-8 md:gap-12 justify-center overflow-hidden">
          <h4 className="text-[38px] font-semibold text-center text-Dark">
            Glo-GROWTH sample excerpt
          </h4>
          <p className="text-xl text-center text-Dark">
            Whether you're ready for funding or still need some more time,
            Glo-raise offers resources and opportunities to continue to improve
            the attractiveness of your business.
          </p>
          <div className="w-[min(946px,100%)] py-8 md:p-10 grid gap-8 md:flex  border-[4px] border-Lavender overflow-hidden leading-tight mx-auto">
            <div className="grid gap-12 md:gap-8 p-4 md:p-0">
              <div className="grid gap-5 md:gap-3">
                <p className="text-[32px] md:text-[38px] font-semibold">
                  You're Glo-GROWTH score is
                </p>
                <p className="text-[32px] md:text-[38px] text-Hero-Purple font-semibold">
                  Level 3
                </p>
                <p className="md:text-xl">You're potentially ready for funding</p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="26"
                  viewBox="0 0 35 26"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M12.9127 12.7429C12.9127 13.658 12.8186 14.115 12.1689 14.115C11.4906 14.115 11.3835 13.6994 11.3835 12.8689V5.56379H6.11628V14.1436C6.11628 15.636 6.46819 16.8653 7.29276 17.8314C8.11717 18.7963 9.136 19.2793 10.4089 19.2793C11.2697 19.2793 12.1341 19.0095 13.0315 18.4677C12.5371 20.3808 11.4258 21.3373 9.75836 21.3373C9.23654 21.3373 8.73827 21.1878 7.91513 20.8883C7.91513 20.8883 7.13606 20.6356 6.11628 20.0296V24.4872C6.11628 24.4872 7.13065 25.1363 7.91513 25.4382C8.87604 25.8112 9.822 25.998 10.7745 25.998C12.9456 25.998 14.7613 25.1486 16.291 23.4506C17.5731 22.0229 18.18 20.1471 18.18 17.8244V5.56379H12.9127V12.7429ZM24.8549 0.0637079C18.604 0.638824 19.0291 7.46644 19.0291 7.46644V19.4061C22.4275 19.4061 24.1262 17.7397 24.1262 15.4323V13.8728H26.6329V8.67956H24.1262V7.98451C24.1262 7.17279 24.3366 6.54794 24.6893 6.10901C25.0345 5.68064 25.5388 5.46288 26.1674 5.45313C26.5866 5.458 27.3571 5.59987 27.5128 6.21724L27.5243 6.26632V11.6791C27.5243 13.6671 27.891 15.2628 28.679 16.4666C29.3013 17.409 30.1141 18.1552 31.1446 18.7065C32.175 19.2566 33.2587 19.5307 34.4225 19.5307C34.5509 19.5307 34.7841 19.527 35 19.5171V14.017C33.9226 14.017 33.4605 13.8135 33.1175 13.3929C32.7737 12.9732 32.6076 12.142 32.6076 11.103H34.4421V5.56379H32.7048C32.3779 3.48662 31.1568 0.357685 26.6272 0.00910514C26.6272 0.00910514 26.0909 -0.0115334 25.6705 0.00357987C25.3428 0.0156055 24.8549 0.0637079 24.8549 0.0637079ZM7.04728 18.9738L7.0511 18.9821C6.46485 19.3485 5.77646 19.6029 5.26705 19.7374V19.7657L5.24939 19.74C4.93741 19.8101 4.62813 19.8483 4.33063 19.8483C3.04676 19.8483 2.01808 19.3614 1.18698 18.3875C0.355729 17.4131 0 16.1733 0 14.6678V0.357847H5.26705V14.668C5.26705 16.1736 5.61848 17.4134 6.45037 18.3875C6.63169 18.6008 6.83147 18.7971 7.04728 18.9738Z"
                    fill="#5A43F0"
                  />
                </svg>
                <p className="text-Hero-Purple ">
                  At this stage, Lyft had built initial momentum but was still
                  searching for how to pivot from Zimride, it's long-distance
                  intercity carpooling predecessor, to position for greater
                  scale.
                </p>
              </div>
            </div>
            <div className="flex mx-auto w-full justify-center items-center">
              <div className="w-[180px] h-[180px] border-[8px] border-Hero-Purple bg-Hero-Purple rounded-full shrink-0 relative grid items-center justify-items-center">
                <span className="m-auto text-[92px] text-white font-semibold">
                  3
                </span>
                <div className="absolute w-[180px] h-[180px] border-Hero-Purple border-[8px] rounded-full shrink-0 -left-[calc(180px+20px)] md:left-[unset] md:-top-[calc(180px+20px)]"></div>
                <div className="absolute w-[180px] h-[180px] border-Hero-Purple border-[8px] rounded-full shrink-0 -right-[calc(180px+20px)] md:right-[unset] md:-bottom-[calc(180px+20px)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
