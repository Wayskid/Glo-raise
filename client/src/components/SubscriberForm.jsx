import React, { useState } from "react";
import { useAddSubscriberMutation } from "../services/appApi";

export default function SubscriberForm() {
  const [subscribeApi] = useAddSubscriberMutation();
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    subscribeApi({
      body: {
        email: subscriberEmail,
      },
    })
      .unwrap()
      .then((result) => {
        setSubscribed(true);
        setLoading(false);
      })
      .catch((err) => {
        setSubscribed(false);
        setLoading(false);
      });
  }
  return (
    <section className="bg-Hazel">
      <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] grid gap-8 md:gap-10 base:gap-[60px] base:flex base:justify-between items-center">
        <div className="grid gap-8 md:gap-12 base:md:gap-[60px]">
          <p className="text-Dark text-[38px] font-semibold text-center md:text-left leading-tight">
            Stay informed
          </p>
          <p className="text-Dark text-xl text-center leading-tight md:text-left">
            Sign up to stay up-to-date
            <br /> and access exclusive resources.
          </p>
        </div>
        {!subscribed ? (
          <form
            onSubmit={onSubmitForm}
            className="grid md:flex rounded-[4px] border-[3px] border-Dark mx-auto md:mr-auto md:ml-0 base:mr-0"
          >
            <input
              type="email"
              className="p-5 text-[18px] outline-none font-semibold text-Hazel bg-white"
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Email address"
              required
            />
            <button
              className="bg-Dark px-[36px] py-5 text-white [font-family:'Roboto',sans-serif;] shrink-0"
              disabled={loading}
            >
              Get Notified
            </button>
          </form>
        ) : (
          <p className="text-3xl mx-auto md:mr-auto md:ml-0 base:mr-0">
            Thank you!
          </p>
        )}
      </div>
    </section>
  );
}
