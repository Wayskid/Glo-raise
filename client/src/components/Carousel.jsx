import React, { useState } from "react";

export default function Carousel() {
  const testimonies = [
    {
      name: "Andrea, EMEA",
      testimony:
        "As a founder it's important to really understand your strengths and weaknesses and how they impact fundability and growth. Glo-raise does this extremely well.",
    },
    {
      name: "Ritu, Asia Pacific",
      testimony:
        "Trusting that your interests are being looked out for is huge for a founder. With Glo-raise you feel that your growth is their complete focus.",
    },
    {
      name: "Nancy, North America",
      testimony:
        "Securing the right funding is hard enough when you're plugged into a strong network. If you’re not, it's so much harder. Glo-raise makes everything easier.",
    },
    {
      name: "Pablo, Latin America",
      testimony:
        "The access Glo-raise provides and the insights along the way are fantastic.",
    },
    {
      name: "Charles, North America",
      testimony:
        "This is the best resource to quickly and accurately learn what your business needs for next-level growth.",
    },
  ];

  const radioBtn = [" ", " ", " ", " ", " "];
  const [activeIndex, setActiveIndex] = useState(0);

  function switchCarousel(newIndex) {
    if (newIndex < 0) newIndex = content.length - 1;
    if (newIndex >= content.length) newIndex = 0;
    setActiveIndex(newIndex);
  }

  return (
    <section className="bg-Nature overflow-x-hidden pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px]">
      <div
        style={{ transform: `translateX(-${activeIndex}00%)` }}
        className={`w-[min(80rem,100%)] mx-auto  flex ${`[transform:translateX(${activeIndex}00%)]`}`}
      >
        {testimonies.map((testimony) => (
          <div className="w-[min(80rem,100%)] px-4 md:px-[60px] lg:px-[132px] grid md:flex gap-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="66"
              viewBox="0 0 96 66"
              fill="none"
            >
              <path
                d="M39.1291 23.4695C32.3241 23.4695 27.9494 28.5733 27.9494 36.5935V65.029H0V34.1631C0 14.234 12.881 0.380859 32.081 0.380859H43.5038V23.4695H39.1291ZM52.4962 65.029V34.1631C52.4962 14.234 65.3772 0.380859 84.5772 0.380859H96V23.4695H91.6253C84.8203 23.4695 80.4456 28.5733 80.4456 36.5935V65.029H52.4962Z"
                fill="#CAFF87"
              />
            </svg>
            <div className="grid gap-8">
              <p className="text-2xl text-Dark font-semibold leading-tight">
                {testimony.testimony}
              </p>
              <p className="md:text-xl font-semibold text-Dark">
                —{testimony.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 px-4 md:px-[60px] lg:px-[132px] mt-4">
        {radioBtn.map((btn, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            className={`w-6 h-6 md:w-6 md:h-6 rounded-full [transition:0.5s_ease] border-[6px] border-${
              index === activeIndex ? "Dark" : "Lime"
            } bg-${index === activeIndex ? "Dark" : "transparent"}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
