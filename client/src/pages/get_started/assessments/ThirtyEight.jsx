import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function ThirtyEight() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[37]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 39));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="38" next="39" />
    </div>
  );
}
