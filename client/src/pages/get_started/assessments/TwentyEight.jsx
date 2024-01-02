import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function TwentyEight() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[27]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 29));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="28" next="29" />
    </div>
  );
}
