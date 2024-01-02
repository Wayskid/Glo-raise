import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import RankOrder from "../../../components/reuseable/RankOrder.jsx";

export default function TwentyFour() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[23]);

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * 25));
  }, []);

  return (
    <div>
      <RankOrder assessment={assessment} assessmentNumber="24" next="25" />
    </div>
  );
}
