import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFundersAssessmentProgress } from "../../store/features/appSlice.js";
import SelectOneRadio from "../../components/reuseable/SelectOneRadio.jsx";

export default function Ten() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.fundersAssessmentFile[9]);

  useEffect(() => {
    dispatch(setFundersAssessmentProgress(5.88 * 11));
  }, []);

  return (
    <div>
      <SelectOneRadio
        assessment={assessment}
        assessmentNumber="10"
        next="11"
        forFunders={true}
      />
    </div>
  );
}
