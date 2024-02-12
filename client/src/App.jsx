import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Get_Started from "./pages/get_started/Get_Started";
import Home from "./pages/layout/Home";
import For_Funders from "./pages/layout/For_Funders";
import About from "./pages/layout/About";
import Legal from "./pages/layout/Legal";
import Layout from "./pages/layout/Layout";
import Layout_Two from "./pages/get_started/Layout_Two";
import ThreeToTwentyOne from "./pages/get_started/assessments/ThreeToTwentyOne";
import TwentyTwo from "./pages/get_started/assessments/TwentyTwo";
import TwentyThree from "./pages/get_started/assessments/TwentyThree";
import Thirteen from "./pages/get_started/assessments/Thirteen";
import Thirteen2 from "./pages/funders/Thirteen";
import TwentyFour from "./pages/get_started/assessments/TwentyFour";
import TwentyFive from "./pages/get_started/assessments/TwentyFive";
import TwentyNine from "./pages/get_started/assessments/TwentyNine";
import ThirtyOne from "./pages/get_started/assessments/ThirtyOne";
import ThirtyThree from "./pages/get_started/assessments/ThirtyThree";
import ThirtyFive from "./pages/get_started/assessments/ThirtyFive";
import ThirtySix from "./pages/get_started/assessments/ThirtySix";
import ThirtySeven from "./pages/get_started/assessments/ThirtySeven";
import ThirtyEight from "./pages/get_started/assessments/ThirtyEight";
import ThirtyNine from "./pages/get_started/assessments/ThirtyNine";
import FortyOne from "./pages/get_started/assessments/FortyOne";
import Plan from "./pages/get_started/Plan";
import Prem_Checkout from "./pages/get_started/Prem_Checkout";
import Free_Checkout from "./pages/get_started/Free_Checkout";
import Founders_Success from "./pages/get_started/Founders_Success";
import Interest_Radar from "./pages/funders/Interest_Radar";
import OneAndMost from "./pages/funders/OneAndMost";
import Four from "./pages/funders/Four";
import Ten from "./pages/funders/Ten";
import Nine from "./pages/funders/Nine";
import Funders_Form from "./pages/funders/Funders_Form";
import Funders_Success from "./pages/funders/Funders_Success";
import Two2 from "./pages/funders/Two";
import Two from "./pages/get_started/assessments/Two";
import FortyTwo from "./pages/get_started/assessments/FortyTwo";
import NotFound from "./pages/NotFound";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/for_funders" element={<For_Funders />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/legal" element={<Legal />}></Route>
        </Route>
        <Route path="/get_started" element={<Layout_Two />}>
          <Route index element={<Get_Started />}></Route>
          <Route path=":assessmentIndex" element={<ThreeToTwentyOne />}></Route>
          <Route path="02" element={<Two />}></Route>
          <Route path="13" element={<Thirteen />}></Route>
          <Route path="22" element={<TwentyTwo />}></Route>
          <Route path="23" element={<TwentyThree />}></Route>
          <Route path="24" element={<TwentyFour />}></Route>
          <Route path="25" element={<TwentyFive />}></Route>
          <Route path="29" element={<TwentyNine />}></Route>
          <Route path="31" element={<ThirtyOne />}></Route>
          <Route path="33" element={<ThirtyThree />}></Route>
          <Route path="35" element={<ThirtyFive />}></Route>
          <Route path="36" element={<ThirtySix />}></Route>
          <Route path="37" element={<ThirtySeven />}></Route>
          <Route path="38" element={<ThirtyEight />}></Route>
          <Route path="39" element={<ThirtyNine />}></Route>
          <Route path="41" element={<FortyOne />}></Route>
          <Route path="42" element={<FortyTwo />}></Route>
          <Route path="plan" element={<Plan />}></Route>
          <Route path="premium_checkout" element={<Prem_Checkout />}></Route>
          <Route path="free_checkout" element={<Free_Checkout />}></Route>
          <Route path="founders_success" element={<Founders_Success />}></Route>
          <Route path="funders">
            <Route index element={<Interest_Radar />}></Route>
            <Route
              path=":fundersAssessmentIndex"
              element={<OneAndMost />}
            ></Route>
            <Route path="02" element={<Two2 />}></Route>
            <Route path="04" element={<Four />}></Route>
            <Route path="09" element={<Nine />}></Route>
            <Route path="10" element={<Ten />}></Route>
            <Route path="13" element={<Thirteen2 />}></Route>
            <Route path="funders_form" element={<Funders_Form />}></Route>
            <Route path="funders_success" element={<Funders_Success />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
