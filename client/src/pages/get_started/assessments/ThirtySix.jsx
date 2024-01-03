import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import RankOrder from "../../../components/reuseable/RankOrder.jsx";

export default function ThirtySix() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[35]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 37));
  }, []);

  return (
    <div>
      <RankOrder assessment={assessment} assessmentNumber="36" next="37" />
    </div>
  );
}
