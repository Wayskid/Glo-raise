import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFundersAssessmentProgress } from "../../store/features/appSlice.js";
import RankOrder from "../../components/reuseable/RankOrder.jsx";

export default function Nine() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[8]);

  useEffect(() => {
    dispatch(setFundersAssessmentProgress(5.88 * 10));
  }, []);

  return (
    <div>
      <RankOrder
        assessment={assessment}
        assessmentNumber="09"
        next="10"
        forFunders={true}
      />
    </div>
  );
}
