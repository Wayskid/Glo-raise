import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="fixed top-0 w-full z-40 [font-family:'Roboto',sans-serif;] bg-white">
      <div className="flex items-center w-[min(80rem,100%)] mx-auto px-4 md:px-[60px] lg:px-[132px] py-[24px]">
        <NavLink to="/" className="mr-auto ">
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
              d="M120.119 0.896729H114.836V6.83588H120.119V0.896729ZM36.5551 0.928295H31.807V30.5975H36.5551V0.928295ZM102.485 9.11699C97.5312 9.11699 93.6779 12.2276 93.3557 16.501L93.3203 16.9693H97.8073L97.8339 16.5624C97.9488 14.8052 99.7371 13.143 102.385 13.143C103.883 13.143 104.991 13.5424 105.719 14.1842C106.441 14.8205 106.835 15.7351 106.835 16.8695C106.835 17.1526 106.753 17.3249 106.639 17.4311C106.52 17.5419 106.298 17.6424 105.897 17.6424H101.682C99.2229 17.6424 97.153 18.2634 95.6884 19.432C94.2129 20.6092 93.3879 22.3146 93.3879 24.388C93.3879 26.3172 94.121 27.9651 95.4186 29.1266C96.7123 30.2845 98.5357 30.9322 100.679 30.9322C103.384 30.9322 105.798 29.8335 107.102 28.0252C107.273 28.5017 107.537 28.9323 107.898 29.2942C108.84 30.2392 110.271 30.6987 111.86 30.6301H113.255V25.9664H111.583V17.0709C111.583 14.7029 110.672 12.7007 109.058 11.2961C107.45 9.89629 105.176 9.11699 102.485 9.11699ZM101.448 26.9399C100.404 26.9399 99.5628 26.6506 98.9914 26.1853C98.4273 25.7261 98.1025 25.078 98.1025 24.2873C98.1025 23.3433 98.479 22.5981 99.1369 22.0786C99.8054 21.5506 100.797 21.232 102.05 21.232H106.835V21.2665C106.835 23.0649 106.323 24.4745 105.422 25.4315C104.525 26.3853 103.193 26.9399 101.448 26.9399ZM78.8028 17.8818H62.2473V21.5721H78.8028V17.8818ZM119.852 9.41861H115.104V30.5625H119.852V9.41861ZM129.985 13.0765C130.786 13.0765 131.696 13.2944 132.426 13.7665C133.145 14.2315 133.685 14.9376 133.802 15.9469L133.847 16.3322H138.337L138.313 15.8739C138.206 13.8383 137.312 12.1286 135.835 10.9342C134.364 9.74417 132.339 9.08408 129.985 9.08408C127.801 9.08408 125.901 9.69289 124.537 10.791C123.166 11.8951 122.36 13.4787 122.36 15.3598C122.36 17.6359 123.122 19.0862 124.321 20.0185C125.487 20.9259 127.016 21.2987 128.454 21.5573C128.793 21.6184 129.133 21.6738 129.464 21.7278L129.465 21.728L129.53 21.7388C129.884 21.7965 130.227 21.8529 130.557 21.9144C131.222 22.038 131.816 22.1784 132.314 22.3771C132.81 22.5753 133.183 22.821 133.433 23.1386C133.678 23.4489 133.833 23.8632 133.833 24.4557C133.833 25.5884 132.674 26.7725 130.453 26.7725C129.221 26.7725 128.255 26.4558 127.572 25.9073C126.895 25.3629 126.458 24.5587 126.335 23.4993L126.291 23.114H121.796L121.825 23.5769C121.966 25.8166 122.876 27.6599 124.396 28.9388C125.912 30.2137 128 30.8991 130.453 30.8991C132.896 30.8991 134.901 30.2869 136.304 29.1495C137.717 28.0038 138.481 26.3571 138.481 24.3886C138.481 21.9717 137.722 20.4226 136.52 19.4262C135.344 18.4517 133.803 18.0581 132.35 17.8087C131.911 17.7333 131.46 17.6685 131.027 17.6061C130.75 17.5662 130.48 17.5273 130.225 17.4874C129.553 17.3822 128.952 17.2658 128.449 17.0944C127.945 16.9229 127.573 16.7079 127.328 16.4287C127.091 16.1601 126.94 15.7971 126.94 15.2591C126.94 14.6149 127.221 14.087 127.728 13.7074C128.245 13.3202 129.016 13.0765 129.985 13.0765ZM150.188 26.7054C151.615 26.7054 152.746 26.3913 153.577 25.8382C154.4 25.2904 154.957 24.4889 155.218 23.4491L155.3 23.0805H160L159.914 23.5887C159.169 28.0055 155.3 30.8656 150.154 30.8656C143.622 30.8656 139.585 25.7302 139.585 19.8574C139.585 16.9334 140.491 14.2403 142.233 12.2721C143.98 10.2975 146.543 9.08408 149.786 9.08408C153.023 9.08408 155.543 10.2427 157.251 12.1026C158.954 13.9568 159.82 16.4758 159.82 19.1525C159.82 19.7032 159.786 20.3541 159.751 20.7359L159.715 21.132H144.348C144.792 24.5083 147.082 26.7054 150.188 26.7054ZM149.786 13.11C151.368 13.11 152.611 13.5925 153.484 14.4072C154.262 15.1341 154.775 16.1533 154.956 17.4081H144.499C144.82 16.0414 145.403 15.0166 146.197 14.3146C147.085 13.5298 148.28 13.11 149.786 13.11ZM49.3011 26.7757C47.4918 26.7757 45.9966 26.0997 44.9508 24.9535C43.9022 23.8041 43.2794 22.1525 43.2794 20.1625C43.2794 18.1726 43.9022 16.521 44.9508 15.3716C45.9966 14.2254 47.4918 13.5495 49.3011 13.5495C51.1102 13.5495 52.5964 14.2251 53.6336 15.3704C54.674 16.5193 55.2893 18.1711 55.2893 20.1625C55.2893 22.1525 54.6665 23.8045 53.6215 24.9541C52.5794 26.1004 51.0927 26.7757 49.3011 26.7757ZM49.3011 9.25498C43.0072 9.25498 38.4311 13.8469 38.4311 20.1625C38.4311 26.4782 43.0072 31.0701 49.3011 31.0701C55.5969 31.0701 60.1377 26.4765 60.1377 20.1625C60.1377 13.8497 55.6313 9.25498 49.3011 9.25498ZM92.6845 9.41861H80.5108V30.5961H85.292V14.0823H92.6845V9.41861ZM28.9988 16.1689H14.3831V21.1346H22.5125C21.1248 24.4297 18.2199 26.5066 14.4826 26.5066C9.39358 26.5066 5.18285 22.0937 5.18285 16.5707C5.18285 11.0478 9.39358 6.63476 14.4826 6.63476C16.5346 6.63476 18.2144 7.12806 19.578 8.10595C20.944 9.08561 22.0287 10.5776 22.8429 12.6365L22.8498 12.6539L23.045 13.0456H28.351L28.1467 12.225L28.1435 12.2142C27.4442 9.92066 26.2246 7.37449 24.07 5.3995C21.9062 3.41614 18.8311 2.03839 14.4835 2.03819C6.48091 2.00409 0 8.54532 0 16.5707C0 24.5982 6.48273 31.1032 14.4826 31.1032C17.9436 31.1032 21.2417 29.6798 23.4697 27.1651C24.0214 26.5473 24.48 25.8567 24.8696 25.127L25.321 29.9833V30.5997H28.9988V16.1689Z"
              fill="#051C09"
            />
          </svg>
        </NavLink>
        <div className="md:flex items-center gap-12 hidden">
          <NavLink
            to="/how_it_works"
            className="py-2 border-b-[3px] border-Hero-Purple"
          >
            How it Works
          </NavLink>
          <NavLink to="/for_funders" className="py-2">
            For Funders
          </NavLink>
          <NavLink to="/about" className="py-2">
            About Us
          </NavLink>
          <NavLink
            to="/get_started"
            className="px-4 py-2 border-[1px] border-Hero-Purple bg-Hero-Purple rounded-[4px] text-white"
          >
            Get Started
          </NavLink>
        </div>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M3 6.49902H21V8.49902H3V6.49902ZM3 11.499H21V13.499H3V11.499ZM3 16.499H21V18.499H3V16.499Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
