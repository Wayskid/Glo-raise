import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import SubscriberForm from "../../components/SubscriberForm";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <section className="bg-Light">
        <div className="w-[min(80rem,100%)] mx-auto">
          <div className="grid gap-8 md:gap-12 w-[min(1260px,100%)] h-fit pt-[56px] pb-[72px] md:py-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
            <h1 className="text-[32px] xs:text-[50px] sm:text-[92px] font-semibold leading-tight">
              The{" "}
              <span className="relative">
                simplest
                <span className="absolute w-full h-[5px] sm:h-[10px] bg-Energy bottom-0 left-0"></span>
              </span>
              <br />
              <div className="hidden sm:inline-flex lg:hidden items-center -translate-y-3 -ml-16">
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
              </div>{" "}
              path{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="187"
                viewBox="0 0 110 187"
                fill="none"
                className="hidden lg:inline translate-y-14"
              >
                <path
                  d="M54.9893 0.449219L54.9893 186.392"
                  stroke="#5A43F0"
                  strokeWidth="14"
                />
                <path
                  d="M54.9902 4.55582C54.9902 35.1691 29.8279 59.9861 -2.95639e-05 59.9861"
                  stroke="#5A43F0"
                  strokeWidth="14"
                />
                <path
                  d="M54.9902 4.55582C54.9902 35.1691 79.0478 59.9861 109.98 59.986"
                  stroke="#5A43F0"
                  strokeWidth="14"
                />
              </svg>{" "}
              to the{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="67"
                viewBox="0 0 90 67"
                fill="none"
                className="hidden sm:inline lg:hidden"
              >
                <path
                  d="M3 34.898L28.9138 60.8118L86.5 3.22559"
                  stroke="#02B68A"
                  strokeWidth="8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="29"
                viewBox="0 0 38 29"
                fill="none"
                className="inline sm:hidden"
              >
                <path
                  d="M2 14.8966L12.5517 25.4483L36 2"
                  stroke="#02B68A"
                  strokeWidth="4"
                />
              </svg>{" "}
              <span className="inline-flex items-center gap-4 w-fit">
                right{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="67"
                  viewBox="0 0 90 67"
                  fill="none"
                  className="hidden lg:inline"
                >
                  <path
                    d="M3 34.898L28.9138 60.8118L86.5 3.22559"
                    stroke="#02B68A"
                    strokeWidth="8"
                  />
                </svg>
              </span>{" "}
              <span className="inline-flex items-center gap-4 lg:ml-[24rem] w-fit lg:flex-row-reverse lg:-translate-y-5">
                funding{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  className="inline-flex sm:hidden"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.60725 0.764659C11.0272 -0.104138 13.6503 -0.235853 16.1451 0.386181C17.8017 0.798975 19.3608 1.5341 20.7333 2.54956C22.1058 3.56502 23.2648 4.84092 24.1441 6.30439C25.0234 7.76785 25.6057 9.39021 25.8579 11.0788C26.11 12.7674 26.0271 14.4891 25.6137 16.1456C24.9916 18.6403 23.6436 20.8945 21.7404 22.6232C19.8371 24.3519 17.464 25.4773 14.921 25.8573C12.3781 26.2372 9.77967 25.8546 7.45423 24.7577C5.12879 23.6609 3.18082 21.8991 1.85665 19.6952C0.532481 17.4912 -0.108428 14.9442 0.0149892 12.376C0.138406 9.80781 1.02059 7.33391 2.54999 5.26712C4.0794 3.20032 6.18735 1.63346 8.60725 0.764659ZM19.3335 17.7187C20.0728 16.6063 20.2666 15.3939 19.915 14.0815C19.6292 13.0152 19.0704 12.2419 18.2384 11.7615C17.4019 11.2648 16.1934 11.0523 14.6126 11.1242L13.4394 11.1749L12.1207 6.25345C12.8941 6.18689 13.6228 6.28174 14.3068 6.53801C15.0073 6.78989 15.6943 7.2212 16.3678 7.83194L17.6306 5.75292C15.8631 4.27485 13.8308 3.71169 11.5339 4.06342L10.8943 1.67653L8.92573 2.20401L9.56529 4.5909C8.52536 4.97504 7.66501 5.50448 6.98426 6.17919C6.31551 6.83311 5.86019 7.56171 5.61828 8.365C5.38838 9.14749 5.38333 9.94885 5.60311 10.7691C5.88003 11.8026 6.4575 12.5797 7.33551 13.1005C8.22553 13.6005 9.40731 13.8113 10.8808 13.733L12.0049 13.6955L13.2972 18.5185C12.3062 18.6258 11.386 18.5383 10.5367 18.256C9.69944 17.9529 8.96644 17.4811 8.33772 16.8408L7.04074 19.0872C7.88508 19.8105 8.89491 20.3311 10.0703 20.6491C11.2412 20.9508 12.5146 20.9788 13.8906 20.7332L14.5434 23.1693L16.5119 22.6418L15.8592 20.2057C17.4481 19.6393 18.6062 18.8103 19.3335 17.7187ZM10.1323 6.70711L11.3521 11.2594L11.2225 11.2678C10.1767 11.3019 9.42715 11.195 8.97394 10.9472C8.51633 10.683 8.2128 10.272 8.06335 9.71426C7.90071 9.10728 7.98591 8.53939 8.31894 8.01059C8.66839 7.4774 9.27285 7.0429 10.1323 6.70711ZM17.1925 16.8154C16.8015 17.3246 16.1658 17.7411 15.2855 18.0649L14.0987 13.6356L14.6976 13.607C16.2948 13.5307 17.2318 14.0093 17.5088 15.0428C17.6846 15.699 17.5792 16.2898 17.1925 16.8154Z"
                    fill="#B79F71"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  className="hidden sm:inline"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.2397 2.55669C33.6169 -0.0918852 41.6138 -0.493425 49.2192 1.40288C54.2695 2.6613 59.0225 4.90238 63.2066 7.99806C67.3907 11.0937 70.9239 14.9834 73.6045 19.4448C76.285 23.9063 78.0603 28.8521 78.8291 33.9999C79.5978 39.1476 79.3448 44.3963 78.0847 49.4462C76.1881 57.0516 72.0789 63.9237 66.2766 69.1936C60.4744 74.4635 53.2398 77.8945 45.4876 79.0528C37.7354 80.2111 29.8138 79.0446 22.7246 75.7008C15.6354 72.357 9.69691 66.9862 5.6601 60.2674C1.6233 53.5486 -0.330548 45.7836 0.0456954 37.9544C0.421939 30.1252 3.11131 22.5834 7.77379 16.2827C12.4363 9.98193 18.8625 5.20526 26.2397 2.55669ZM59.4516 56.1549C61.7055 52.7637 62.2964 49.0677 61.2243 45.0668C60.3533 41.8161 58.6496 39.4586 56.1131 37.9941C53.5633 36.4797 49.8789 35.8321 45.0599 36.0513L41.4832 36.2057L37.4631 21.2025C39.8208 20.9995 42.0423 21.2887 44.1277 22.07C46.2631 22.8378 48.3574 24.1527 50.4108 26.0146L54.2602 19.6766C48.872 15.1706 42.6766 13.4538 35.6741 14.526L33.7244 7.24949L27.7231 8.85753L29.6728 16.1341C26.5025 17.3052 23.8797 18.9192 21.8044 20.9761C19.7657 22.9696 18.3776 25.1908 17.6402 27.6396C16.9393 30.0251 16.9239 32.4681 17.5939 34.9686C18.4381 38.1193 20.1986 40.4884 22.8752 42.0761C25.5885 43.6003 29.1912 44.243 33.6833 44.0042L37.11 43.89L41.0497 58.5932C38.0285 58.9203 35.2233 58.6535 32.6343 57.7928C30.0818 56.8687 27.8472 55.4306 25.9305 53.4785L21.9766 60.3269C24.5506 62.5317 27.6292 64.1189 31.2122 65.0884C34.7819 66.008 38.6641 66.0934 42.8588 65.3446L44.8487 72.7712L50.85 71.1632L48.8601 63.7366C53.7039 62.0099 57.2344 59.4826 59.4516 56.1549ZM31.4015 22.5855L35.1201 36.4634L34.7249 36.4889C31.5366 36.5928 29.2517 36.267 27.8701 35.5116C26.475 34.7062 25.5497 33.4533 25.0941 31.7529C24.5983 29.9025 24.858 28.1713 25.8733 26.5592C26.9386 24.9337 28.7813 23.6092 31.4015 22.5855ZM52.9249 53.4012C51.7327 54.9535 49.7949 56.2231 47.1113 57.2102L43.4932 43.7073L45.3191 43.6201C50.1881 43.3875 53.0447 44.8465 53.8889 47.9972C54.4249 49.9976 54.1036 51.7989 52.9249 53.4012Z"
                    fill="#B79F71"
                  />
                </svg>
              </span>
            </h1>
            <div className="grid gap-6 md:text-xl ">
              <p>
                Welcome to Glo-raise - the premier platform for assessing
                business attractiveness and matching founders and funders
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
                {/* <!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/ritchieways/30min', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); }</script>
<!-- Calendly badge widget end --></link> */}
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
      <section className="bg-white">
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
                      strokeWidth="4"
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
                            strokeWidth="4"
                          />
                          <path
                            d="M78.6382 7.46851C74.4799 11.6268 67.691 11.5799 63.6394 7.52827"
                            stroke="#02B68A"
                            strokeWidth="4"
                          />
                          <path
                            d="M78.6382 7.4685C74.4799 11.6268 74.3767 18.2656 78.5784 22.4673"
                            stroke="#02B68A"
                            strokeWidth="4"
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
                Receive a premium report to access steps to strengthen your
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
                    strokeWidth="8"
                  />
                  <path
                    d="M93.0566 4.51367V4.51367C42.5767 53.5375 42.5767 134.576 93.0566 183.6V183.6"
                    stroke="#024F4A"
                    strokeWidth="8"
                  />
                  <path
                    d="M93.0566 183.6V183.6C144.208 134.862 144.208 53.2517 93.0566 4.51354V4.51354"
                    stroke="#024F4A"
                    strokeWidth="8"
                  />
                  <path
                    d="M6.17285 94.0566H182.6"
                    stroke="#024F4A"
                    strokeWidth="8"
                  />
                  <path
                    d="M160.436 32.8833V32.8833C124.489 69.8015 65.1708 69.8015 29.2241 32.8833V32.8833"
                    stroke="#024F4A"
                    strokeWidth="8"
                  />
                  <path
                    d="M29.2236 156.117V156.117C65.0274 118.861 124.632 118.861 160.436 156.117V156.117"
                    stroke="#024F4A"
                    strokeWidth="8"
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
                      strokeWidth="4"
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
                      strokeWidth="4"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                      strokeWidth="4"
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
                      strokeWidth="4"
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
                      strokeWidth="4"
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
                      strokeWidth="4"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
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
                        strokeWidth="4"
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
                        strokeWidth="4"
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
                        strokeWidth="4"
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
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xl text-center">
                Once deemed fundable, your business will be introduced to our
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
                  Your Glo-GROWTH score is
                </p>
                <p className="text-[32px] md:text-[38px] text-Hero-Purple font-semibold">
                  Level 3
                </p>
                <p className="md:text-xl">
                  Scores range from Level 1 (lowest) to Level 5 (highest) with
                  Level 5 most closely aligning with the factors known to drive
                  entrepreneurial success.
                </p>
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
      <section className="bg-Lavender">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-8 md:gap-12 base:md:gap-[60px] justify-center overflow-hidden">
          <p className="text-[38px] font-semibold text-center">
            Why choose Glo-raise?
          </p>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 base:grid-cols-4 base:py-10 w-[min(500px,100%)] md:w-[unset] justify-self-center">
            <div className="grid grid-cols-2 base:grid-cols-[unset] gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121"
                height="106"
                viewBox="0 0 121 106"
                fill="none"
              >
                <path
                  d="M1 57.1763L28.5269 56.9706"
                  stroke="#5A43F0"
                  strokeWidth="8"
                />
                <path
                  d="M32.3223 56.9424L59.5328 56.7391"
                  stroke="#5A43F0"
                  strokeWidth="8"
                />
                <path
                  d="M63.6465 56.7109L90.857 56.5077"
                  stroke="#5A43F0"
                  strokeWidth="8"
                />
                <path
                  d="M108.775 56.543C101.043 56.543 94.7754 50.1369 94.7754 42.543"
                  stroke="#5A43F0"
                  strokeWidth="8"
                />
                <path
                  d="M108.775 56.543C101.043 56.543 94.7754 62.6678 94.7754 70.543"
                  stroke="#5A43F0"
                  strokeWidth="8"
                />
              </svg>
              <p className="text-[22px] text-Hero-Purple font-semibold">
                Fast-track to Funding
              </p>
              <p className="col-span-2 base:col-span-1">
                The simplest path to connect founders to funders, regardless of
                the stage of the project.
              </p>
            </div>
            <div className="grid grid-cols-2 base:grid-cols-[unset] gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="90"
                viewBox="0 0 84 90"
                fill="none"
              >
                <path
                  d="M34.2873 15.2918L34.2873 49.8472L-0.000229611 15.2917L34.2873 15.2918Z"
                  fill="#5A43F0"
                />
                <path
                  d="M68.2946 15.2918L68.2946 49.8472L34.0071 15.2917L68.2946 15.2918Z"
                  fill="#5A43F0"
                />
                <path
                  d="M68.2946 48.7879L68.2946 83.3433L34.0071 48.7878L68.2946 48.7879Z"
                  fill="#5A43F0"
                />
                <path
                  d="M34.2873 48.7879L34.2873 83.3433L-0.000229611 48.7878L34.2873 48.7879Z"
                  fill="#5A43F0"
                />
              </svg>
              <p className="text-[22px] text-Hero-Purple font-semibold">
                Data-Driven Approach
              </p>
              <p className="col-span-2 base:col-span-1">
                Powerful Growth Assessment engine provides insights to business
                improvement and securing funding.
              </p>
            </div>
            <div className="grid grid-cols-2 base:grid-cols-[unset] gap-4 items-center">
              <div className="relative grid">
                <span className="absolute left-[24.76px] top-[5px] text-[50px] font-semibold text-Hero-Purple">
                  $
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="82"
                  viewBox="0 0 82 82"
                  fill="none"
                >
                  <circle
                    cx="40.7355"
                    cy="40.9982"
                    r="36.7355"
                    stroke="#5A43F0"
                    strokeWidth="8"
                    strokeDasharray="13.59 13.59"
                  />
                </svg>
              </div>
              <p className="text-[22px] text-Hero-Purple font-semibold">
                Smart Capital
              </p>
              <p className="col-span-2 base:col-span-1">
                Fundable ventures are matched with top funders accross a variety
                of vehicles-globally.
              </p>
            </div>
            <div className="grid grid-cols-2 base:grid-cols-[unset] gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="54"
                viewBox="0 0 100 54"
                fill="none"
              >
                <path
                  d="M0 49.58H49.7773M49.7773 49.58L4.74069 30.5488M49.7773 49.58L15.0122 14.6894M49.7773 49.58L31.6046 3.58789M49.7773 49.58V0.416016M49.7773 49.58H99.5545M49.7773 49.58L94.8138 30.5488M49.7773 49.58L84.5423 14.6894M49.7773 49.58L67.9499 3.58789"
                  stroke="#5A43F0"
                  strokeWidth="8"
                />
              </svg>
              <p className="text-[22px] text-Hero-Purple font-semibold">
                Leading Edge Resources
              </p>
              <p className="col-span-2 base:col-span-1">
                Access Glo-raise services to improve the attractiveness of your
                business and better GROW.
              </p>
            </div>
          </div>
          <div className="h-[6px] bg-Hero-Purple"></div>
          <div className="text-Dark text-[38px] font-semibold text-center">
            Inefficiencies keep the majority of Funders and Founders from
            connecting
          </div>
          <div className="grid gap-8">
            <div className="text-Dark text-xl text-center">
              Founders want increased access to potential funding. Funders want
              increased deal flow of high potential businesses.
              <br />
              <br />
              The current model produces the opposite: limited deal flow and
              little access.
            </div>
            <div className="relative grid">
              <div className="grid gap-[28.21px] justify-self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="345"
                  height="109"
                  viewBox="0 0 345 109"
                  fill="none"
                  className="md:hidden"
                >
                  <path
                    d="M1 1.99756L172.5 106.583L344 1.99756"
                    stroke="#F8F8F8"
                    strokeWidth="2.75226"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="345"
                  height="108"
                  viewBox="0 0 345 108"
                  fill="none"
                  className="md:hidden"
                >
                  <path
                    d="M1 106.38L172.5 1.79413L344 106.38"
                    stroke="#F8F8F8"
                    strokeWidth="2.75226"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="575"
                  height="180"
                  viewBox="0 0 575 180"
                  fill="none"
                  className="hidden md:block lg:hidden"
                >
                  <path
                    d="M1.8418 1.99902L287.707 176.328L573.573 1.99902"
                    stroke="#F8F8F8"
                    strokeWidth="4.58761"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="575"
                  height="180"
                  viewBox="0 0 575 180"
                  fill="none"
                  className="hidden md:block lg:hidden"
                >
                  <path
                    d="M1.8418 177.681L287.707 3.35145L573.573 177.681"
                    stroke="#F8F8F8"
                    strokeWidth="4.58761"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1003"
                  height="313"
                  viewBox="0 0 1003 313"
                  fill="none"
                  className="hidden lg:block"
                >
                  <path
                    d="M3 3.49902L501.5 307.499L1000 3.49902"
                    stroke="#F8F8F8"
                    strokeWidth="8"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1003"
                  height="313"
                  viewBox="0 0 1003 313"
                  fill="none"
                  className="hidden lg:block"
                >
                  <path
                    d="M3 309.499L501.5 5.49902L1000 309.499"
                    stroke="#F8F8F8"
                    strokeWidth="8"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-[32px_1fr_32px] md:grid-cols-[64px_1fr_64px] lg:grid-cols-[142px_1fr_142px] absolute self-center justify-self-center gap-1">
                <div className="bg-Hero-Purple rounded-[4px] h-40 md:h-[240px] lg:h-[442px] grid justify-center items-center font-semibold text-white">
                  <p className="-rotate-90 md:text-xl lg:text-[38px]">
                    Founders
                  </p>
                </div>
                <div className="grid items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                  >
                    <path
                      d="M23.5493 9.25879L0.499164 9.25879"
                      stroke="#5A43F0"
                      strokeWidth="2.75226"
                      strokeDasharray="5.5 5.5"
                    />
                    <mask id="path-2-inside-1_316_31613" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.5491 7.53864C19.5833 7.53864 16.3465 4.23138 16.3465 0.313965H13.5942C13.5942 3.91487 15.5612 7.13995 18.5001 8.89576C15.5655 10.6104 13.5942 13.7911 13.5942 17.5156L16.3465 17.5156C16.3465 13.4434 19.5653 10.2909 23.5491 10.2909V7.53864Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5491 7.53864C19.5833 7.53864 16.3465 4.23138 16.3465 0.313965H13.5942C13.5942 3.91487 15.5612 7.13995 18.5001 8.89576C15.5655 10.6104 13.5942 13.7911 13.5942 17.5156L16.3465 17.5156C16.3465 13.4434 19.5653 10.2909 23.5491 10.2909V7.53864Z"
                      fill="#5A43F0"
                    />
                    <path
                      d="M16.3465 0.313965L19.0988 0.313965L19.0988 -2.43829H16.3465V0.313965ZM23.5491 7.53864H26.3014V4.78638H23.5491V7.53864ZM13.5942 0.313965V-2.43829H10.842L10.842 0.313965L13.5942 0.313965ZM18.5001 8.89576L19.8886 11.2721L23.9107 8.92212L19.9117 6.53304L18.5001 8.89576ZM13.5942 17.5156H10.842L10.842 20.2678L13.5942 20.2678L13.5942 17.5156ZM16.3465 17.5156L16.3465 20.2678L19.0988 20.2678V17.5156H16.3465ZM23.5491 10.2909V13.0431H26.3014V10.2909H23.5491ZM13.5942 0.313965C13.5942 5.72848 18.0405 10.2909 23.5491 10.2909V4.78638C21.1262 4.78638 19.0988 2.73429 19.0988 0.313965L13.5942 0.313965ZM13.5942 3.06622H16.3465V-2.43829H13.5942V3.06622ZM19.9117 6.53304C17.7639 5.24994 16.3465 2.90021 16.3465 0.313965L10.842 0.313965C10.842 4.92954 13.3584 9.02997 17.0886 11.2585L19.9117 6.53304ZM17.1117 6.51939C13.3569 8.71318 10.842 12.7849 10.842 17.5156H16.3465C16.3465 14.7973 17.7741 12.5075 19.8886 11.2721L17.1117 6.51939ZM13.5942 20.2678L16.3465 20.2678L16.3465 14.7633L13.5942 14.7633L13.5942 20.2678ZM19.0988 17.5156C19.0988 14.9745 21.0743 13.0431 23.5491 13.0431V7.53864C18.0564 7.53864 13.5942 11.9123 13.5942 17.5156H19.0988ZM26.3014 10.2909V7.53864H20.7969V10.2909H26.3014Z"
                      fill="#5A43F0"
                      mask="url(#path-2-inside-1_316_31613)"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="18"
                    viewBox="0 0 75 18"
                    fill="none"
                  >
                    <path
                      d="M74.1221 8.97363L0.499201 8.97364"
                      stroke="#5A43F0"
                      strokeWidth="2.75226"
                      strokeDasharray="5.5 5.5"
                    />
                    <mask id="path-2-inside-1_316_31603" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M74.1224 7.25348C70.1566 7.25348 66.9197 3.94623 66.9197 0.0288086L64.1675 0.0288087C64.1675 3.62972 66.1344 6.8548 69.0734 8.6106C66.1388 10.3252 64.1675 13.5059 64.1675 17.2304L66.9197 17.2304C66.9197 13.1582 70.1386 10.0057 74.1224 10.0057V7.25348Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M74.1224 7.25348C70.1566 7.25348 66.9197 3.94623 66.9197 0.0288086L64.1675 0.0288087C64.1675 3.62972 66.1344 6.8548 69.0734 8.6106C66.1388 10.3252 64.1675 13.5059 64.1675 17.2304L66.9197 17.2304C66.9197 13.1582 70.1386 10.0057 74.1224 10.0057V7.25348Z"
                      fill="#5A43F0"
                    />
                    <path
                      d="M66.9197 0.0288086L69.672 0.0288084L69.672 -2.72345L66.9197 -2.72345L66.9197 0.0288086ZM74.1224 7.25348H76.8746V4.50122H74.1224V7.25348ZM64.1675 0.0288087L64.1675 -2.72345H61.4152L61.4152 0.0288088L64.1675 0.0288087ZM69.0734 8.6106L70.4618 10.987L74.4839 8.63697L70.4849 6.24788L69.0734 8.6106ZM64.1675 17.2304H61.4152L61.4152 19.9827L64.1675 19.9827L64.1675 17.2304ZM66.9197 17.2304L66.9197 19.9827L69.672 19.9827V17.2304L66.9197 17.2304ZM74.1224 10.0057V12.758H76.8746V10.0057H74.1224ZM64.1675 0.0288088C64.1675 5.44333 68.6137 10.0057 74.1224 10.0057V4.50122C71.6994 4.50122 69.672 2.44913 69.672 0.0288084L64.1675 0.0288088ZM64.1675 2.78107L66.9197 2.78107L66.9197 -2.72345L64.1675 -2.72345L64.1675 2.78107ZM70.4849 6.24788C68.3372 4.96478 66.9197 2.61506 66.9197 0.0288086L61.4152 0.0288088C61.4152 4.64438 63.9316 8.74482 67.6618 10.9733L70.4849 6.24788ZM67.6849 6.23424C63.9302 8.42803 61.4152 12.4998 61.4152 17.2304L66.9197 17.2304C66.9197 14.5121 68.3474 12.2224 70.4618 10.987L67.6849 6.23424ZM64.1675 19.9827L66.9197 19.9827L66.9197 14.4782L64.1675 14.4782L64.1675 19.9827ZM69.672 17.2304C69.672 14.6893 71.6475 12.758 74.1224 12.758V7.25348C68.6296 7.25348 64.1675 11.6272 64.1675 17.2304L69.672 17.2304ZM76.8746 10.0057V7.25348H71.3701V10.0057H76.8746Z"
                      fill="#5A43F0"
                      mask="url(#path-2-inside-1_316_31603)"
                    />
                  </svg>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="18"
                      viewBox="0 0 11 18"
                      fill="none"
                    >
                      <mask id="path-1-inside-1_316_31600" fill="white">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.499024 7.96881C4.30338 7.96881 7.47226 4.69711 7.47226 0.744141L10.2245 0.744141C10.2245 4.32685 8.31261 7.56414 5.43412 9.32603C8.30825 11.0466 10.2245 14.2391 10.2245 17.9457L7.47226 17.9457C7.47226 13.8382 4.32111 10.7211 0.499023 10.7211L0.499024 7.96881Z"
                        />
                      </mask>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.499024 7.96881C4.30338 7.96881 7.47226 4.69711 7.47226 0.744141L10.2245 0.744141C10.2245 4.32685 8.31261 7.56414 5.43412 9.32603C8.30825 11.0466 10.2245 14.2391 10.2245 17.9457L7.47226 17.9457C7.47226 13.8382 4.32111 10.7211 0.499023 10.7211L0.499024 7.96881Z"
                        fill="#5A43F0"
                      />
                      <path
                        d="M7.47226 0.744141V-2.00812L4.72001 -2.00812V0.744141H7.47226ZM0.499024 7.96881V5.21656H-2.25323L-2.25323 7.96881H0.499024ZM10.2245 0.744141H12.9768V-2.00812H10.2245V0.744141ZM5.43412 9.32603L3.99729 6.9786L0.119461 9.35217L4.02045 11.6875L5.43412 9.32603ZM10.2245 17.9457L10.2245 20.698L12.9768 20.698V17.9457H10.2245ZM7.47226 17.9457H4.72001V20.698L7.47226 20.698L7.47226 17.9457ZM0.499023 10.7211H-2.25323V13.4733H0.499023V10.7211ZM4.72001 0.744141C4.72001 3.26691 2.69505 5.21656 0.499024 5.21656V10.7211C5.91171 10.7211 10.2245 6.12731 10.2245 0.744141H4.72001ZM10.2245 -2.00812L7.47226 -2.00812V3.4964L10.2245 3.4964V-2.00812ZM6.87095 11.6735C10.5483 9.42261 12.9768 5.30624 12.9768 0.744141H7.47226C7.47226 3.34745 6.07694 5.70567 3.99729 6.9786L6.87095 11.6735ZM4.02045 11.6875C6.06678 12.9125 7.47226 15.2098 7.47226 17.9457H12.9768C12.9768 13.2684 10.5497 9.18072 6.84779 6.96458L4.02045 11.6875ZM10.2245 15.1935L7.47226 15.1935L7.47226 20.698L10.2245 20.698L10.2245 15.1935ZM10.2245 17.9457C10.2245 12.3736 5.89598 7.96881 0.499023 7.96881V13.4733C2.74624 13.4733 4.72001 15.3028 4.72001 17.9457H10.2245ZM-2.25323 7.96881V10.7211H3.25128V7.96881H-2.25323Z"
                        fill="#5A43F0"
                        mask="url(#path-1-inside-1_316_31600)"
                      />
                    </svg>
                    <div className="w-[261px] md:w-[446px] lg:w-[778px] h-[3px] md:h-[5px] bg-Hero-Purple -mx-2 mt-[1px]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                    >
                      <mask id="path-1-inside-1_316_31597" fill="white">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.99991 7.96881C6.19556 7.96881 3.02667 4.69711 3.02667 0.744141L0.274414 0.744141C0.274414 4.32685 2.18632 7.56414 5.06481 9.32603C2.19069 11.0466 0.274415 14.2391 0.274415 17.9457L3.02667 17.9457C3.02667 13.8382 6.17782 10.7211 9.99991 10.7211V7.96881Z"
                        />
                      </mask>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.99991 7.96881C6.19556 7.96881 3.02667 4.69711 3.02667 0.744141L0.274414 0.744141C0.274414 4.32685 2.18632 7.56414 5.06481 9.32603C2.19069 11.0466 0.274415 14.2391 0.274415 17.9457L3.02667 17.9457C3.02667 13.8382 6.17782 10.7211 9.99991 10.7211V7.96881Z"
                        fill="#5A43F0"
                      />
                      <path
                        d="M3.02667 0.744141L5.77893 0.74414V-2.00812L3.02667 -2.00812V0.744141ZM9.99991 7.96881H12.7522V5.21656H9.99991V7.96881ZM0.274414 0.744141L0.274414 -2.00812H-2.47784V0.744141L0.274414 0.744141ZM5.06481 9.32603L6.47848 11.6875L10.3795 9.35217L6.50164 6.9786L5.06481 9.32603ZM0.274415 17.9457H-2.47784L-2.47784 20.698L0.274417 20.698L0.274415 17.9457ZM3.02667 17.9457L3.02667 20.698L5.77893 20.698V17.9457L3.02667 17.9457ZM9.99991 10.7211V13.4733H12.7522V10.7211H9.99991ZM0.274414 0.744141C0.274414 6.12731 4.58722 10.7211 9.99991 10.7211V5.21656C7.80388 5.21656 5.77893 3.26691 5.77893 0.74414L0.274414 0.744141ZM0.274414 3.4964L3.02667 3.4964L3.02667 -2.00812L0.274414 -2.00812L0.274414 3.4964ZM6.50164 6.9786C4.42199 5.70567 3.02667 3.34745 3.02667 0.744141L-2.47784 0.744141C-2.47784 5.30624 -0.0493548 9.42261 3.62798 11.6735L6.50164 6.9786ZM3.65114 6.96458C-0.0507814 9.18072 -2.47784 13.2684 -2.47784 17.9457L3.02667 17.9457C3.02667 15.2098 4.43215 12.9125 6.47848 11.6875L3.65114 6.96458ZM0.274417 20.698L3.02667 20.698L3.02667 15.1935L0.274413 15.1935L0.274417 20.698ZM5.77893 17.9457C5.77893 15.3028 7.7527 13.4733 9.99991 13.4733V7.96881C4.60295 7.96881 0.274414 12.3736 0.274415 17.9457L5.77893 17.9457ZM12.7522 10.7211V7.96881H7.24765V10.7211H12.7522Z"
                        fill="#5A43F0"
                        mask="url(#path-1-inside-1_316_31597)"
                      />
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="18"
                    viewBox="0 0 75 18"
                    fill="none"
                  >
                    <path
                      d="M74.1221 8.97363L0.499201 8.97364"
                      stroke="#5A43F0"
                      strokeWidth="2.75226"
                      strokeDasharray="5.5 5.5"
                    />
                    <mask id="path-2-inside-1_316_31603" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M74.1224 7.25348C70.1566 7.25348 66.9197 3.94623 66.9197 0.0288086L64.1675 0.0288087C64.1675 3.62972 66.1344 6.8548 69.0734 8.6106C66.1388 10.3252 64.1675 13.5059 64.1675 17.2304L66.9197 17.2304C66.9197 13.1582 70.1386 10.0057 74.1224 10.0057V7.25348Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M74.1224 7.25348C70.1566 7.25348 66.9197 3.94623 66.9197 0.0288086L64.1675 0.0288087C64.1675 3.62972 66.1344 6.8548 69.0734 8.6106C66.1388 10.3252 64.1675 13.5059 64.1675 17.2304L66.9197 17.2304C66.9197 13.1582 70.1386 10.0057 74.1224 10.0057V7.25348Z"
                      fill="#5A43F0"
                    />
                    <path
                      d="M66.9197 0.0288086L69.672 0.0288084L69.672 -2.72345L66.9197 -2.72345L66.9197 0.0288086ZM74.1224 7.25348H76.8746V4.50122H74.1224V7.25348ZM64.1675 0.0288087L64.1675 -2.72345H61.4152L61.4152 0.0288088L64.1675 0.0288087ZM69.0734 8.6106L70.4618 10.987L74.4839 8.63697L70.4849 6.24788L69.0734 8.6106ZM64.1675 17.2304H61.4152L61.4152 19.9827L64.1675 19.9827L64.1675 17.2304ZM66.9197 17.2304L66.9197 19.9827L69.672 19.9827V17.2304L66.9197 17.2304ZM74.1224 10.0057V12.758H76.8746V10.0057H74.1224ZM64.1675 0.0288088C64.1675 5.44333 68.6137 10.0057 74.1224 10.0057V4.50122C71.6994 4.50122 69.672 2.44913 69.672 0.0288084L64.1675 0.0288088ZM64.1675 2.78107L66.9197 2.78107L66.9197 -2.72345L64.1675 -2.72345L64.1675 2.78107ZM70.4849 6.24788C68.3372 4.96478 66.9197 2.61506 66.9197 0.0288086L61.4152 0.0288088C61.4152 4.64438 63.9316 8.74482 67.6618 10.9733L70.4849 6.24788ZM67.6849 6.23424C63.9302 8.42803 61.4152 12.4998 61.4152 17.2304L66.9197 17.2304C66.9197 14.5121 68.3474 12.2224 70.4618 10.987L67.6849 6.23424ZM64.1675 19.9827L66.9197 19.9827L66.9197 14.4782L64.1675 14.4782L64.1675 19.9827ZM69.672 17.2304C69.672 14.6893 71.6475 12.758 74.1224 12.758V7.25348C68.6296 7.25348 64.1675 11.6272 64.1675 17.2304L69.672 17.2304ZM76.8746 10.0057V7.25348H71.3701V10.0057H76.8746Z"
                      fill="#5A43F0"
                      mask="url(#path-2-inside-1_316_31603)"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                  >
                    <path
                      d="M23.5493 9.25879L0.499164 9.25879"
                      stroke="#5A43F0"
                      strokeWidth="2.75226"
                      strokeDasharray="5.5 5.5"
                    />
                    <mask id="path-2-inside-1_316_31613" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.5491 7.53864C19.5833 7.53864 16.3465 4.23138 16.3465 0.313965H13.5942C13.5942 3.91487 15.5612 7.13995 18.5001 8.89576C15.5655 10.6104 13.5942 13.7911 13.5942 17.5156L16.3465 17.5156C16.3465 13.4434 19.5653 10.2909 23.5491 10.2909V7.53864Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5491 7.53864C19.5833 7.53864 16.3465 4.23138 16.3465 0.313965H13.5942C13.5942 3.91487 15.5612 7.13995 18.5001 8.89576C15.5655 10.6104 13.5942 13.7911 13.5942 17.5156L16.3465 17.5156C16.3465 13.4434 19.5653 10.2909 23.5491 10.2909V7.53864Z"
                      fill="#5A43F0"
                    />
                    <path
                      d="M16.3465 0.313965L19.0988 0.313965L19.0988 -2.43829H16.3465V0.313965ZM23.5491 7.53864H26.3014V4.78638H23.5491V7.53864ZM13.5942 0.313965V-2.43829H10.842L10.842 0.313965L13.5942 0.313965ZM18.5001 8.89576L19.8886 11.2721L23.9107 8.92212L19.9117 6.53304L18.5001 8.89576ZM13.5942 17.5156H10.842L10.842 20.2678L13.5942 20.2678L13.5942 17.5156ZM16.3465 17.5156L16.3465 20.2678L19.0988 20.2678V17.5156H16.3465ZM23.5491 10.2909V13.0431H26.3014V10.2909H23.5491ZM13.5942 0.313965C13.5942 5.72848 18.0405 10.2909 23.5491 10.2909V4.78638C21.1262 4.78638 19.0988 2.73429 19.0988 0.313965L13.5942 0.313965ZM13.5942 3.06622H16.3465V-2.43829H13.5942V3.06622ZM19.9117 6.53304C17.7639 5.24994 16.3465 2.90021 16.3465 0.313965L10.842 0.313965C10.842 4.92954 13.3584 9.02997 17.0886 11.2585L19.9117 6.53304ZM17.1117 6.51939C13.3569 8.71318 10.842 12.7849 10.842 17.5156H16.3465C16.3465 14.7973 17.7741 12.5075 19.8886 11.2721L17.1117 6.51939ZM13.5942 20.2678L16.3465 20.2678L16.3465 14.7633L13.5942 14.7633L13.5942 20.2678ZM19.0988 17.5156C19.0988 14.9745 21.0743 13.0431 23.5491 13.0431V7.53864C18.0564 7.53864 13.5942 11.9123 13.5942 17.5156H19.0988ZM26.3014 10.2909V7.53864H20.7969V10.2909H26.3014Z"
                      fill="#5A43F0"
                      mask="url(#path-2-inside-1_316_31613)"
                    />
                  </svg>
                </div>
                <div className="bg-Violet rounded-[4px] h-40 md:h-[240px] lg:h-[442px] grid justify-center items-center font-semibold text-white">
                  <p className="-rotate-90 md:text-xl lg:text-[38px]">
                    Funders
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center absolute justify-self-center self-end translate-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="61"
                  viewBox="0 0 18 61"
                  fill="none"
                  className="md:hidden"
                >
                  <path
                    d="M8.37891 60.3799L8.3789 0.862331"
                    stroke="#5A43F0"
                    strokeWidth="2.75226"
                  />
                  <mask id="path-2-inside-1_316_31584" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0991 60.3802C10.0991 56.4144 13.4063 53.1775 17.3237 53.1775L17.3237 50.4253C13.7228 50.4253 10.4977 52.3922 8.74194 55.3312C7.02733 52.3966 3.84659 50.4253 0.122128 50.4253L0.122129 53.1775C4.19431 53.1775 7.3468 56.3964 7.3468 60.3802L10.0991 60.3802Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0991 60.3802C10.0991 56.4144 13.4063 53.1775 17.3237 53.1775L17.3237 50.4253C13.7228 50.4253 10.4977 52.3922 8.74194 55.3312C7.02733 52.3966 3.84659 50.4253 0.122128 50.4253L0.122129 53.1775C4.19431 53.1775 7.3468 56.3964 7.3468 60.3802L10.0991 60.3802Z"
                    fill="#5A43F0"
                  />
                  <path
                    d="M17.3237 53.1775L17.3237 55.9298L20.076 55.9298L20.076 53.1775L17.3237 53.1775ZM10.0991 60.3802L10.0991 63.1324L12.8513 63.1324L12.8513 60.3802L10.0991 60.3802ZM17.3237 50.4253L20.076 50.4253L20.076 47.673L17.3237 47.673L17.3237 50.4253ZM8.74194 55.3312L6.36557 56.7196L8.71557 60.7417L11.1047 56.7427L8.74194 55.3312ZM0.122128 50.4253L0.122128 47.673L-2.63013 47.673L-2.63013 50.4253L0.122128 50.4253ZM0.122129 53.1775L-2.63013 53.1776L-2.63013 55.9298L0.122131 55.9298L0.122129 53.1775ZM7.3468 60.3802L4.59454 60.3802L4.59454 63.1324L7.3468 63.1324L7.3468 60.3802ZM17.3237 50.4253C11.9092 50.4253 7.3468 54.8715 7.3468 60.3802L12.8513 60.3802C12.8513 57.9572 14.9034 55.9298 17.3237 55.9298L17.3237 50.4253ZM14.5715 50.4253L14.5715 53.1775L20.076 53.1775L20.076 50.4253L14.5715 50.4253ZM11.1047 56.7427C12.3878 54.595 14.7375 53.1775 17.3237 53.1775L17.3237 47.673C12.7082 47.673 8.60772 50.1894 6.37921 53.9196L11.1047 56.7427ZM11.1183 53.9427C8.92451 50.188 4.85278 47.673 0.122128 47.673L0.122129 53.1775C2.8404 53.1775 5.13016 54.6052 6.36557 56.7196L11.1183 53.9427ZM-2.63013 50.4253L-2.63013 53.1776L2.87439 53.1775L2.87438 50.4253L-2.63013 50.4253ZM0.122131 55.9298C2.66324 55.9298 4.59454 57.9054 4.59454 60.3802L10.0991 60.3802C10.0991 54.8874 5.72538 50.4253 0.122129 50.4253L0.122131 55.9298ZM7.3468 63.1324L10.0991 63.1324L10.0991 57.6279L7.3468 57.6279L7.3468 63.1324Z"
                    fill="#5A43F0"
                    mask="url(#path-2-inside-1_316_31584)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="100"
                  viewBox="0 0 29 100"
                  fill="none"
                  className="hidden md:block lg:hidden"
                >
                  <path
                    d="M13.8301 99.6807L13.8301 0.473588"
                    stroke="#5A43F0"
                    strokeWidth="4.58761"
                  />
                  <mask id="path-2-inside-1_316_31921" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.6973 99.6802C16.6973 93.0699 22.21 87.6745 28.7397 87.6745L28.7397 83.0869C22.7376 83.0869 17.3618 86.3655 14.4351 91.2643C11.5772 86.3728 6.27532 83.0869 0.0671844 83.0869L0.0671842 87.6745C6.85492 87.6745 12.1097 93.0399 12.1097 99.6802L16.6973 99.6802Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6973 99.6802C16.6973 93.0699 22.21 87.6745 28.7397 87.6745L28.7397 83.0869C22.7376 83.0869 17.3618 86.3655 14.4351 91.2643C11.5772 86.3728 6.27532 83.0869 0.0671844 83.0869L0.0671842 87.6745C6.85492 87.6745 12.1097 93.0399 12.1097 99.6802L16.6973 99.6802Z"
                    fill="#5A43F0"
                  />
                  <path
                    d="M28.7397 87.6745L28.7397 92.2621L33.3274 92.2621L33.3274 87.6745L28.7397 87.6745ZM16.6973 99.6802L16.6973 104.268L21.2849 104.268L21.2849 99.6802L16.6973 99.6802ZM28.7397 83.0869L33.3274 83.0869L33.3274 78.4993L28.7397 78.4993L28.7397 83.0869ZM14.4351 91.2643L10.4741 93.5786L14.3912 100.283L18.3735 93.6171L14.4351 91.2643ZM0.0671844 83.0869L0.0671846 78.4993L-4.52043 78.4993L-4.52043 83.0869L0.0671844 83.0869ZM0.0671842 87.6745L-4.52043 87.6745L-4.52043 92.2621L0.067184 92.2621L0.0671842 87.6745ZM12.1097 99.6802L7.52205 99.6802L7.52205 104.268L12.1097 104.268L12.1097 99.6802ZM28.7397 83.0869C19.7145 83.0869 12.1097 90.4981 12.1097 99.6802L21.2849 99.6802C21.2849 95.6416 24.7054 92.2621 28.7397 92.2621L28.7397 83.0869ZM24.1521 83.0869L24.1521 87.6745L33.3274 87.6745L33.3274 83.0869L24.1521 83.0869ZM18.3735 93.6171C20.5122 90.0372 24.4288 87.6745 28.7397 87.6745L28.7397 78.4993C21.0463 78.4993 14.2114 82.6938 10.4968 88.9115L18.3735 93.6171ZM18.3962 88.95C14.7395 82.6914 7.95249 78.4993 0.0671846 78.4993L0.0671842 87.6745C4.59815 87.6745 8.41484 90.0542 10.4741 93.5786L18.3962 88.95ZM-4.52043 83.0869L-4.52043 87.6745L4.65479 87.6745L4.65479 83.0869L-4.52043 83.0869ZM0.067184 92.2621C4.30284 92.2621 7.52205 95.5551 7.52205 99.6802L16.6973 99.6802C16.6973 90.5247 9.40699 83.0869 0.0671844 83.0869L0.067184 92.2621ZM12.1097 104.268L16.6973 104.268L16.6973 95.0926L12.1097 95.0926L12.1097 104.268Z"
                    fill="#5A43F0"
                    mask="url(#path-2-inside-1_316_31921)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="174"
                  viewBox="0 0 50 174"
                  fill="none"
                  className="hidden lg:block"
                >
                  <path
                    d="M24 173.499L24 0.499016"
                    stroke="#5A43F0"
                    strokeWidth="8"
                  />
                  <mask id="path-2-inside-1_182_29523" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29 173.499C29 161.972 38.6132 152.563 50 152.563L50 144.563C39.5332 144.563 30.1589 150.281 25.0553 158.823C20.0714 150.293 10.8259 144.563 1.14441e-05 144.563L1.10944e-05 152.563C11.8366 152.563 21 161.92 21 173.499L29 173.499Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29 173.499C29 161.972 38.6132 152.563 50 152.563L50 144.563C39.5332 144.563 30.1589 150.281 25.0553 158.823C20.0714 150.293 10.8259 144.563 1.14441e-05 144.563L1.10944e-05 152.563C11.8366 152.563 21 161.92 21 173.499L29 173.499Z"
                    fill="#5A43F0"
                  />
                  <path
                    d="M50 152.563L50 160.563L58 160.563L58 152.563L50 152.563ZM29 173.499L29 181.499L37 181.499L37 173.499L29 173.499ZM50 144.563L58 144.563L58 136.563L50 136.563L50 144.563ZM25.0553 158.823L18.1479 162.859L24.9786 174.55L31.923 162.926L25.0553 158.823ZM1.14441e-05 144.563L1.17938e-05 136.563L-7.99999 136.563L-7.99999 144.563L1.14441e-05 144.563ZM1.10944e-05 152.563L-7.99999 152.563L-7.99999 160.563L1.07447e-05 160.563L1.10944e-05 152.563ZM21 173.499L13 173.499L13 181.499L21 181.499L21 173.499ZM50 144.563C34.2616 144.563 21 157.487 21 173.499L37 173.499C37 166.457 42.9648 160.563 50 160.563L50 144.563ZM42 144.563L42 152.563L58 152.563L58 144.563L42 144.563ZM31.923 162.926C35.6526 156.684 42.4825 152.563 50 152.563L50 136.563C36.5839 136.563 24.6651 143.878 18.1875 154.72L31.923 162.926ZM31.9627 154.788C25.5859 143.874 13.7506 136.563 1.17938e-05 136.563L1.10944e-05 152.563C7.90123 152.563 14.5569 156.713 18.1479 162.859L31.9627 154.788ZM-7.99999 144.563L-7.99999 152.563L8.00001 152.563L8.00001 144.563L-7.99999 144.563ZM1.07447e-05 160.563C7.38626 160.563 13 166.306 13 173.499L29 173.499C29 157.534 16.287 144.563 1.14441e-05 144.563L1.07447e-05 160.563ZM29 165.499L21 165.499L21 181.499L29 181.499L29 165.499Z"
                    fill="#5A43F0"
                    mask="url(#path-2-inside-1_182_29523)"
                  />
                </svg>
                <div className="grid justify-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="92"
                    viewBox="0 0 18 92"
                    fill="none"
                    className="md:hidden"
                  >
                    <path
                      d="M8.98389 91.3804L8.98389 68.3302"
                      stroke="#5A43F0"
                      strokeWidth="2.75226"
                    />
                    <mask id="path-2-inside-1_316_31576" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.704 91.3802C10.704 87.4144 14.0113 84.1775 17.9287 84.1775L17.9287 81.4253C14.3278 81.4253 11.1027 83.3922 9.34692 86.3312C7.63231 83.3966 4.45157 81.4253 0.727108 81.4253L0.72711 84.1775C4.79929 84.1775 7.95178 87.3964 7.95178 91.3802L10.704 91.3802Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.704 91.3802C10.704 87.4144 14.0113 84.1775 17.9287 84.1775L17.9287 81.4253C14.3278 81.4253 11.1027 83.3922 9.34692 86.3312C7.63231 83.3966 4.45157 81.4253 0.727108 81.4253L0.72711 84.1775C4.79929 84.1775 7.95178 87.3964 7.95178 91.3802L10.704 91.3802Z"
                      fill="#5A43F0"
                    />
                    <path
                      d="M17.9287 84.1775L17.9287 86.9298L20.681 86.9298L20.681 84.1775L17.9287 84.1775ZM10.704 91.3802L10.704 94.1324L13.4563 94.1324L13.4563 91.3802L10.704 91.3802ZM17.9287 81.4253L20.681 81.4253L20.681 78.673L17.9287 78.673L17.9287 81.4253ZM9.34692 86.3312L6.97055 87.7196L9.32055 91.7417L11.7096 87.7427L9.34692 86.3312ZM0.727108 81.4253L0.727108 78.673L-2.02515 78.673L-2.02515 81.4253L0.727108 81.4253ZM0.72711 84.1775L-2.02515 84.1776L-2.02514 86.9298L0.727112 86.9298L0.72711 84.1775ZM7.95178 91.3802L5.19952 91.3802L5.19952 94.1324L7.95178 94.1324L7.95178 91.3802ZM17.9287 81.4253C12.5142 81.4253 7.95178 85.8715 7.95178 91.3802L13.4563 91.3802C13.4563 88.9572 15.5084 86.9298 17.9287 86.9298L17.9287 81.4253ZM15.1765 81.4253L15.1765 84.1775L20.681 84.1775L20.681 81.4253L15.1765 81.4253ZM11.7096 87.7427C12.9927 85.595 15.3425 84.1775 17.9287 84.1775L17.9287 78.673C13.3131 78.673 9.2127 81.1894 6.98419 84.9196L11.7096 87.7427ZM11.7233 84.9427C9.52949 81.188 5.45776 78.673 0.727108 78.673L0.72711 84.1775C3.44538 84.1775 5.73514 85.6052 6.97055 87.7196L11.7233 84.9427ZM-2.02515 81.4253L-2.02515 84.1776L3.47937 84.1775L3.47937 81.4253L-2.02515 81.4253ZM0.727112 86.9298C3.26822 86.9298 5.19952 88.9054 5.19952 91.3802L10.704 91.3802C10.704 85.8874 6.33036 81.4253 0.72711 81.4253L0.727112 86.9298ZM7.95178 94.1324L10.704 94.1324L10.704 88.6279L7.95178 88.6279L7.95178 94.1324Z"
                      fill="#5A43F0"
                      mask="url(#path-2-inside-1_316_31576)"
                    />
                    <path
                      d="M8.98389 38.0552L8.98389 0.55568"
                      stroke="#5A43F0"
                      strokeWidth="2.75226"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="152"
                    viewBox="0 0 29 152"
                    fill="none"
                    className="hidden md:block"
                  >
                    <path
                      d="M13.8472 151.681L13.8472 113.26"
                      stroke="#5A43F0"
                      strokeWidth="4.58761"
                    />
                    <mask id="path-2-inside-1_316_31913" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.7148 151.681C16.7148 145.07 22.2276 139.675 28.7573 139.675L28.7573 135.087C22.7551 135.087 17.3794 138.366 14.4527 143.265C11.5947 138.373 6.2929 135.087 0.0847626 135.087L0.0847624 139.675C6.87249 139.675 12.1272 145.04 12.1272 151.681L16.7148 151.681Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7148 151.681C16.7148 145.07 22.2276 139.675 28.7573 139.675L28.7573 135.087C22.7551 135.087 17.3794 138.366 14.4527 143.265C11.5947 138.373 6.2929 135.087 0.0847626 135.087L0.0847624 139.675C6.87249 139.675 12.1272 145.04 12.1272 151.681L16.7148 151.681Z"
                      fill="#5A43F0"
                    />
                    <path
                      d="M28.7573 139.675L28.7573 144.263L33.3449 144.263L33.3449 139.675L28.7573 139.675ZM16.7148 151.681L16.7148 156.268L21.3025 156.268L21.3025 151.681L16.7148 151.681ZM28.7573 135.087L33.3449 135.087L33.3449 130.5L28.7573 130.5L28.7573 135.087ZM14.4527 143.265L10.4917 145.579L14.4088 152.283L18.391 145.618L14.4527 143.265ZM0.0847626 135.087L0.0847628 130.5L-4.50285 130.5L-4.50285 135.087L0.0847626 135.087ZM0.0847624 139.675L-4.50285 139.675L-4.50285 144.263L0.0847622 144.263L0.0847624 139.675ZM12.1272 151.681L7.53963 151.681L7.53963 156.268L12.1272 156.268L12.1272 151.681ZM28.7573 135.087C19.7321 135.087 12.1272 142.499 12.1272 151.681L21.3025 151.681C21.3025 147.642 24.723 144.263 28.7573 144.263L28.7573 135.087ZM24.1697 135.087L24.1697 139.675L33.3449 139.675L33.3449 135.087L24.1697 135.087ZM18.391 145.618C20.5298 142.038 24.4464 139.675 28.7573 139.675L28.7573 130.5C21.0638 130.5 14.229 134.694 10.5144 140.912L18.391 145.618ZM18.4138 140.95C14.757 134.692 7.97007 130.5 0.0847628 130.5L0.0847624 139.675C4.61573 139.675 8.43242 142.055 10.4917 145.579L18.4138 140.95ZM-4.50285 135.087L-4.50285 139.675L4.67237 139.675L4.67237 135.087L-4.50285 135.087ZM0.0847622 144.263C4.32042 144.263 7.53963 147.556 7.53963 151.681L16.7148 151.681C16.7148 142.525 9.42457 135.087 0.0847626 135.087L0.0847622 144.263ZM12.1272 156.268L16.7148 156.268L16.7148 147.093L12.1272 147.093L12.1272 156.268Z"
                      fill="#5A43F0"
                      mask="url(#path-2-inside-1_316_31913)"
                    />
                    <path
                      d="M13.8477 62.7964L13.8477 0.290192"
                      stroke="#5A43F0"
                      strokeWidth="4.58761"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="13"
                    viewBox="0 0 68 13"
                    fill="none"
                    className="-translate-y-12 md:hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50.4705 0.142578H48.244V2.502H50.4705V0.142578ZM15.6748 0.155118H13.6738V11.9417H15.6748V0.155118ZM43.4604 3.4082C41.3725 3.4082 39.7486 4.64395 39.6128 6.34163L39.5979 6.52767H41.4889L41.5001 6.36599C41.5485 5.66793 42.3022 5.00758 43.4181 5.00758C44.0495 5.00758 44.5166 5.16628 44.8233 5.42123C45.1274 5.67402 45.2933 6.03736 45.2933 6.48802C45.2933 6.60047 45.2591 6.66891 45.211 6.7111C45.1607 6.75513 45.0672 6.79505 44.8982 6.79505H43.122C42.0855 6.79505 41.2131 7.04175 40.5959 7.506C39.974 7.97367 39.6264 8.65118 39.6264 9.47484C39.6264 10.2412 39.9353 10.8959 40.4822 11.3573C41.0274 11.8173 41.7959 12.0746 42.6991 12.0746C43.8393 12.0746 45.024 11.6281 45.5738 10.9098C45.5738 11.1084 45.5738 11.7043 45.5738 11.9029H47.2943V10.1019V6.56802C47.2943 5.62729 46.9104 4.8319 46.2303 4.27389C45.5526 3.71779 44.5942 3.4082 43.4604 3.4082ZM43.0233 10.4886C42.5834 10.4886 42.2287 10.3737 41.9879 10.1889C41.7502 10.0064 41.6133 9.74898 41.6133 9.43484C41.6133 9.05985 41.772 8.76379 42.0492 8.5574C42.331 8.34767 42.749 8.22109 43.2771 8.22109H45.2933V8.23477C45.2933 8.94921 45.0779 9.50922 44.6982 9.8894C44.32 10.2683 43.7588 10.4886 43.0233 10.4886ZM33.4796 6.89016H26.5025V8.3562H33.4796V6.89016ZM50.3579 3.52803H48.3569V11.9278H50.3579V3.52803ZM54.6285 4.98117C54.9658 4.98117 55.3495 5.06777 55.6572 5.25528C55.9603 5.44003 56.1879 5.72052 56.2372 6.12151L56.2559 6.27458H58.1481L58.138 6.09249C58.093 5.28384 57.7162 4.60463 57.0939 4.13013C56.4739 3.65736 55.6203 3.39513 54.6285 3.39513C53.7079 3.39513 52.9072 3.63699 52.3325 4.07325C51.7548 4.51184 51.4148 5.14096 51.4148 5.88824C51.4148 6.79247 51.7359 7.36864 52.2412 7.73902C52.7329 8.09949 53.3772 8.24757 53.983 8.3503C54.1262 8.37459 54.2693 8.3966 54.4087 8.41806L54.4092 8.41814L54.4368 8.4224C54.5857 8.44532 54.7302 8.46774 54.8697 8.49219C55.1498 8.54129 55.4001 8.59705 55.6098 8.67598C55.819 8.75474 55.9762 8.85235 56.0817 8.97851C56.1847 9.10178 56.25 9.26636 56.25 9.50176C56.25 9.95173 55.7615 10.4221 54.8258 10.4221C54.3064 10.4221 53.8991 10.2963 53.6115 10.0784C53.3261 9.86215 53.1419 9.54266 53.0903 9.12182L53.0716 8.96875H51.1774L51.1896 9.15262C51.2489 10.0424 51.6323 10.7747 52.2732 11.2827C52.912 11.7892 53.7918 12.0615 54.8258 12.0615C55.8552 12.0615 56.7001 11.8183 57.2914 11.3664C57.887 10.9113 58.2087 10.2571 58.2087 9.47509C58.2087 8.51494 57.8889 7.89952 57.3824 7.50371C56.887 7.11658 56.2374 6.96018 55.6249 6.86111C55.4399 6.83118 55.25 6.80541 55.0675 6.78063C54.9508 6.76478 54.837 6.74932 54.7294 6.73346C54.4462 6.69169 54.1933 6.64545 53.9811 6.57737C53.7687 6.50923 53.6121 6.4238 53.5085 6.31288C53.4089 6.2062 53.3453 6.06199 53.3453 5.84824C53.3453 5.59235 53.4636 5.3826 53.6771 5.23182C53.8949 5.07799 54.2199 4.98117 54.6285 4.98117ZM63.1426 10.3955C63.7443 10.3955 64.2209 10.2707 64.571 10.051C64.9177 9.83336 65.1527 9.51494 65.2624 9.10185L65.297 8.95542H67.2779L67.2417 9.1573C66.9276 10.912 65.2972 12.0482 63.1285 12.0482C60.3754 12.0482 58.6743 10.0081 58.6743 7.675C58.6743 6.5134 59.0559 5.44351 59.79 4.66164C60.5266 3.87719 61.6067 3.39513 62.9734 3.39513C64.3376 3.39513 65.3996 3.85543 66.1193 4.59429C66.8369 5.33091 67.2021 6.33159 67.2021 7.39499C67.2021 7.61373 67.1877 7.87231 67.1731 8.02402L67.158 8.18134H60.6813C60.8687 9.52264 61.8339 10.3955 63.1426 10.3955ZM62.9734 4.99451C63.6402 4.99451 64.164 5.18619 64.5316 5.50984C64.8596 5.7986 65.0759 6.20349 65.1519 6.70197H60.745C60.8804 6.15903 61.1261 5.75191 61.4608 5.47302C61.835 5.16127 62.3388 4.99451 62.9734 4.99451ZM21.0465 10.4234C20.2839 10.4234 19.6538 10.1549 19.2131 9.69952C18.7712 9.24291 18.5087 8.58675 18.5087 7.79622C18.5087 7.0057 18.7712 6.34955 19.2131 5.89294C19.6538 5.43761 20.2839 5.16907 21.0465 5.16907C21.8089 5.16907 22.4352 5.4375 22.8724 5.89246C23.3108 6.34889 23.5701 7.00511 23.5701 7.79622C23.5701 8.58676 23.3077 9.24306 22.8673 9.69975C22.4281 10.1551 21.8015 10.4234 21.0465 10.4234ZM21.0465 3.46302C18.394 3.46302 16.4654 5.28723 16.4654 7.79622C16.4654 10.3052 18.394 12.1294 21.0465 12.1294C23.6998 12.1294 25.6134 10.3045 25.6134 7.79622C25.6134 5.28834 23.7143 3.46302 21.0465 3.46302ZM39.3299 3.52803H34.1995V11.9411H36.2145V5.38076H39.3299V3.52803ZM12.4903 6.20967H6.33066V8.1824H9.75669C9.17185 9.49143 7.94764 10.3165 6.37258 10.3165C4.22787 10.3165 2.4533 8.56342 2.4533 6.36932C2.4533 4.17523 4.22787 2.4221 6.37258 2.4221C7.23736 2.4221 7.9453 2.61807 8.51996 3.00655C9.09566 3.39574 9.55281 3.98846 9.89595 4.80638L9.89884 4.81328L9.9811 4.9689H12.2173L12.1312 4.64292L12.1298 4.63862C11.8351 3.72748 11.3211 2.71597 10.4131 1.93137C9.50118 1.14345 8.20522 0.596121 6.37297 0.596043C3.00035 0.582495 0.269043 3.1811 0.269043 6.36932C0.269043 9.55836 3.00112 12.1426 6.37258 12.1426C7.83118 12.1426 9.22113 11.5771 10.1601 10.5781C10.3926 10.3327 10.5859 10.0583 10.7501 9.76845L10.9403 11.6977V11.9425H12.4903V6.20967Z"
                      fill="#051C09"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="128"
                    height="25"
                    viewBox="0 0 128 25"
                    fill="none"
                    className="-translate-y-20 hidden md:block lg:hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M94.6439 0.834961H90.4462V5.5538H94.6439V0.834961ZM29.0441 0.860041H25.2717V24.4332H29.0441V0.860041ZM81.4277 7.36621C77.4916 7.36621 74.43 9.8377 74.174 13.2331L74.1459 13.6051H77.7109L77.7321 13.2818C77.8234 11.8857 79.2442 10.565 81.348 10.565C82.5385 10.565 83.419 10.8824 83.9972 11.3923C84.5706 11.8978 84.8834 12.6245 84.8834 13.5258C84.8834 13.7507 84.8188 13.8876 84.7281 13.972C84.6334 14.0601 84.4571 14.1399 84.1384 14.1399H80.7898C78.8357 14.1399 77.1911 14.6333 76.0274 15.5618C74.8551 16.4971 74.1996 17.8522 74.1996 19.4995C74.1996 21.0323 74.7821 22.3417 75.8131 23.2645C76.841 24.1844 78.2897 24.6991 79.9925 24.6991C82.1421 24.6991 84.3757 23.8061 85.4121 22.3694C85.4121 22.7666 85.4121 23.9584 85.4121 24.3557H88.6558V20.7536V13.6858C88.6558 11.8044 87.932 10.2136 86.6499 9.09759C85.3722 7.9854 83.5654 7.36621 81.4277 7.36621ZM80.6038 21.527C79.7744 21.527 79.1057 21.2973 78.6518 20.9275C78.2036 20.5627 77.9455 20.0478 77.9455 19.4195C77.9455 18.6695 78.2446 18.0774 78.7673 17.6646C79.2985 17.2451 80.0867 16.992 81.0822 16.992H84.8834V17.0193C84.8834 18.4482 84.4772 19.5683 83.7615 20.3286C83.0485 21.0864 81.9903 21.527 80.6038 21.527ZM62.6113 14.3301H49.4575V17.2622H62.6113V14.3301ZM94.4315 7.60586H90.659V24.4053H94.4315V7.60586ZM102.483 10.5122C103.119 10.5122 103.842 10.6853 104.422 11.0604C104.994 11.4299 105.423 11.9908 105.516 12.7928L105.551 13.099H109.118L109.099 12.7348C109.014 11.1175 108.304 9.75906 107.131 8.81007C105.962 7.86453 104.353 7.34007 102.483 7.34007C100.747 7.34007 99.2376 7.82379 98.1542 8.6963C97.0651 9.57349 96.4241 10.8317 96.4241 12.3263C96.4241 14.1347 97.0294 15.2871 97.982 16.0278C98.909 16.7488 100.124 17.0449 101.266 17.2504C101.536 17.299 101.806 17.343 102.068 17.3859L102.069 17.3861L102.121 17.3946C102.402 17.4405 102.675 17.4853 102.937 17.5342C103.466 17.6324 103.937 17.7439 104.333 17.9018C104.727 18.0593 105.024 18.2545 105.222 18.5068C105.417 18.7534 105.54 19.0825 105.54 19.5533C105.54 20.4533 104.619 21.3941 102.855 21.3941C101.876 21.3941 101.108 21.1425 100.566 20.7066C100.027 20.2741 99.6802 19.6351 99.5829 18.7934L99.5477 18.4873H95.9765L95.9996 18.8551C96.1113 20.6346 96.8342 22.0991 98.0423 23.1153C99.2467 24.1282 100.905 24.6728 102.855 24.6728C104.795 24.6728 106.388 24.1864 107.503 23.2827C108.626 22.3724 109.233 21.064 109.233 19.5C109.233 17.5797 108.63 16.3489 107.675 15.5572C106.741 14.783 105.516 14.4702 104.361 14.272C104.013 14.2122 103.654 14.1606 103.311 14.1111C103.09 14.0794 102.876 14.0484 102.673 14.0167C102.139 13.9332 101.662 13.8407 101.262 13.7046C100.862 13.5683 100.567 13.3974 100.371 13.1756C100.183 12.9622 100.064 12.6738 100.064 12.2463C100.064 11.7345 100.287 11.315 100.689 11.0134C101.1 10.7058 101.713 10.5122 102.483 10.5122ZM118.534 21.3407C119.669 21.3407 120.567 21.0912 121.227 20.6518C121.881 20.2165 122.324 19.5797 122.531 18.7535L122.596 18.4606H126.33L126.262 18.8644C125.67 22.3737 122.596 24.6461 118.508 24.6461C113.317 24.6461 110.11 20.5659 110.11 15.8998C110.11 13.5766 110.83 11.4368 112.214 9.87309C113.602 8.30418 115.639 7.34007 118.215 7.34007C120.787 7.34007 122.789 8.26066 124.146 9.73838C125.499 11.2116 126.188 13.213 126.188 15.3398C126.188 15.7773 126.16 16.2944 126.133 16.5978L126.104 16.9125H113.894C114.247 19.5951 116.067 21.3407 118.534 21.3407ZM118.215 10.5388C119.472 10.5388 120.46 10.9222 121.153 11.5695C121.771 12.147 122.179 12.9568 122.322 13.9537H114.014C114.269 12.8679 114.733 12.0536 115.364 11.4959C116.069 10.8723 117.019 10.5388 118.215 10.5388ZM39.1713 21.3966C37.7337 21.3966 36.5457 20.8595 35.7149 19.9489C34.8817 19.0356 34.3869 17.7233 34.3869 16.1423C34.3869 14.5612 34.8817 13.2489 35.7149 12.3357C36.5457 11.425 37.7337 10.888 39.1713 10.888C40.6086 10.888 41.7895 11.4248 42.6136 12.3347C43.4402 13.2476 43.9291 14.56 43.9291 16.1423C43.9291 17.7233 43.4343 19.0359 42.604 19.9493C41.776 20.8601 40.5948 21.3966 39.1713 21.3966ZM39.1713 7.47585C34.1706 7.47585 30.5347 11.1243 30.5347 16.1423C30.5347 21.1602 34.1706 24.8087 39.1713 24.8087C44.1735 24.8087 47.7813 21.1589 47.7813 16.1423C47.7813 11.1265 44.2008 7.47585 39.1713 7.47585ZM73.6407 7.60586H63.9683V24.432H67.7672V11.3113H73.6407V7.60586ZM23.0404 12.9691H11.4278V16.9146H17.8869C16.7843 19.5327 14.4763 21.1828 11.5069 21.1828C7.46349 21.1828 4.11793 17.6766 4.11793 13.2885C4.11793 8.90027 7.46349 5.39401 11.5069 5.39401C13.1372 5.39401 14.4719 5.78595 15.5553 6.56291C16.6406 7.34128 17.5025 8.52673 18.1494 10.1626L18.1549 10.1764L18.3099 10.4876H22.5258L22.3634 9.83565L22.3609 9.82705C21.8053 8.00476 20.8363 5.98175 19.1243 4.41255C17.4052 2.83671 14.9619 1.74205 11.5076 1.74189C5.14929 1.71479 0 6.912 0 13.2885C0 19.6665 5.15073 24.835 11.5069 24.835C14.2568 24.835 16.8772 23.704 18.6474 21.706C19.0858 21.2151 19.4502 20.6664 19.7597 20.0867L20.1183 23.9452V24.4349H23.0404V12.9691Z"
                      fill="#051C09"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="196"
                    height="38"
                    viewBox="0 0 196 38"
                    fill="none"
                    className="-translate-y-20 hidden lg:block"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M145.921 0.600586H139.449V7.87604H145.921V0.600586ZM44.78 0.639255H38.9636V36.9841H44.78V0.639255ZM125.544 10.6704C119.476 10.6704 114.755 14.4809 114.361 19.7159L114.317 20.2895H119.814L119.847 19.791C119.987 17.6384 122.178 15.6022 125.421 15.6022C127.257 15.6022 128.615 16.0916 129.506 16.8777C130.39 17.6572 130.872 18.7776 130.872 20.1673C130.872 20.514 130.773 20.7251 130.633 20.8552C130.487 20.9909 130.215 21.114 129.724 21.114H124.561C121.548 21.114 119.012 21.8747 117.218 23.3063C115.411 24.7484 114.4 26.8375 114.4 29.3774C114.4 31.7406 115.298 33.7594 116.888 35.1822C118.473 36.6006 120.706 37.3941 123.332 37.3941C126.646 37.3941 130.09 36.0172 131.688 33.8021C131.688 34.4146 131.688 36.2521 131.688 36.8646H136.689V31.3109V20.4139C136.689 17.5131 135.573 15.0605 133.596 13.3398C131.626 11.625 128.84 10.6704 125.544 10.6704ZM124.274 32.5034C122.995 32.5034 121.964 32.1491 121.264 31.5791C120.573 31.0165 120.176 30.2227 120.176 29.254C120.176 28.0977 120.637 27.1848 121.443 26.5483C122.262 25.9016 123.477 25.5113 125.012 25.5113H130.872V25.5535C130.872 27.7565 130.246 29.4834 129.143 30.6557C128.043 31.824 126.412 32.5034 124.274 32.5034ZM96.5334 21.4073H76.253V25.9279H96.5334V21.4073ZM145.593 11.0399H139.777V36.9411H145.593V11.0399ZM158.007 15.5208C158.987 15.5208 160.103 15.7878 160.997 16.366C161.878 16.9357 162.54 17.8006 162.683 19.0371L162.737 19.5091H168.237L168.208 18.9476C168.077 16.4541 166.982 14.3597 165.173 12.8965C163.371 11.4387 160.89 10.6301 158.007 10.6301C155.331 10.6301 153.004 11.3759 151.333 12.7211C149.654 14.0736 148.666 16.0135 148.666 18.3178C148.666 21.106 149.599 22.8827 151.068 24.0248C152.497 25.1363 154.37 25.593 156.131 25.9098C156.547 25.9846 156.963 26.0525 157.368 26.1187L157.37 26.1189L157.45 26.1321C157.883 26.2028 158.303 26.2719 158.708 26.3473C159.522 26.4987 160.25 26.6706 160.859 26.914C161.467 27.1569 161.924 27.4578 162.231 27.8469C162.53 28.227 162.72 28.7345 162.72 29.4604C162.72 30.8479 161.3 32.2984 158.581 32.2984C157.071 32.2984 155.887 31.9105 155.051 31.2385C154.221 30.5717 153.686 29.5865 153.536 28.2888L153.482 27.8168H147.976L148.011 28.3838C148.183 31.1274 149.298 33.3854 151.161 34.9522C153.017 36.5138 155.575 37.3535 158.581 37.3535C161.573 37.3535 164.028 36.6035 165.747 35.2102C167.479 33.8068 168.414 31.7895 168.414 29.3781C168.414 26.4174 167.484 24.5197 166.012 23.2992C164.572 22.1055 162.683 21.6232 160.903 21.3177C160.365 21.2254 159.813 21.1459 159.283 21.0695C158.944 21.0207 158.613 20.973 158.3 20.9241C157.477 20.7953 156.742 20.6527 156.125 20.4428C155.508 20.2327 155.052 19.9692 154.751 19.6272C154.462 19.2982 154.277 18.8535 154.277 18.1944C154.277 17.4054 154.621 16.7586 155.242 16.2937C155.875 15.8193 156.819 15.5208 158.007 15.5208ZM182.755 32.2162C184.504 32.2162 185.889 31.8315 186.907 31.1539C187.915 30.4829 188.598 29.501 188.916 28.2272L189.017 27.7757H194.775L194.67 28.3982C193.757 33.8088 189.018 37.3124 182.714 37.3124C174.711 37.3124 169.767 31.0216 169.767 23.8274C169.767 20.2455 170.876 16.9464 173.01 14.5355C175.151 12.1166 178.29 10.6301 182.263 10.6301C186.229 10.6301 189.315 12.0495 191.407 14.3278C193.493 16.5992 194.555 19.6849 194.555 22.964C194.555 23.6385 194.513 24.4358 194.47 24.9036L194.426 25.3888H175.601C176.145 29.5247 178.951 32.2162 182.755 32.2162ZM182.263 15.5619C184.201 15.5619 185.724 16.153 186.792 17.151C187.746 18.0414 188.375 19.2899 188.595 20.827H175.786C176.179 19.1528 176.894 17.8974 177.866 17.0374C178.954 16.0761 180.418 15.5619 182.263 15.5619ZM60.3938 32.3023C58.1774 32.3023 56.3458 31.4742 55.0648 30.0702C53.7802 28.6622 53.0173 26.6389 53.0173 24.2012C53.0173 21.7636 53.7802 19.7403 55.0648 18.3323C56.3458 16.9282 58.1774 16.1002 60.3938 16.1002C62.61 16.1002 64.4306 16.9279 65.7012 18.3308C66.9757 19.7382 67.7294 21.7617 67.7294 24.2012C67.7294 26.6389 66.9665 28.6626 65.6864 30.0709C64.4098 31.4751 62.5886 32.3023 60.3938 32.3023ZM60.3938 10.8394C52.6839 10.8394 47.0781 16.4645 47.0781 24.2012C47.0781 31.9379 52.6839 37.563 60.3938 37.563C68.1062 37.563 73.6686 31.9358 73.6686 24.2012C73.6686 16.4679 68.1484 10.8394 60.3938 10.8394ZM113.538 11.0399H98.6257V36.9823H104.483V16.7529H113.538V11.0399ZM35.5235 19.3089H17.6193V25.392H27.5778C25.8778 29.4285 22.3194 31.9727 17.7412 31.9727C11.5071 31.9727 6.34899 26.5669 6.34899 19.8013C6.34899 13.0356 11.5071 7.62968 17.7412 7.62968C20.2548 7.62968 22.3126 8.23397 23.983 9.43188C25.6564 10.632 26.9852 12.4597 27.9826 14.9818L27.991 15.0031L28.2301 15.4829H34.73L34.4797 14.4778L34.4758 14.4645C33.6191 11.6549 32.1252 8.53584 29.4857 6.11648C26.8351 3.68687 23.0681 1.99912 17.7423 1.99888C7.93912 1.9571 0 9.97011 0 19.8013C0 29.6349 7.94134 37.6035 17.7412 37.6035C21.9809 37.6035 26.0211 35.8598 28.7503 32.7794C29.4263 32.0225 29.9881 31.1766 30.4652 30.2827L31.0182 36.2317V36.9867H35.5235V19.3089Z"
                      fill="#051C09"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="61"
                  viewBox="0 0 18 61"
                  fill="none"
                  className="md:hidden"
                >
                  <path
                    d="M8.37891 60.3799L8.3789 0.862331"
                    stroke="#5A43F0"
                    strokeWidth="2.75226"
                  />
                  <mask id="path-2-inside-1_316_31584" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0991 60.3802C10.0991 56.4144 13.4063 53.1775 17.3237 53.1775L17.3237 50.4253C13.7228 50.4253 10.4977 52.3922 8.74194 55.3312C7.02733 52.3966 3.84659 50.4253 0.122128 50.4253L0.122129 53.1775C4.19431 53.1775 7.3468 56.3964 7.3468 60.3802L10.0991 60.3802Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0991 60.3802C10.0991 56.4144 13.4063 53.1775 17.3237 53.1775L17.3237 50.4253C13.7228 50.4253 10.4977 52.3922 8.74194 55.3312C7.02733 52.3966 3.84659 50.4253 0.122128 50.4253L0.122129 53.1775C4.19431 53.1775 7.3468 56.3964 7.3468 60.3802L10.0991 60.3802Z"
                    fill="#5A43F0"
                  />
                  <path
                    d="M17.3237 53.1775L17.3237 55.9298L20.076 55.9298L20.076 53.1775L17.3237 53.1775ZM10.0991 60.3802L10.0991 63.1324L12.8513 63.1324L12.8513 60.3802L10.0991 60.3802ZM17.3237 50.4253L20.076 50.4253L20.076 47.673L17.3237 47.673L17.3237 50.4253ZM8.74194 55.3312L6.36557 56.7196L8.71557 60.7417L11.1047 56.7427L8.74194 55.3312ZM0.122128 50.4253L0.122128 47.673L-2.63013 47.673L-2.63013 50.4253L0.122128 50.4253ZM0.122129 53.1775L-2.63013 53.1776L-2.63013 55.9298L0.122131 55.9298L0.122129 53.1775ZM7.3468 60.3802L4.59454 60.3802L4.59454 63.1324L7.3468 63.1324L7.3468 60.3802ZM17.3237 50.4253C11.9092 50.4253 7.3468 54.8715 7.3468 60.3802L12.8513 60.3802C12.8513 57.9572 14.9034 55.9298 17.3237 55.9298L17.3237 50.4253ZM14.5715 50.4253L14.5715 53.1775L20.076 53.1775L20.076 50.4253L14.5715 50.4253ZM11.1047 56.7427C12.3878 54.595 14.7375 53.1775 17.3237 53.1775L17.3237 47.673C12.7082 47.673 8.60772 50.1894 6.37921 53.9196L11.1047 56.7427ZM11.1183 53.9427C8.92451 50.188 4.85278 47.673 0.122128 47.673L0.122129 53.1775C2.8404 53.1775 5.13016 54.6052 6.36557 56.7196L11.1183 53.9427ZM-2.63013 50.4253L-2.63013 53.1776L2.87439 53.1775L2.87438 50.4253L-2.63013 50.4253ZM0.122131 55.9298C2.66324 55.9298 4.59454 57.9054 4.59454 60.3802L10.0991 60.3802C10.0991 54.8874 5.72538 50.4253 0.122129 50.4253L0.122131 55.9298ZM7.3468 63.1324L10.0991 63.1324L10.0991 57.6279L7.3468 57.6279L7.3468 63.1324Z"
                    fill="#5A43F0"
                    mask="url(#path-2-inside-1_316_31584)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="100"
                  viewBox="0 0 29 100"
                  fill="none"
                  className="hidden md:block lg:hidden"
                >
                  <path
                    d="M13.8301 99.6807L13.8301 0.473588"
                    stroke="#5A43F0"
                    strokeWidth="4.58761"
                  />
                  <mask id="path-2-inside-1_316_31921" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.6973 99.6802C16.6973 93.0699 22.21 87.6745 28.7397 87.6745L28.7397 83.0869C22.7376 83.0869 17.3618 86.3655 14.4351 91.2643C11.5772 86.3728 6.27532 83.0869 0.0671844 83.0869L0.0671842 87.6745C6.85492 87.6745 12.1097 93.0399 12.1097 99.6802L16.6973 99.6802Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6973 99.6802C16.6973 93.0699 22.21 87.6745 28.7397 87.6745L28.7397 83.0869C22.7376 83.0869 17.3618 86.3655 14.4351 91.2643C11.5772 86.3728 6.27532 83.0869 0.0671844 83.0869L0.0671842 87.6745C6.85492 87.6745 12.1097 93.0399 12.1097 99.6802L16.6973 99.6802Z"
                    fill="#5A43F0"
                  />
                  <path
                    d="M28.7397 87.6745L28.7397 92.2621L33.3274 92.2621L33.3274 87.6745L28.7397 87.6745ZM16.6973 99.6802L16.6973 104.268L21.2849 104.268L21.2849 99.6802L16.6973 99.6802ZM28.7397 83.0869L33.3274 83.0869L33.3274 78.4993L28.7397 78.4993L28.7397 83.0869ZM14.4351 91.2643L10.4741 93.5786L14.3912 100.283L18.3735 93.6171L14.4351 91.2643ZM0.0671844 83.0869L0.0671846 78.4993L-4.52043 78.4993L-4.52043 83.0869L0.0671844 83.0869ZM0.0671842 87.6745L-4.52043 87.6745L-4.52043 92.2621L0.067184 92.2621L0.0671842 87.6745ZM12.1097 99.6802L7.52205 99.6802L7.52205 104.268L12.1097 104.268L12.1097 99.6802ZM28.7397 83.0869C19.7145 83.0869 12.1097 90.4981 12.1097 99.6802L21.2849 99.6802C21.2849 95.6416 24.7054 92.2621 28.7397 92.2621L28.7397 83.0869ZM24.1521 83.0869L24.1521 87.6745L33.3274 87.6745L33.3274 83.0869L24.1521 83.0869ZM18.3735 93.6171C20.5122 90.0372 24.4288 87.6745 28.7397 87.6745L28.7397 78.4993C21.0463 78.4993 14.2114 82.6938 10.4968 88.9115L18.3735 93.6171ZM18.3962 88.95C14.7395 82.6914 7.95249 78.4993 0.0671846 78.4993L0.0671842 87.6745C4.59815 87.6745 8.41484 90.0542 10.4741 93.5786L18.3962 88.95ZM-4.52043 83.0869L-4.52043 87.6745L4.65479 87.6745L4.65479 83.0869L-4.52043 83.0869ZM0.067184 92.2621C4.30284 92.2621 7.52205 95.5551 7.52205 99.6802L16.6973 99.6802C16.6973 90.5247 9.40699 83.0869 0.0671844 83.0869L0.067184 92.2621ZM12.1097 104.268L16.6973 104.268L16.6973 95.0926L12.1097 95.0926L12.1097 104.268Z"
                    fill="#5A43F0"
                    mask="url(#path-2-inside-1_316_31921)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="174"
                  viewBox="0 0 50 174"
                  fill="none"
                  className="hidden lg:block"
                >
                  <path
                    d="M24 173.499L24 0.499016"
                    stroke="#5A43F0"
                    strokeWidth="8"
                  />
                  <mask id="path-2-inside-1_182_29523" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29 173.499C29 161.972 38.6132 152.563 50 152.563L50 144.563C39.5332 144.563 30.1589 150.281 25.0553 158.823C20.0714 150.293 10.8259 144.563 1.14441e-05 144.563L1.10944e-05 152.563C11.8366 152.563 21 161.92 21 173.499L29 173.499Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29 173.499C29 161.972 38.6132 152.563 50 152.563L50 144.563C39.5332 144.563 30.1589 150.281 25.0553 158.823C20.0714 150.293 10.8259 144.563 1.14441e-05 144.563L1.10944e-05 152.563C11.8366 152.563 21 161.92 21 173.499L29 173.499Z"
                    fill="#5A43F0"
                  />
                  <path
                    d="M50 152.563L50 160.563L58 160.563L58 152.563L50 152.563ZM29 173.499L29 181.499L37 181.499L37 173.499L29 173.499ZM50 144.563L58 144.563L58 136.563L50 136.563L50 144.563ZM25.0553 158.823L18.1479 162.859L24.9786 174.55L31.923 162.926L25.0553 158.823ZM1.14441e-05 144.563L1.17938e-05 136.563L-7.99999 136.563L-7.99999 144.563L1.14441e-05 144.563ZM1.10944e-05 152.563L-7.99999 152.563L-7.99999 160.563L1.07447e-05 160.563L1.10944e-05 152.563ZM21 173.499L13 173.499L13 181.499L21 181.499L21 173.499ZM50 144.563C34.2616 144.563 21 157.487 21 173.499L37 173.499C37 166.457 42.9648 160.563 50 160.563L50 144.563ZM42 144.563L42 152.563L58 152.563L58 144.563L42 144.563ZM31.923 162.926C35.6526 156.684 42.4825 152.563 50 152.563L50 136.563C36.5839 136.563 24.6651 143.878 18.1875 154.72L31.923 162.926ZM31.9627 154.788C25.5859 143.874 13.7506 136.563 1.17938e-05 136.563L1.10944e-05 152.563C7.90123 152.563 14.5569 156.713 18.1479 162.859L31.9627 154.788ZM-7.99999 144.563L-7.99999 152.563L8.00001 152.563L8.00001 144.563L-7.99999 144.563ZM1.07447e-05 160.563C7.38626 160.563 13 166.306 13 173.499L29 173.499C29 157.534 16.287 144.563 1.14441e-05 144.563L1.07447e-05 160.563ZM29 165.499L21 165.499L21 181.499L29 181.499L29 165.499Z"
                    fill="#5A43F0"
                    mask="url(#path-2-inside-1_182_29523)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="text-Dark text-xl text-center">
            Glo-raise breaks down these barriers to
            <br />
            <span className="font-semibold">
              connect Founders and Funders worldwide.
            </span>
          </div>
          <div className="h-[6px] bg-Hero-Purple"></div>
          <div className="grid md:flex gap-8 justify-between base:gap-0 items-center">
            <p className="[font-family:'Instrument_Serif',serif;] text-[26px] md:text-5xl">
              Trusted by
            </p>
            <div className="grid gap-8 base:gap-[50px] grid-cols-2 base:flex leading-tight">
              <div className="col-span-2 base:col-span-1">
                <p className="text-[38px] md:text-[58px] font-semibold">
                  Thousands+
                </p>
                <p className="text-Hero-Purple font-semibold base:text-xl">
                  Founders
                </p>
              </div>
              <div className="">
                <p className="text-[38px] md:text-[58px] font-semibold ">20+</p>
                <p className="text-Hero-Purple font-semibold base:text-xl">
                  Industries
                </p>
              </div>
              <div className="">
                <p className="text-[38px] md:text-[58px] font-semibold">50+</p>
                <p className="text-Hero-Purple font-semibold base:text-xl">
                  Countries
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="bg-Dark px-9 py-6 text-white rounded-[4px] [font-family:'Roboto',sans-serif;] base:mx-auto text-xl"
          >
            About Us
          </button>
        </div>
      </section>
      <Carousel />
      <section className="bg-Light">
        <div className=" mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-10 md:gap-14 base:md:gap-[60px] overflow-hidden relative">
          <p className="text-Dark text-[38px] font-semibold text-center leading-tight">
            Take the{" "}
            <span className="relative">
              free
              <span className="absolute w-full h-1 bg-Hero-Purple bottom-0 left-0"></span>
            </span>
            <br /> GROWTH Assessment.
          </p>
          <p className="text-Dark text-xl text-center">
            A leading-edge assessment, world-class resources to improve
            <br /> your business, and a direct path to our funder network.{" "}
            <br />
            What're you waiting for?
          </p>
          <div className="w-full h-full absolute justify-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="73"
              height="35"
              viewBox="0 0 73 35"
              fill="none"
              className="absolute right-[74px]"
            >
              <ellipse
                cx="36.0694"
                cy="-1.329"
                rx="36.0694"
                ry="35.6349"
                fill="#2E2873"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="98"
              viewBox="0 0 47 98"
              fill="none"
              className="absolute top-[190px] right-0"
            >
              <path
                d="M46.7289 0.0361328L52.4806 31.0632L75.3711 9.34253L61.787 37.8247L93.0729 33.707L65.3417 48.7651L93.0729 63.8231L61.787 59.7054L75.3711 88.1876L52.4806 66.4669L46.7289 97.494L40.9773 66.4669L18.0868 88.1876L31.6709 59.7054L0.384964 63.8231L28.1161 48.7651L0.384964 33.707L31.6709 37.8247L18.0868 9.34253L40.9773 31.0632L46.7289 0.0361328Z"
                fill="#024F4A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="134"
              viewBox="0 0 99 134"
              fill="none"
              className="absolute top-[35%] md:top-[29%] left-0 sm:-left-[3%] md:left-0"
            >
              <path
                d="M74.4307 26.2275L-14.1349 106.925"
                stroke="#5A43F0"
                strokeWidth="5.29827"
              />
              <path
                d="M72.4754 28.0092C57.8942 41.2951 35.1535 40.0805 22.2084 25.8733"
                stroke="#5A43F0"
                strokeWidth="5.29827"
              />
              <path
                d="M72.4754 28.0092C57.8942 41.2951 56.5145 63.5242 69.939 78.2576"
                stroke="#5A43F0"
                strokeWidth="5.29827"
              />
            </svg>
            <div className="w-8 h-8 bg-Energy absolute bottom-[5%] right-[7%] rotate-12"></div>
          </div>
        </div>
      </section>
      <section className="bg-Hero-Purple">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-8 md:gap-12 base:md:gap-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="54"
            viewBox="0 0 101 54"
            fill="none"
            className="justify-self-center"
          >
            <path
              d="M0.722656 49.1933H50.4999M50.4999 49.1933L5.46335 30.1621M50.4999 49.1933L15.7348 14.3027M50.4999 49.1933L32.3273 3.20117M50.4999 49.1933V0.0292969M50.4999 49.1933H100.277M50.4999 49.1933L95.5365 30.1621M50.4999 49.1933L85.265 14.3027M50.4999 49.1933L68.6726 3.20117"
              stroke="#C2DEEC"
              strokeWidth="8"
            />
          </svg>
          <p className="text-Iceberg text-[38px] font-semibold text-center leading-tight">
            Ready for your Glo-GROWTH score?
          </p>
          <button
            onClick={() => navigate("/get_started")}
            className="bg-Iceberg px-[36px] py-5 text-Hero-Purple rounded-[4px] [font-family:'Roboto',sans-serif;]  mx-auto"
          >
            Get Started
          </button>
        </div>
      </section>
      <SubscriberForm />
    </div>
  );
}
