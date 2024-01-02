import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function TwentyFive() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[24]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 26));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="25" next="26" />
    </div>
  );
}
