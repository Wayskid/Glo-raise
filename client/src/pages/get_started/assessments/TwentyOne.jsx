import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectMany from "../../../components/reuseable/SelectMany.jsx";

export default function TwentyOne() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[20]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 22));
  }, []);

  return (
    <div>
      <SelectMany assessment={assessment} assessmentNumber="21" next="22" />
    </div>
  );
}
