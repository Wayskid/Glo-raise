import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function Thirteen() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[12]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 14));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="13" next="14" />
    </div>
  );
}
