import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function TwentyNine() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[28]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 30));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="29" next="30" />
    </div>
  );
}
