import React from "react";
import SubscriberForm from "../../components/SubscriberForm";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-Sand">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-10 md:gap-[60px]">
          <div className="grid gap-8 md:gap-10 base:gap-12">
            <p className="[font-family:'Instrument_Serif',serif;] text-[26px] text-Dark">
              About us
            </p>
            <p className="text-Dark text-[38px] md:text-[48px] base:text-[58px] font-semibold leading-tight">
              Glo-raise radically changes the game by connecting smart capital
              and high potential ventures around the world.
            </p>
            <p className="text-xl text-Dark w-[min(740px,100%)]">
              Glo-raise was founded by James and Team, who were determined to
              develop a world-class matching engine to help Founders radically
              enhance their success odds, remove barriers to startup and scale
              funding, and dramatically improve deal flow for Funders.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="133"
              viewBox="0 0 134 133"
              fill="none"
              className="w-[44px] md:w-[94px] base:w-[125px]"
            >
              <ellipse
                cx="66.8443"
                cy="66.039"
                rx="66.8443"
                ry="66.039"
                transform="matrix(-1 0 0 1 133.844 0.461029)"
                fill="#024F4A"
              />
            </svg>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="50"
                viewBox="0 0 29 50"
                fill="none"
                className="w-[15px] base:w-[29px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.48795e-07 21C11.5274 21 20.9359 11.3868 20.9359 0L28.9359 3.5059e-07C28.9359 10.4668 23.2186 19.8411 14.6759 24.9447C23.2059 29.9286 28.9359 39.1741 28.9359 50L20.9359 50C20.9359 38.1634 11.5796 29 0 29L3.48795e-07 21Z"
                  fill="#B79F71"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="9"
                viewBox="0 0 778 9"
                fill="none"
                className="w-[180px] md:w-[400px] base:w-[478px]"
              >
                <path
                  d="M778 4.5L-1.37091e-05 4.5"
                  stroke="#B79F71"
                  strokeWidth="8"
                  strokeDasharray="16 16"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="50"
                viewBox="0 0 29 50"
                fill="none"
                className="w-[15px] base:w-[29px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.0001 21C17.4727 21 8.06421 11.3868 8.06421 0H0.064209C0.064209 10.4668 5.78146 19.8411 14.3242 24.9447C5.79418 29.9286 0.0642097 39.1741 0.064211 50H8.06421C8.06421 38.1634 17.4205 29 29.0001 29L29.0001 21Z"
                  fill="#B79F71"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="169"
              viewBox="0 0 161 169"
              fill="none"
              className="w-[61px] md:w-[100px] base:w-[151px]"
            >
              <path
                d="M80.5 0L70.5306 53.7793L30.8546 16.1308L54.3998 65.499L0.171997 58.3617L48.2384 84.4619L0.171997 110.562L54.3998 103.425L30.8546 152.793L70.5306 115.144L80.5 168.924L90.4694 115.144L130.145 152.793L106.6 103.425L160.828 110.562L112.762 84.4619L160.828 58.3617L106.6 65.499L130.145 16.1308L90.4694 53.7793L80.5 0Z"
                fill="#FD542F"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="bg-Iceberg">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-8 md:gap-12">
          <p className="w-[min(740px,100%)]">
            Combining an established capital network with emerging matchmaking
            technologies, Glo-raise is the match.com for Founders and Funders
            worldwide.
            <br />
            <br />
            Take the first step to growing your venture by clicking "Get
            Started" below.
          </p>
          <button
            onClick={() => navigate("/get_started")}
            className="bg-Violet px-9 py-6 text-Iceberg rounded-[4px] md:mr-auto md:ml-0"
          >
            Get Started
          </button>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-[min(80rem,100%)] mx-auto pt-10 md:pt-0 px-4 md:px-[60px] lg:px-[132px] grid gap-16 md:flex flex-row-reverse">
          <div className="grid gap-8 md:gap-12 bg-slate-60 w-[min(500px,100%)] shrink-0 my-auto">
            <div>
              <p className="text-[38px] font-semibold text-Dark">
                James Tavita & Team
              </p>
              <p className="text-2xl text-Dark">Chief Executive Officer</p>
            </div>
            <p className="text-xl w-[min(532px,100%)]">
              Welcome to Glo-raise - the premier platform for assessing business
              attractiveness and matching founders and funder globally. Our
              approach radically shifts the game by improving access for
              founders and increasing quality opportunities for funders.
              <br />
              <br />
              Working closely with a world-class team of funders and scholars,
              our team has developed the premier engine for assessing business
              attractiveness to empower founders with next-level GROWTH insights
              and to enhance opportunity sourcing for funders.
              <br />
              <br />
              Not yet fundable? No worries. Glo-visor is a premier system led by
              successful founders globally to improve business quality along the
              six GROWTH attractiveness metrics.
              <br />
              <br />
              For others, the RAISER Foundations approach is unrivaled for
              providing value to founders while helping them to create more
              value for their customers and potential funders.
              <br />
              <br />
              Let's go - we've got you covered!
            </p>
          </div>
          <div className="grid place-items-center relative h-80 md:h-[1005px] md:my-auto md:w-[calc(100%-500px)] shrink-0 overflow-x-hidden">
            <div className="grid w-full h-full place-items-center absolute overflow-hidden">
              <div className="bg-Iceberg w-16 h-[66rem] absolute"></div>
              <div className="bg-Iceberg w-16 h-[66rem] rotate-45 absolute"></div>
              <div className="bg-Iceberg w-16 h-[66rem] -rotate-45 absolute"></div>
              <div className="bg-Iceberg w-full h-16"></div>
            </div>
            <div className="grid w-32 h-32 place-items-center absolute">
              <div className="bg-Energy w-[9px] h-full absolute"></div>
              <div className="bg-Energy w-[9px] h-full rotate-45 absolute"></div>
              <div className="bg-Energy w-[9px] h-full -rotate-45 absolute"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="214"
                height="9"
                viewBox="0 0 214 9"
                fill="none"
                className="absolute -left-[14.5rem]"
              >
                <path
                  d="M214 4.23035L-519 4.23035"
                  stroke="#FD542F"
                  strokeWidth="8"
                  stroke-dasharray="18.96 18.96"
                />
              </svg>
              <div className="bg-Energy w-full h-[9px]"></div>
            </div>
          </div>
        </div>
      </section>
      <SubscriberForm />
    </div>
  );
}
