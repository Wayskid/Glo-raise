import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function ThirtyThree() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[32]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 34));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="33" next="34" />
    </div>
  );
}
