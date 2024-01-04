import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFundersAssessmentStarted } from "../../store/features/appSlice";

export default function Funders_Success() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFundersAssessmentStarted(false));
  }, []);
  return (
    <div className="w-[min(1176px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-12 overflow-hidden relative">
      <p className="text-[38px] md:text-[58px] text-Dark font-semibold leading-snug text-center">
        Thank You
      </p>
      <div className="grid gap-6 w-[min(740px,100%)] mx-auto">
        <p className="text-xl">
          A member of the Glo-raise leadership team will reach out to you
          shortly for a brief virtual overview of the matching experience.
        </p>
        <p className="text-xl">
          A member of the Glo-raise leadership team will reach out to you
          shortly for a brief virtual overview of the matching experience.
        </p>
        <p className="text-xl">
          Once completed, you'll be eligible to receive profiles and warm
          invitations to virtually connect with founders whose businesses most
          closely match your interests and who have achieved the desired GROWTH
          assessment score.
        </p>
        <p className="text-xl">
          The Glo-raise engine is always in motion seeking matches for your
          funding interests and you'll be alerted about each potential
          high-quality fit.
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="344"
        height="563"
        viewBox="0 0 344 563"
        fill="none"
        className="hidden lg:block absolute top-[442px] -right-[40px]"
      >
        <path
          d="M541.93 281.5C541.93 425.331 425.331 541.93 281.5 541.93C137.669 541.93 21.0703 425.331 21.0703 281.5C21.0703 137.669 137.669 21.0703 281.5 21.0703C425.331 21.0703 541.93 137.669 541.93 281.5Z"
          stroke="#02B68A"
          stroke-width="42"
        />
        <path
          d="M369.781 281.5C369.781 330.256 330.256 369.781 281.5 369.781C232.744 369.781 193.219 330.256 193.219 281.5C193.219 232.744 232.744 193.219 281.5 193.219C330.256 193.219 369.781 232.744 369.781 281.5Z"
          stroke="#02B68A"
          stroke-width="42"
        />
        <path
          d="M458.062 281.5C458.062 379.013 379.013 458.062 281.5 458.062C183.987 458.062 104.938 379.013 104.938 281.5C104.938 183.987 183.987 104.938 281.5 104.938C379.013 104.938 458.062 183.987 458.062 281.5Z"
          stroke="#02B68A"
          stroke-width="42"
        />
      </svg>
    </div>
  );
}
