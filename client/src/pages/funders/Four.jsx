import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectOneRadio from "../../components/reuseable/SelectOneRadio.jsx";
import { setFundersAssessmentProgress } from "../../store/features/appSlice.js";

export default function Four() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[3]);

  useEffect(() => {
    dispatch(setFundersAssessmentProgress(5.88 * 5));
  }, []);

  return (
    <div>
      <SelectOneRadio
        assessment={assessment}
        assessmentNumber="04"
        next="05"
        forFunders={true}
      />
    </div>
  );
}
