import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Get_Started from "./pages/get_started/Get_Started";
import One from "./pages/get_started/assessments/One";
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
import TwentyFour from "./pages/get_started/assessments/TwentyFour";
import TwentyFive from "./pages/get_started/assessments/TwentyFive";
import TwentyEight from "./pages/get_started/assessments/TwentyEight";
import TwentyNine from "./pages/get_started/assessments/TwentyNine";
import ThirtyOne from "./pages/get_started/assessments/ThirtyOne";
import ThirtyTwo from "./pages/get_started/assessments/ThirtyThree";
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
import Free_Success from "./pages/get_started/Free_Success";
import Interest_Radar from "./pages/funders/Interest_Radar";
import OneAndMost from "./pages/funders/OneAndMost";

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
          <Route path="01" element={<One />}></Route>
          {/*Remember to remove 1 */}
          <Route path=":assessmentIndex" element={<ThreeToTwentyOne />}></Route>
          <Route path="13" element={<Thirteen />}></Route>
          <Route path="22" element={<TwentyTwo />}></Route>
          <Route path="23" element={<TwentyThree />}></Route>
          <Route path="24" element={<TwentyFour />}></Route>
          <Route path="25" element={<TwentyFive />}></Route>
          <Route path="28" element={<TwentyEight />}></Route>
          <Route path="29" element={<TwentyNine />}></Route>
          <Route path="31" element={<ThirtyOne />}></Route>
          <Route path="33" element={<ThirtyThree />}></Route>
          <Route path="35" element={<ThirtyFive />}></Route>
          <Route path="36" element={<ThirtySix />}></Route>
          <Route path="37" element={<ThirtySeven />}></Route>
          <Route path="38" element={<ThirtyEight />}></Route>
          <Route path="39" element={<ThirtyNine />}></Route>
          <Route path="41" element={<FortyOne />}></Route>
          <Route path="plan" element={<Plan />}></Route>
          <Route path="premium_checkout" element={<Prem_Checkout />}></Route>
          <Route path="free_checkout" element={<Free_Checkout />}></Route>
          <Route path="founders_success" element={<Free_Success />}></Route>
          <Route path="funders">
            <Route index element={<Interest_Radar />}></Route>
            <Route
              path=":fundersAssessmentIndex"
              element={<OneAndMost />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
