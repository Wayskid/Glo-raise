import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFundersAssessmentProgress } from "../../store/features/appSlice.js";
import RankOrder from "../../components/reuseable/RankOrder.jsx";

export default function Thirteen2() {
  const dispatch = useDispatch();
  const assessment = useSelector(
    (state) => state.app.fundersAssessmentFile[12]
  );

  useEffect(() => {
    dispatch(setFundersAssessmentProgress(5.88 * 14));
  }, []);

  return (
    <div>
      <RankOrder
        assessment={assessment}
        assessmentNumber="13"
        next="14"
        forFunders={true}
      />
    </div>
  );
}
