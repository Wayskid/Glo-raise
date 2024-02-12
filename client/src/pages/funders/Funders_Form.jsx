import React, { useEffect, useState } from "react";
import InputField from "../../components/reuseable/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  setFundersAssessmentProgress,
} from "../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";
import { useCreateFunderMutation } from "../../services/appApi.js";

export default function Funders_Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assessmentInfo = useSelector((state) => state.app.fundersAssessment);

  useEffect(() => {
    dispatch(setFundersAssessmentProgress(100));
  }, []);

  const funders_form = [
    {
      label: "Name",
      id: "name",
      type: "text",
      placeholder: "Your Name",
      pattern: "[a-zA-Z ]+",
    },
    {
      label: "Company name",
      id: "company_name",
      type: "text",
      placeholder: "Your company name",
      pattern: "[a-zA-Z0-9 ]+",
    },
    {
      label: "Company website",
      id: "company_website",
      type: "text",
      placeholder: "ex: www.companydomain.com",
      pattern: "(https?://)?(www.)+.*",
    },
    {
      label: "Postal code",
      id: "postal_code",
      type: "text",
      placeholder: "Your postal code",
    },
    {
      label: "Phone number",
      id: "phone_number",
      type: "number",
      placeholder: "Your phone number",
    },
    { label: "Email", id: "email", type: "email", placeholder: "Your email" },
  ];

  const [fundersFormVal, setFundersFormVal] = useState({});
  function handleChange(e) {
    setFundersFormVal({
      ...fundersFormVal,
      [e.target.name]: e.target.value,
    });
  }

  const [createFunderApi] = useCreateFunderMutation();
  const [loading, setLoading] = useState(false);
  function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    createFunderApi({
      body: {
        name: fundersFormVal.name.trim(),
        email: fundersFormVal.email.trim(),
        funderInfo: fundersFormVal,
        assessmentInfo,
      },
    })
      .unwrap()
      .then((result) => {
        navigate(`../../../get_started/funders/funders_success`);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  return (
    <div className="w-[min(1176px,100%)] mx-auto pt-[40px] pb-[72px] md:pt-[60px] md:pb-[100px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-12">
      <p className="text-[38px] md:text-[58px] text-Dark font-semibold leading-snug text-center">
        <span className="text-Nature">Excellent!</span>
        <br />
        Fill in your info to begin to receive potential opportunity matches
      </p>
      <form
        className="border-2 border-Dark rounded-[20px] py-[60px] px-4 md:px-[48px] grid gap-6 w-[min(548px,100%)] mx-auto"
        onSubmit={onSubmitForm}
      >
        {funders_form.map((field) => (
          <InputField
            key={field.id}
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            label={field.label}
            value={fundersFormVal[field.id]}
            onChange={handleChange}
            required={true}
            pattern={field.pattern}
          />
        ))}
        <div className="grid gap-6 md:gap-12 mt-4">
          <div className="flex gap-3 relative cursor-pointer">
            <input
              type="checkbox"
              className="absolute opacity-0 peer/radio "
              id="first_term"
              name="first_term"
              value="Yes"
              onChange={(e) =>
                setFundersFormVal({
                  ...fundersFormVal,
                  "Meet all standards":
                    fundersFormVal?.["Meet all standards"] === "Yes"
                      ? "No"
                      : "Yes",
                })
              }
              required
            />
            <div className="w-[27px] h-[27px] bg-white border-2 border-[#2222221A] rounded-[4px] peer-checked/radio:hidden"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              className="hidden peer-checked/radio:block z-20"
            >
              <path
                d="M0 7.2071C0 4.72204 0 3.47952 0.491287 2.53375C0.905289 1.73676 1.55512 1.08693 2.35211 0.672927C3.29788 0.181641 4.5404 0.181641 7.02545 0.181641H19.1564C21.6414 0.181641 22.8839 0.181641 23.8297 0.672927C24.6267 1.08693 25.2765 1.73676 25.6905 2.53375C26.1818 3.47952 26.1818 4.72204 26.1818 7.2071V19.338C26.1818 21.8231 26.1818 23.0656 25.6905 24.0113C25.2765 24.8083 24.6267 25.4582 23.8297 25.8722C22.8839 26.3635 21.6414 26.3635 19.1564 26.3635H7.02545C4.5404 26.3635 3.29788 26.3635 2.35211 25.8722C1.55512 25.4582 0.905289 24.8083 0.491287 24.0113C0 23.0656 0 21.8231 0 19.338V7.2071Z"
                fill="#051C09"
              />
              <path
                d="M8.63672 13.0734L11.802 16.2387L18.1324 9.9082"
                stroke="white"
                strokeWidth="2.7449"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label
              htmlFor="first_term"
              className="text-Dark w-[calc(100%-2.5rem)] cursor-pointer"
            >
              For institutional funders, we confirm that we meet all of the
              applicable regulatory standards and requirements for the locations
              where we fund businesses.
            </label>
          </div>
          <div className="flex gap-3 relative cursor-pointer">
            <input
              type="checkbox"
              className="absolute opacity-0 peer/radio "
              id="second_term"
              name="second_term"
              value="Yes"
              onChange={(e) =>
                setFundersFormVal({
                  ...fundersFormVal,
                  "Meet all qualifications":
                    fundersFormVal?.["Meet all qualifications"] === "Yes"
                      ? "No"
                      : "Yes",
                })
              }
              required
            />
            <div className="w-[27px] h-[27px] bg-white border-2 border-[#2222221A] rounded-[4px] peer-checked/radio:hidden"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              className="hidden peer-checked/radio:block z-20"
            >
              <path
                d="M0 7.2071C0 4.72204 0 3.47952 0.491287 2.53375C0.905289 1.73676 1.55512 1.08693 2.35211 0.672927C3.29788 0.181641 4.5404 0.181641 7.02545 0.181641H19.1564C21.6414 0.181641 22.8839 0.181641 23.8297 0.672927C24.6267 1.08693 25.2765 1.73676 25.6905 2.53375C26.1818 3.47952 26.1818 4.72204 26.1818 7.2071V19.338C26.1818 21.8231 26.1818 23.0656 25.6905 24.0113C25.2765 24.8083 24.6267 25.4582 23.8297 25.8722C22.8839 26.3635 21.6414 26.3635 19.1564 26.3635H7.02545C4.5404 26.3635 3.29788 26.3635 2.35211 25.8722C1.55512 25.4582 0.905289 24.8083 0.491287 24.0113C0 23.0656 0 21.8231 0 19.338V7.2071Z"
                fill="#051C09"
              />
              <path
                d="M8.63672 13.0734L11.802 16.2387L18.1324 9.9082"
                stroke="white"
                strokeWidth="2.7449"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label
              htmlFor="second_term"
              className="text-Dark w-[calc(100%-2.5rem)] cursor-pointer"
            >
              For individual funders, I confirm that I meet all of the
              applicable qualifications and requirements for an accredited
              investor *.
            </label>
          </div>
          <div className="flex gap-3 relative cursor-pointer">
            <input
              type="checkbox"
              className="absolute opacity-0 peer/radio "
              id="third_term"
              name="third_term"
              value="Yes"
              onChange={(e) =>
                setFundersFormVal({
                  ...fundersFormVal,
                  "Co-investing":
                    fundersFormVal?.["Co-investing"] === "Yes" ? "No" : "Yes",
                })
              }
            />
            <div className="w-[27px] h-[27px] bg-white border-2 border-[#2222221A] rounded-[4px] peer-checked/radio:hidden"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              className="hidden peer-checked/radio:block z-20"
            >
              <path
                d="M0 7.2071C0 4.72204 0 3.47952 0.491287 2.53375C0.905289 1.73676 1.55512 1.08693 2.35211 0.672927C3.29788 0.181641 4.5404 0.181641 7.02545 0.181641H19.1564C21.6414 0.181641 22.8839 0.181641 23.8297 0.672927C24.6267 1.08693 25.2765 1.73676 25.6905 2.53375C26.1818 3.47952 26.1818 4.72204 26.1818 7.2071V19.338C26.1818 21.8231 26.1818 23.0656 25.6905 24.0113C25.2765 24.8083 24.6267 25.4582 23.8297 25.8722C22.8839 26.3635 21.6414 26.3635 19.1564 26.3635H7.02545C4.5404 26.3635 3.29788 26.3635 2.35211 25.8722C1.55512 25.4582 0.905289 24.8083 0.491287 24.0113C0 23.0656 0 21.8231 0 19.338V7.2071Z"
                fill="#051C09"
              />
              <path
                d="M8.63672 13.0734L11.802 16.2387L18.1324 9.9082"
                stroke="white"
                strokeWidth="2.7449"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label
              htmlFor="third_term"
              className="text-Dark w-[calc(100%-2.5rem)] cursor-pointer"
            >
              * I am interested in co-investing with other accredited investors.
            </label>
          </div>
        </div>
        <button
          className="bg-Dark px-[36px] py-5 text-white md:mx-auto rounded-[4px]"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
