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
          <Route path="36" element={<ThreeToTwentyOne />}></Route>
          <Route path="37" element={<ThreeToTwentyOne />}></Route>
          <Route path="38" element={<ThreeToTwentyOne />}></Route>
          <Route path="39" element={<ThreeToTwentyOne />}></Route>
          <Route path="40" element={<ThreeToTwentyOne />}></Route>
          <Route path="41" element={<ThreeToTwentyOne />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
