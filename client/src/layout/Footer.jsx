import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-4 md:px-[40px] lg:px-[60px] bg-Dark">
      <div className="py-20 w-[min(70rem,100%)] mx-auto">
        <div className="md:pb-[60px] grid md:grid-cols-[0.5fr_1fr]">
          <NavLink to="/" className="mb-10 mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="32"
              viewBox="0 0 160 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M120.119 0.845703H114.836V6.78485H120.119V0.845703ZM36.5551 0.877269H31.807V30.5465H36.5551V0.877269ZM102.485 9.06596C97.5312 9.06596 93.6779 12.1766 93.3557 16.45L93.3203 16.9183H97.8073L97.8339 16.5113C97.9488 14.7542 99.7371 13.0919 102.385 13.0919C103.883 13.0919 104.991 13.4914 105.719 14.1332C106.441 14.7695 106.835 15.6841 106.835 16.8185C106.835 17.1016 106.753 17.2738 106.639 17.38C106.52 17.4909 106.298 17.5914 105.897 17.5914H101.682C99.2229 17.5914 97.153 18.2124 95.6884 19.381C94.2129 20.5582 93.3879 22.2636 93.3879 24.3369C93.3879 26.2661 94.121 27.9141 95.4186 29.0756C96.7123 30.2334 98.5357 30.8812 100.679 30.8812C103.384 30.8812 105.798 29.7825 107.102 27.9742C107.273 28.4507 107.537 28.8812 107.898 29.2432C108.84 30.1882 110.271 30.6477 111.86 30.5791H113.255V25.9154H111.583V17.0199C111.583 14.6519 110.672 12.6497 109.058 11.2451C107.45 9.84526 105.176 9.06596 102.485 9.06596ZM101.448 26.8888C100.404 26.8888 99.5628 26.5996 98.9914 26.1343C98.4273 25.6751 98.1025 25.027 98.1025 24.2362C98.1025 23.2923 98.479 22.5471 99.1369 22.0275C99.8054 21.4996 100.797 21.181 102.05 21.181H106.835V21.2154C106.835 23.0138 106.323 24.4235 105.422 25.3805C104.525 26.3342 103.193 26.8888 101.448 26.8888ZM78.8028 17.8308H62.2473V21.5211H78.8028V17.8308ZM119.852 9.36758H115.104V30.5115H119.852V9.36758ZM129.985 13.0255C130.786 13.0255 131.696 13.2434 132.426 13.7154C133.145 14.1805 133.685 14.8865 133.802 15.8959L133.847 16.2812H138.337L138.313 15.8229C138.206 13.7873 137.312 12.0776 135.835 10.8832C134.364 9.69314 132.339 9.03305 129.985 9.03305C127.801 9.03305 125.901 9.64187 124.537 10.74C123.166 11.844 122.36 13.4277 122.36 15.3087C122.36 17.5849 123.122 19.0352 124.321 19.9675C125.487 20.8749 127.016 21.2476 128.454 21.5063C128.793 21.5674 129.133 21.6228 129.464 21.6768L129.464 21.677L129.465 21.677L129.465 21.677L129.53 21.6877C129.884 21.7454 130.227 21.8019 130.557 21.8634C131.222 21.987 131.816 22.1274 132.314 22.3261C132.81 22.5243 133.183 22.77 133.433 23.0876C133.678 23.3979 133.833 23.8122 133.833 24.4047C133.833 25.5374 132.674 26.7215 130.453 26.7215C129.221 26.7215 128.255 26.4048 127.572 25.8563C126.895 25.3119 126.458 24.5077 126.335 23.4483L126.291 23.063H121.796L121.825 23.5259C121.966 25.7655 122.876 27.6088 124.396 28.8878C125.912 30.1626 128 30.8481 130.453 30.8481C132.896 30.8481 134.901 30.2359 136.304 29.0985C137.717 27.9528 138.481 26.306 138.481 24.3376C138.481 21.9207 137.722 20.3715 136.52 19.3752C135.344 18.4007 133.803 18.007 132.35 17.7577C131.911 17.6823 131.46 17.6174 131.027 17.5551L131.027 17.555C130.75 17.5151 130.48 17.4762 130.225 17.4363C129.553 17.3312 128.952 17.2148 128.449 17.0434C127.945 16.8719 127.573 16.6568 127.328 16.3776C127.091 16.1091 126.94 15.7461 126.94 15.208C126.94 14.5639 127.221 14.0359 127.728 13.6564C128.245 13.2692 129.016 13.0255 129.985 13.0255ZM150.188 26.6544C151.615 26.6544 152.746 26.3403 153.577 25.7872C154.4 25.2394 154.957 24.4379 155.218 23.3981L155.3 23.0294H160L159.914 23.5376C159.169 27.9545 155.3 30.8145 150.154 30.8145C143.622 30.8145 139.585 25.6792 139.585 19.8064C139.585 16.8824 140.491 14.1893 142.233 12.2211C143.98 10.2465 146.543 9.03305 149.786 9.03305C153.023 9.03305 155.543 10.1917 157.251 12.0516C158.954 13.9058 159.82 16.4247 159.82 19.1015C159.82 19.6522 159.786 20.3031 159.751 20.6849L159.715 21.0809H144.348C144.792 24.4573 147.082 26.6544 150.188 26.6544ZM149.786 13.059C151.368 13.059 152.611 13.5415 153.484 14.3562C154.262 15.0831 154.775 16.1023 154.956 17.3571H144.499C144.82 15.9904 145.403 14.9656 146.197 14.2635C147.085 13.4788 148.28 13.059 149.786 13.059ZM49.3011 26.7246C47.4918 26.7246 45.9966 26.0487 44.9508 24.9025C43.9022 23.7531 43.2794 22.1014 43.2794 20.1115C43.2794 18.1216 43.9022 16.4699 44.9508 15.3206C45.9966 14.1744 47.4918 13.4984 49.3011 13.4984C51.1102 13.4984 52.5964 14.1741 53.6336 15.3194C54.674 16.4683 55.2893 18.1201 55.2893 20.1115C55.2893 22.1015 54.6665 23.7535 53.6215 24.9031C52.5794 26.0494 51.0927 26.7246 49.3011 26.7246ZM49.3011 9.20395C43.0072 9.20395 38.4311 13.7959 38.4311 20.1115C38.4311 26.4272 43.0072 31.0191 49.3011 31.0191C55.5969 31.0191 60.1377 26.4255 60.1377 20.1115C60.1377 13.7987 55.6313 9.20395 49.3011 9.20395ZM92.6845 9.36758H80.5108V30.545H85.292V14.0313H92.6845V9.36758ZM25.153 23.434L25.7549 29.9119V30.1133V29.9119L25.153 23.434ZM23.2463 12.4248L23.3132 12.5591H27.7954H23.3132L23.2463 12.4248ZM28.9988 16.1178H14.3831V21.0836H22.5125C21.1248 24.3787 18.2199 26.4556 14.4826 26.4556C9.39358 26.4556 5.18285 22.0427 5.18285 16.5197C5.18285 10.9967 9.39358 6.58374 14.4826 6.58374C16.5346 6.58374 18.2144 7.07703 19.578 8.05492C20.944 9.03458 22.0287 10.5266 22.8429 12.5855L22.8498 12.6028L23.045 12.9946H28.351L28.1467 12.174L28.1435 12.1632C27.4442 9.86964 26.2246 7.32346 24.07 5.34847C21.9062 3.36512 18.8311 1.98736 14.4835 1.98717C6.48091 1.95306 0 8.49429 0 16.5197C0 24.5472 6.48273 31.0522 14.4826 31.0522C17.9436 31.0522 21.2417 29.6287 23.4697 27.1141C24.0214 26.4962 24.48 25.8057 24.8696 25.076L25.321 29.9323V30.5487H28.9988V16.1178Z"
                fill="#CAFF87"
              />
            </svg>
          </NavLink>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-0 items-start w-full">
            <div className="grid gap-[10px]">
              <p className="text-Lime text-xl">About</p>
              <NavLink to="/how_it_works" className="text-white">
                How it Works
              </NavLink>
              <NavLink to="/about_us" className="text-white">
                About Us
              </NavLink>
              <NavLink to="/legal" className="text-white">
                Legal
              </NavLink>
            </div>
            <div className="grid gap-[10px]">
              <p className="text-Lime text-xl">Founders</p>
              <NavLink to="/get_started" className="text-white">
                Get Started
              </NavLink>
              <NavLink to="/login" className="text-white">
                Login
              </NavLink>
            </div>
            <div className="grid gap-[10px]">
              <p className="text-Lime text-xl">Funders</p>
              <NavLink to="/funder" className="text-white">
                Funder Portal
              </NavLink>
              <NavLink to="/join" className="text-white">
                Join
              </NavLink>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-white my-6"></div>
        <div className="grid md:flex justify-between">
          <p className="text-white">
            Copyright &copy; 2024 Glo-raise. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo(0, 0)}
            className="flex gap-2 items-center"
          >
            <p className="text-white">Back to top</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="44"
              viewBox="0 0 43 44"
              fill="none"
            >
              <path
                d="M21.3959 21.8626L32.0999 11.1586L42.6323 21.691L39.9388 24.3845L39.4889 23.9346L35.614 20.7208C35.8612 21.5387 36.0294 22.3785 36.0762 23.2336C36.2798 26.7006 34.9033 30.1549 32.3686 32.6896C26.5098 38.5485 17.0144 38.5485 11.1555 32.6897C5.29815 26.8323 5.27044 17.3118 11.1562 11.4758C14.3404 8.29195 17.598 7.04541 20.6302 6.90831C23.6497 6.77173 26.4012 7.7369 28.5873 8.89866L28.5975 8.90425L29.346 9.35348L25.46 13.2395L25.0312 13.0965L25.0135 13.0889C22.9145 12.1825 21.0312 11.888 19.3157 12.1734C17.6034 12.4583 16.0131 13.3285 14.5103 14.8313C10.7833 18.5584 10.9203 24.863 14.9513 28.8939C18.9822 32.9249 25.2868 33.0619 29.0138 29.3348C31.7509 26.5977 32.3625 22.9545 30.9739 19.5332L25.0202 25.4869L21.3959 21.8626Z"
                fill="#CAFF87"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
