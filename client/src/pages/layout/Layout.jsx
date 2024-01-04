import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import {
  setFoundersAssessmentStarted,
  setFundersAssessmentStarted,
} from "../../store/features/appSlice";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFundersAssessmentStarted(false));
    dispatch(setFoundersAssessmentStarted(false));
  }, []);
  return (
    <div className="h-full">
      <Nav />
      <div className="mt-[93px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
