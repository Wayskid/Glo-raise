import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import ChooseCountry from "../../../components/reuseable/ChooseCountry.jsx";

export default function Two() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[1]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 3));
  }, []);

  return (
    <div>
      <ChooseCountry assessment={assessment} assessmentNumber="02" next="03" />
    </div>
  );
}
