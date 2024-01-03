import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function ThirtyNine() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[38]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 40));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="39" next="40" />
    </div>
  );
}
