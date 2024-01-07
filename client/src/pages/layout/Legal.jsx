import React from "react";
import SubscriberForm from "../../components/SubscriberForm";

export default function Legal() {
  return (
    <div>
      <section className="bg-Hazel">
        <p className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px] text-[58px] font-medium">
          Legal
        </p>
      </section>
      <section className="bg-White">
        <div className="w-[min(80rem,100%)] mx-auto pt-[56px] pb-[72px] md:pt-[80px] md:pb-[100px] lg:py-[90px] lg:pb-[132px] px-4 md:px-[60px] lg:px-[132px]">
          <div className="border-b-[3px] border-b-Light py-5 px-6">
            <input
              type="checkbox"
              id="terms"
              className="hidden peer/accordion"
              defaultChecked={true}
            />
            <label
              htmlFor="terms"
              className="grid grid-cols-[1fr_0.15fr] justify-between items-center cursor-pointer peer-checked/accordion:[&>*:last-child]:rotate-[180deg] text-Dark"
            >
              <p className="text-[22px] text-Dark">Terms & Conditions</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                className="justify-self-end transition-all"
              >
                <path
                  d="M7.5 11.75L15 19.25L22.5 11.75"
                  stroke="#051C09"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <div className="grid grid-rows-[0] overflow-hidden peer-checked/accordion:grid-rows-1">
              <p className="text-base font-light mt-5 mb-3 translate-all whitespace-pre-wrap text-Dark">
                Introduction These Website Standard Terms and Conditions written
                on this webpage shall manage your use of our website, Website
                Name accessible at Website.com. By using our Website, you
                accepted these terms and conditions in full. If you disagree
                with these terms and conditions or any part of these terms and
                conditions, you must not use our Website. Intellectual Property
                Rights Unless otherwise stated, we or our licensors own the
                intellectual property rights in the website and material on the
                website. Subject to the license below, all these intellectual
                property rights are reserved. License to use website You may
                view, download for caching purposes only, and print pages from
                the website for your own personal use, subject to the
                restrictions set out below and elsewhere in these terms and
                conditions. You must not: republish material from this website
                (including republication on another website); sell, rent or
                sub-license material from the website; show any material from
                the website in public; reproduce, duplicate, copy or otherwise
                exploit material on our website for a commercial purpose; edit
                or otherwise modify any material on the website; or redistribute
                material from this website except for content specifically and
                expressly made available for redistribution. Where content is
                specifically made available for redistribution, it may only be
                redistributed within your organisation. Acceptable use You must
                not use our website in any way that causes, or may cause, damage
                to the website or impairment of the availability or
                accessibility of the website; or in any way which is unlawful,
                illegal, fraudulent or harmful, or in connection with any
                unlawful, illegal, fraudulent or harmful purpose or activity.
                User content In these website standard terms and conditions,
                “your user content” shall mean material (including without
                limitation text, images, audio material, video material and
                audio-visual material) that you submit to this website, for
                whatever purpose. You grant to us a worldwide, irrevocable,
                non-exclusive, royalty-free license to use, reproduce, adapt,
                publish, translate and distribute your user content in any
                existing or future media. You also grant to us the right to
                sub-license these rights, and the right to bring an action for
                infringement of these rights. Your user content must not be
                illegal or unlawful, must not infringe any third party's legal
                rights, and must not be capable of amounting to a criminal
                offence or give rise to a civil liability or otherwise be
                contrary to the law of any country or territory where it is or
                may be published or received. You must not submit any user
                content to the website that is or has ever been the subject of
                any threatened or actual legal proceedings or other similar
                complaint. We reserve the right to edit or remove any material
                submitted to our website, or stored on our servers, or hosted or
                published upon our website. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut sit amet mollis tortor. Donec
                tortor dolor, commodo non dictum at, euismod vitae dui. Ut a
                massa eget nibh sagittis dignissim. Pellentesque id justo sit
                amet justo bibendum dictum in vel felis. Aenean iaculis vitae
                sapien eu dapibus. Cras fermentum risus a dui blandit, sit amet
                tempus nunc semper. Vivamus ac hendrerit purus. Integer ac metus
                non nulla gravida eleifend. Proin bibendum nulla enim, ut cursus
                tortor condimentum non. Pellentesque elementum tellus justo, ut
                semper est mollis nec. Cras eu augue commodo, rutrum dolor id,
                eleifend metus. Nullam pellentesque risus velit, in commodo nisi
                iaculis in. Vivamus ornare, erat id bibendum semper, erat augue
                placerat nibh, eu finibus eros dolor id felis.
              </p>
            </div>
          </div>
          <div className="border-b-[3px] border-b-Light py-5 px-6">
            <input
              type="checkbox"
              id="privacy"
              className="hidden peer/accordion"
            />
            <label
              htmlFor="privacy"
              className="grid grid-cols-[1fr_0.15fr] justify-between items-center cursor-pointer peer-checked/accordion:[&>*:last-child]:rotate-[180deg] text-Dark"
            >
              <p className="text-[22px] text-Dark">Privacy Policy</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                className="justify-self-end transition-all"
              >
                <path
                  d="M7.5 11.75L15 19.25L22.5 11.75"
                  stroke="#051C09"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <div className="grid grid-rows-[0] overflow-hidden peer-checked/accordion:grid-rows-1">
              <p className="text-base font-light mt-5 mb-3 translate-all whitespace-pre-wrap text-Dark">
                Introduction These Website Standard Terms and Conditions written
                on this webpage shall manage your use of our website, Website
                Name accessible at Website.com. By using our Website, you
                accepted these terms and conditions in full. If you disagree
                with these terms and conditions or any part of these terms and
                conditions, you must not use our Website. Intellectual Property
                Rights Unless otherwise stated, we or our licensors own the
                intellectual property rights in the website and material on the
                website. Subject to the license below, all these intellectual
                property rights are reserved. License to use website You may
                view, download for caching purposes only, and print pages from
                the website for your own personal use, subject to the
                restrictions set out below and elsewhere in these terms and
                conditions. You must not: republish material from this website
                (including republication on another website); sell, rent or
                sub-license material from the website; show any material from
                the website in public; reproduce, duplicate, copy or otherwise
                exploit material on our website for a commercial purpose; edit
                or otherwise modify any material on the website; or redistribute
                material from this website except for content specifically and
                expressly made available for redistribution. Where content is
                specifically made available for redistribution, it may only be
                redistributed within your organisation. Acceptable use You must
                not use our website in any way that causes, or may cause, damage
                to the website or impairment of the availability or
                accessibility of the website; or in any way which is unlawful,
                illegal, fraudulent or harmful, or in connection with any
                unlawful, illegal, fraudulent or harmful purpose or activity.
                User content In these website standard terms and conditions,
                “your user content” shall mean material (including without
                limitation text, images, audio material, video material and
                audio-visual material) that you submit to this website, for
                whatever purpose. You grant to us a worldwide, irrevocable,
                non-exclusive, royalty-free license to use, reproduce, adapt,
                publish, translate and distribute your user content in any
                existing or future media. You also grant to us the right to
                sub-license these rights, and the right to bring an action for
                infringement of these rights. Your user content must not be
                illegal or unlawful, must not infringe any third party's legal
                rights, and must not be capable of amounting to a criminal
                offence or give rise to a civil liability or otherwise be
                contrary to the law of any country or territory where it is or
                may be published or received. You must not submit any user
                content to the website that is or has ever been the subject of
                any threatened or actual legal proceedings or other similar
                complaint. We reserve the right to edit or remove any material
                submitted to our website, or stored on our servers, or hosted or
                published upon our website. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut sit amet mollis tortor. Donec
                tortor dolor, commodo non dictum at, euismod vitae dui. Ut a
                massa eget nibh sagittis dignissim. Pellentesque id justo sit
                amet justo bibendum dictum in vel felis. Aenean iaculis vitae
                sapien eu dapibus. Cras fermentum risus a dui blandit, sit amet
                tempus nunc semper. Vivamus ac hendrerit purus. Integer ac metus
                non nulla gravida eleifend. Proin bibendum nulla enim, ut cursus
                tortor condimentum non. Pellentesque elementum tellus justo, ut
                semper est mollis nec. Cras eu augue commodo, rutrum dolor id,
                eleifend metus. Nullam pellentesque risus velit, in commodo nisi
                iaculis in. Vivamus ornare, erat id bibendum semper, erat augue
                placerat nibh, eu finibus eros dolor id felis.
              </p>
            </div>
          </div>
          <div className="border-b-[3px] border-b-Light py-5 px-6">
            <input
              type="checkbox"
              id="copyright"
              className="hidden peer/accordion"
            />
            <label
              htmlFor="copyright"
              className="grid grid-cols-[1fr_0.15fr] justify-between items-center cursor-pointer peer-checked/accordion:[&>*:last-child]:rotate-[180deg] text-Dark"
            >
              <p className="text-[22px] text-Dark">Copyright Policy</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                className="justify-self-end transition-all"
              >
                <path
                  d="M7.5 11.75L15 19.25L22.5 11.75"
                  stroke="#051C09"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <div className="grid grid-rows-[0] overflow-hidden peer-checked/accordion:grid-rows-1">
              <p className="text-base font-light mt-5 mb-3 translate-all whitespace-pre-wrap text-Dark">
                Introduction These Website Standard Terms and Conditions written
                on this webpage shall manage your use of our website, Website
                Name accessible at Website.com. By using our Website, you
                accepted these terms and conditions in full. If you disagree
                with these terms and conditions or any part of these terms and
                conditions, you must not use our Website. Intellectual Property
                Rights Unless otherwise stated, we or our licensors own the
                intellectual property rights in the website and material on the
                website. Subject to the license below, all these intellectual
                property rights are reserved. License to use website You may
                view, download for caching purposes only, and print pages from
                the website for your own personal use, subject to the
                restrictions set out below and elsewhere in these terms and
                conditions. You must not: republish material from this website
                (including republication on another website); sell, rent or
                sub-license material from the website; show any material from
                the website in public; reproduce, duplicate, copy or otherwise
                exploit material on our website for a commercial purpose; edit
                or otherwise modify any material on the website; or redistribute
                material from this website except for content specifically and
                expressly made available for redistribution. Where content is
                specifically made available for redistribution, it may only be
                redistributed within your organisation. Acceptable use You must
                not use our website in any way that causes, or may cause, damage
                to the website or impairment of the availability or
                accessibility of the website; or in any way which is unlawful,
                illegal, fraudulent or harmful, or in connection with any
                unlawful, illegal, fraudulent or harmful purpose or activity.
                User content In these website standard terms and conditions,
                “your user content” shall mean material (including without
                limitation text, images, audio material, video material and
                audio-visual material) that you submit to this website, for
                whatever purpose. You grant to us a worldwide, irrevocable,
                non-exclusive, royalty-free license to use, reproduce, adapt,
                publish, translate and distribute your user content in any
                existing or future media. You also grant to us the right to
                sub-license these rights, and the right to bring an action for
                infringement of these rights. Your user content must not be
                illegal or unlawful, must not infringe any third party's legal
                rights, and must not be capable of amounting to a criminal
                offence or give rise to a civil liability or otherwise be
                contrary to the law of any country or territory where it is or
                may be published or received. You must not submit any user
                content to the website that is or has ever been the subject of
                any threatened or actual legal proceedings or other similar
                complaint. We reserve the right to edit or remove any material
                submitted to our website, or stored on our servers, or hosted or
                published upon our website. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut sit amet mollis tortor. Donec
                tortor dolor, commodo non dictum at, euismod vitae dui. Ut a
                massa eget nibh sagittis dignissim. Pellentesque id justo sit
                amet justo bibendum dictum in vel felis. Aenean iaculis vitae
                sapien eu dapibus. Cras fermentum risus a dui blandit, sit amet
                tempus nunc semper. Vivamus ac hendrerit purus. Integer ac metus
                non nulla gravida eleifend. Proin bibendum nulla enim, ut cursus
                tortor condimentum non. Pellentesque elementum tellus justo, ut
                semper est mollis nec. Cras eu augue commodo, rutrum dolor id,
                eleifend metus. Nullam pellentesque risus velit, in commodo nisi
                iaculis in. Vivamus ornare, erat id bibendum semper, erat augue
                placerat nibh, eu finibus eros dolor id felis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SubscriberForm />
    </div>
  );
}
