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
              <p className="text-[22px] text-Dark">Terms of Use</p>
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
              <div className="grid gap-10">
                <div className="mt-3 grid gap-2">
                  <p className="text-sm text-gray-600 font-sans">
                    Last Updated January 26, 2024
                  </p>
                  <p className="text-sm text-gray-600 font-serif">
                    PLEASE READ THE FOLLOWING CAREFULLY BEFORE USING THE
                    GLORAISE.COM WEBSITE. BY USING THE SITE, YOU AGREE THAT SUCH
                    USE CONSTITUTES YOUR ASSENT TO THE TERMS OF THIS AGREEMENT.
                    IF YOUR ACCEPTANCE IS ON BEHALF OF AN ENTITY, YOU REPRESENT
                    AND WARRANT THAT YOU HAVE THE AUTHORITY TO BIND THAT ENTITY
                    TO OUR AGREEMENTS. IN THAT EVENT, “YOU” AND “YOUR” WILL
                    REFER AND APPLY TO THAT ENTITY AS WELL AS TO YOURSELF. IF
                    YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT USE THE SITE.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">LEGAL NOTICES</p>
                  <p className="">
                    The website gloraise.com (the “website” or “site” or
                    “service”) is provided as a service to our users. Please
                    carefully review the following basic rules that govern your
                    use of the website. Please note that your use of the site
                    constitutes your unconditional agreement to follow and be
                    bound by these Terms of Use. If you do not agree to them, do
                    not use the website, provide any materials to the site or
                    download any materials from it. Gloraise.com reserves the
                    right to update or modify these Terms at any time without
                    prior notice to you (the “User”). Your use of the site
                    following any such change constitutes your unconditional
                    agreement to follow and be bound by these Terms as changed.
                    We encourage you to review these Terms of Use whenever you
                    use this website. These Terms of Use do not extend to any
                    linked third-party sites. In this Agreement, “we”, “us” and
                    “GLORAISE.com” mean Glo-raise, LLC (Glo-raise) and “you”
                    means the person using the service, your administrators,
                    executors, successors and assigns, as well as the
                    organization or company on whose behalf you may be acting
                    when you access this site. These Terms contain the entire
                    agreement (the “Agreement”) with respect to this site. Any
                    rights not expressly granted herein are reserved.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">
                    PERMITTED AND PROHIBITED USES
                  </p>
                  <p className="">
                    You may use the website for the sole purpose of accessing
                    the site and content presented therein and to aid in the
                    understanding and application of its concepts and research
                    to your business and personal life. You may not use the
                    website to violate any applicable local, state, national, or
                    international law, including without limitation any
                    applicable laws relating to antitrust or other illegal trade
                    or business practices, federal and state securities laws,
                    regulations promulgated by the U.S. Securities and Exchange
                    Commission, any rules of any national or other securities
                    exchange, and any U.S. laws, rules, and regulations
                    governing the export and re-export of commodities or
                    technical data. You may not upload or transmit any material
                    that infringes or misappropriates any person's copyright,
                    patent, trademark, or trade secret, or disclose via the
                    website any information the disclosure of which would
                    constitute a violation of any confidentiality obligation on
                    your part. You may not upload any viruses, worms, Trojan
                    horses, or other forms of harmful computer code. You're
                    strictly prohibited from communicating on or through this
                    site any unlawful, harmful, offensive, threatening, abusive,
                    libelous, harassing, defamatory, vulgar, obscene, profane,
                    hateful, fraudulent, sexually explicit, racially,
                    ethnically, or otherwise objectionable material of any sort,
                    including, but not limited to, any material that encourages
                    conduct that would constitute a criminal offense, give rise
                    to civil liability, or otherwise violate any applicable
                    local, state, national, or international law. As a condition
                    for accessing the site and using the site, you agree not to
                    (i) reproduce, duplicate, copy, sell, resell, or exploit for
                    any commercial purposes any portion of the content appearing
                    on the site other than as expressly allowed under these
                    Terms of Use; (ii) use the materials in connection with, or
                    to transmit, any unsolicited communications or emails.
                    <br />
                    <br />
                    You may not use the website in a way that harms Glo-raise or
                    its designated representatives or entities, affiliates or
                    vendors, or other users of the site.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">
                    COPYRIGHT AND LIMITED LICENSE TO SITE AND SITE MATERIALS
                  </p>
                  <p className="">
                    You are granted a limited, nonexclusive license (without the
                    right to sublicense) to download and reproduce site material
                    documents that are specifically made available on the site
                    for the general public to download ("public documents"),
                    provided that any copyright notices on each page of public
                    document reproductions are reproduced in full and that you
                    agree to comply with all such notices. Such license is
                    subject to these Terms of Use and excludes: (i) any resale
                    of the site or any site materials; (ii) any distribution,
                    public performance or public display of any site materials,
                    other than sharing copies of public documents as provided by
                    these Terms of Use; (iii) modifying or otherwise making any
                    derivative uses of the site or any site materials; (iv) use
                    of any data mining, robots or similar data gathering or
                    extraction, automated account registration, or account
                    utilization methods; or (v) downloading (other than the page
                    caching) of any portion of the site, the site materials
                    (except as provided above) or any information contained
                    therein. Any use of the site or site materials other than as
                    specifically authorized herein is strictly prohibited and
                    will terminate the foregoing license.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">USER SUBMISSIONS</p>
                  <p className="">
                    By posting, submitting or transmitting any material,
                    information, or other communication ("Content") directly to
                    gloraise.com, you (a) agree that such Content will be
                    considered non-confidential and non-proprietary, (b) agree
                    that gloraise.com will be under no obligation of any kind
                    with respect to such information, and (c) grant, and hereby
                    grant, to gloraise.com a perpetual, worldwide, nonexclusive,
                    royalty-free, fully sublicensable and irrevocable license to
                    reproduce, make derivative works from, use, disclose, and
                    distribute the Content to others without limitation. At our
                    sole election, gloraise.com may provide authorship
                    attribution by listing your name. Further, you agree to
                    waive and forego asserting any moral rights you may have in
                    the Content. By submitting Content to gloraise.com, you
                    represent and warrant that you have authority to provide
                    such Content to gloraise.com and grant the rights to the
                    Content granted herein, and that doing so does not and will
                    not constitute the infringement or misappropriation of the
                    trade secrets or other confidential information of you or
                    any third party.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">
                    USE OF PERSONALLY IDENTIFIABLE INFORMATION
                  </p>
                  <p className="">
                    You agree to provide true, accurate, current, and complete
                    information when providing information to our website, such
                    as signing up to receive correspondence from us. If you
                    provide any information that is fraudulent, untrue,
                    inaccurate, incomplete, or not current, or we have
                    reasonable grounds to suspect that such information is
                    fraudulent, untrue, inaccurate, incomplete, or not current,
                    we reserve the right to remove your information from our
                    database without notice and to refuse any and all current
                    and future use of this site.
                    <br />
                    <br />
                    If you request correspondence from us, you may be asked to
                    supply your name and email address and other information.
                    You grant tomhunaker.com, its affiliated companies, and all
                    other persons or entities involved in the operation of the
                    site or related operations the right to transmit, monitor,
                    retrieve, store, and use your information in connection with
                    the operation of the site and in the provision of services
                    to you. Gloraise.com cannot and does not assume any
                    responsibility or liability for any information you submit,
                    or your or third parties' use or misuse of information
                    transmitted or received using this site.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">INDEMNIFICATION</p>
                  <p className="">
                    You agree to defend, indemnify and hold harmless Glo-raise,
                    his designated entities, their employees, directors,
                    officers, affiliated companies, agents, vendors or suppliers
                    from and against any and all claims, damages, costs and
                    expenses, including reasonable attorneys' fees, arising from
                    or related to your use or misuse of the site, including,
                    without limitation, your violation of these Terms of Use,
                    your infringement or that of any other subscriber or user of
                    your account, of any intellectual property right or other
                    right of any person or entity.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">TERMINATION</p>
                  <p className="">
                    These Terms of Use are effective until terminated by either
                    party. If you no longer agree to be bound by these Terms,
                    you must cease use of this website. If you're dissatisfied
                    with this website, its content, or any of these terms,
                    conditions, and policies, your sole legal remedy is to
                    discontinue using this website.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">WARRANTY DISCLAIMER</p>
                  <p className="">
                    THE GLORAISE.COM WEBSITE AND ASSOCIATED MATERIALS ARE
                    PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULL
                    EXTENT PERMISSIBLE BY APPLICABLE LAW, GLORAISE.COM DISCLAIMS
                    ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                    LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND
                    FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENTOF
                    INTELLECTUAL PROPERTY. GLORAISE.COM MAKES NO REPRESENTATIONS
                    OR WARRANTY THAT THE SITE WILL MEET YOUR REQUIREMENTS, OR
                    THAT YOUR USE OF THE SITE WILL BE UNINTERRUPTED, TIMELY,
                    SECURE, OR ERROR FREE; NOR DOES GLORAISE.COM MAKE ANY
                    REPRESENTATION OR WARRANTY AS TO THE RESULTS THAT MAY BE
                    OBTAINED FROM THE USE OF THE SITE. GLORAISE.COM MAKES NO
                    REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR
                    IMPLIED, AS TO THE OPERATION OF THE SITE OR THE INFORMATION,
                    CONTENT, MATERIALS, OR PRODUCTS OR SERVICES INCLUDED ON THIS
                    SITE.
                    <br />
                    <br />
                    IN NO EVENT SHALL GLO-RAISE, LLC OR ANY OF ITS AFFILIATED
                    ENTITIES, EMPLOYEES, DIRECTORS, OFFICERS, AGENTS, VENDORS OR
                    SUPPLIERS BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING,
                    WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, BUSINESS
                    INTERRUPTION, LOSS OF INFORMATION) ARISING OUT OF THE USE,
                    MISUSE OF OR INABILITY TO USE THE SITE, EVEN IF GLORAISE.COM
                    HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS
                    DISCLAIMER CONSTITUTES AN ESSENTIAL PART OF THIS AGREEMENT.
                    BECAUSE SOME JURISDICTIONS PROHIBIT THE EXCLUSION OR
                    LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL
                    DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                    <br />
                    <br />
                    YOU UNDERSTAND AND AGREE THAT ANY CONTENT DOWNLOADED OR
                    OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS AT YOUR
                    OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY
                    RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS
                    OF DATA OR BUSINESS INTERRUPTION THAT RESULTS FROM THE
                    DOWNLOAD OF CONTENT. GLO-RAISE SHALL NOT BE RESPONSIBLE FOR
                    ANY LOSS OR DAMAGE CAUSED, OR ALLEGED TO HAVE BEEN CAUSED,
                    DIRECTLY OR INDIRECTLY, BY THE INFORMATION OR IDEAS
                    CONTAINED, SUGGESTED OR REFERENCED IN OR APPEARING ON THE
                    SITE. YOUR PARTICIPATION IN THE SITE IS SOLELY AT YOUR OWN
                    RISK. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
                    OBTAINED BY YOU FROM GLORAISE.COM OR THROUGH GLORAISE.COM,
                    ITS EMPLOYEES, OR THIRD PARTIES SHALL CREATE ANY WARRANTY
                    NOT EXPRESSLY MADE HEREIN. YOU ACKNOWLEDGE, BY YOUR USE OF
                    THIS WEBSITE, THAT YOUR USE OF THE SITE IS AT YOUR SOLE
                    RISK.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">LIABILITY LIMITATION</p>
                  <p className="">
                    UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL OR EQUITABLE
                    THEORY, WHETHER IN TORT, CONTRACT, NEGLIGENCE, STRICT
                    LIABILITY OR OTHERWISE, SHALL GLORAISE.COM OR ANY OF ITS
                    AFFILIATED COMPANIES, EMPLOYEES, DIRECTORS, OFFICERS,
                    AGENTS, VENDORS OR SUPPLIERS BE LIABLE TO YOU OR TO ANY
                    OTHER PERSON FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR
                    CONSEQUENTIAL LOSSES OR DAMAGES OF ANY NATURE ARISING OUT OF
                    OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE
                    WEBSITE OR FOR ANY BREACH OF SECURITY ASSOCIATED WITH THE
                    TRANSMISSION OF SENSITIVE INFORMATION THROUGH THE SITE OR
                    FOR ANY INFORMATION OBTAINED THROUGH THE SITE, INCLUDING,
                    WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF
                    GOODWILL, LOSS OR CORRUPTION OF DATA, WORK STOPPAGE,
                    ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION,
                    EVEN IF AN AUTHORIZED REPRESENTATIVE OF GLORAISE.COM HAS
                    BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF
                    SUCH DAMAGES.
                    <br />
                    <br />
                    GLORAISE.COM'S OR DESIGNATED ENTITIES’ TOTAL CUMULATIVE
                    LIABILITY FOR ANY AND ALL CLAIMS IN CONNECTION WITH THE
                    WEBSITE WILL NOT EXCEED TWENTY U.S. DOLLARS ($20.00). YOU
                    AGREE AND ACKNOWLEDGES THAT THE FOREGOING LIMITATIONS ON
                    LIABILITY ARE AN ESSENTIAL BASIS OF THE BARGAIN AND THAT
                    GLORAISE.COM WOULD NOT PROVIDE THE WEBSITE ABSENT SUCH
                    LIMITATION.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">GENERAL</p>
                  <p className="">
                    Gloraise.com is based in the United States. Gloraise.com
                    makes no claims that the content on the site is appropriate
                    or may be downloaded outside of the United States. Access to
                    the site materials may not be legal by certain persons or in
                    certain countries. If you access the site from outside the
                    United States, you do so at your own risk and are
                    responsible for compliance with the laws of your
                    jurisdiction. These Terms are governed in all respects by
                    the laws of the State of Arizona, excluding that state's
                    conflicts of laws provisions. The provisions of the UN
                    Convention on Contracts for the International Sale of Goods
                    will not apply to these Terms. A party may give notice to
                    the other party only in writing at that party's principal
                    place of business, attention of that party's principal legal
                    officer, or at such other address or by such other method as
                    the party shall specify in writing. Notice shall be deemed
                    given upon personal delivery or facsimile, or, if sent by
                    certified mail with postage prepaid, 7 business days after
                    the date of mailing, or, if sent by international overnight
                    courier with postage prepaid, 7 business days after the date
                    of mailing. If any provision herein is held to be
                    unenforceable, the remaining provisions will continue in
                    full force without being affected in any way. Further, the
                    parties agree to replace such unenforceable provision with
                    an enforceable provision that most closely approximates the
                    intent and economic effect of the unenforceable provision.
                    Section headings are for reference purposes only and do not
                    define, limit, construe or describe the scope or extent of
                    such section. The failure of gloraise.com to act with
                    respect to a breach of this Agreement by you or others does
                    not constitute a waiver and shall not limit Glo-raise's
                    rights with respect to such breach or any subsequent
                    breaches. Any action or proceeding arising out of or related
                    to this Agreement or your use of this site must be brought
                    in the state or federal courts of the State of Arizona, and
                    you consent to the exclusive personal jurisdiction and venue
                    of such courts. Any cause of action you may have with
                    respect to your use of this site must be commenced within
                    one (1) year after the claim or cause of action arises.
                    These Terms set forth the entire understanding and agreement
                    of the parties, and supersedes any and all oral or written
                    agreements or understandings between the parties, as to
                    their subject matter. The waiver of a breach of any
                    provision of this Agreement shall not be construed as a
                    waiver of any other or subsequent breach.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">LINKS TO OTHER MATERIALS</p>
                  <p className="">
                    This site may contain links to sites owned or operated by
                    independent third parties. These links are provided for your
                    convenience and reference only. We do not control such sites
                    and, therefore, we are not responsible for any content
                    posted on these sites. The fact that gloraise.com offers
                    such links should not be construed in any way as an
                    endorsement, authorization, or sponsorship of that site, its
                    content or the companies or products referenced therein, and
                    gloraise.com reserves the right to note its lack of
                    affiliation, sponsorship, or endorsement on this site. If
                    you decide to access any of the third-party sites linked to
                    this site, you do this entirely at your own risk. Because
                    some sites employ automated search results or otherwise link
                    you to sites containing information that may be deemed
                    inappropriate or offensive, gloraise.com cannot be held
                    responsible for the accuracy, copyright compliance,
                    legality, or decency of material contained in third party
                    sites, and you hereby irrevocably waive any claim against us
                    with respect to such sites.
                  </p>
                </div>
                <div className="text-base font-light mb-3 translate-all whitespace-pre-wrap text-Dark">
                  <p className="font-semibold mb-1">LINKS TO OTHER MATERIALS</p>
                  <p className="">
                    This site may contain links to sites owned or operated by
                    independent third parties. These links are provided for your
                    convenience and reference only. We do not control such sites
                    and, therefore, we are not responsible for any content
                    posted on these sites.
                  </p>
                </div>
              </div>
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
              <div className="text-base font-light mt-5 mb-3 translate-all whitespace-pre-wrap text-Dark">
                Gloraise.com (Glo-raise) and its designated entities collect
                data from you, through our interactions with you and through our
                services. You provide some of this data directly, and we get
                some of it by collecting data about your interactions, use and
                experiences with our site. The data we collect depends on the
                context of your interactions with gloraise.com and the choices
                you make, including the services and features you use.
                <br />
                <br />
                When we ask you to provide personal data, you can decline. Many
                of our experiences require some personal data to provide you
                with a service. If you choose not to provide data necessary to
                provide you with a feature, you cannot use that feature.
                Likewise, where we need to collect personal data by law or to
                enter into or carry out a contract with you, and you do not
                provide the data, we will not be able to enter into the
                contract; or if this relates to an existing product you’re
                using, we may have to suspend or cancel it. We will notify you
                if this is the case at the time. Where providing the data is
                optional, and you choose not to share personal data, features
                like personalization that use such data will not work for you.
                <br />
                <br />
                Gloraise.com uses the data we collect to provide you rich,
                interactive experiences. In particular, we use data to:
                <br />
                <br />
                <ul className="list-inside list-disc">
                  <li>
                    Provide our services, which includes updating, securing, and
                    troubleshooting, as well as providing support. It also
                    includes sharing data, when it is required to provide the
                    service or carry out the transactions you request;
                  </li>
                  <li> Improve and develop our services;</li>
                  <li>
                    Personalize our services and make recommendations; and
                  </li>
                  <li>
                    Advertise and market to you, which includes sending
                    promotional communications, targeting advertising, and
                    presenting you relevant offers.
                  </li>
                </ul>
                <br />
                We also use the data to analyze our performance, meet our legal
                obligations, and do research.
                <br />
                <br />
                We share your personal data with your consent or to complete any
                transaction or provide any service you have requested or
                authorized. We also share data with designated affiliates and
                subsidiaries; with vendors working on our behalf; when required
                by law or to respond to legal process; to protect our customers;
                to protect lives; to maintain the security of our products; and
                to protect our rights and property.
                <br />
                <br />
                Cookies are small text files placed on your device to store data
                that can be recalled by a web server in the domain that placed
                the cookie. We use cookies and similar technologies for storing
                and honoring your preferences and settings, enabling you to
                sign-in, providing interest-based advertising, combating fraud,
                analyzing how our products perform, and fulfilling other
                legitimate purposes.
                <br />
                <br />
                Personal data associated with your gloraise.com account includes
                credentials, name and contact data, payment data, device and
                usage data, your contacts, information about your activities,
                and your interests and favorites.
              </div>
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
              <p className="text-[22px] text-Dark">FUTURE CHANGES</p>
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
                If our Privacy Policy changes at some time in the future we will
                post the policy changes to this page on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SubscriberForm />
    </div>
  );
}
