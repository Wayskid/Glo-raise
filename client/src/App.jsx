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
          {/* <Route path={`03`} element={<Three />}></Route> */}
          <Route path=":assessmentIndex" element={<ThreeToTwentyOne />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
