import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function TwentyTwo() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[21]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 23));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="22" next="23" />
    </div>
  );
}
