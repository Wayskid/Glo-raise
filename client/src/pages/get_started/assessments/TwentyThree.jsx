import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import RankOrder from "../../../components/reuseable/RankOrder.jsx";

export default function TwentyThree() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[22]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 24));
  }, []);

  return (
    <div>
      <RankOrder assessment={assessment} assessmentNumber="23" next="24" />
    </div>
  );
}
