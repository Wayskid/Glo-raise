import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFundersAssessmentProgress } from "../../store/features/appSlice.js";
import ChooseCountry from "../../components/reuseable/ChooseCountry.jsx";

export default function Two2() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.fundersAssessmentFile[1]);

  useEffect(() => {
    dispatch(setFundersAssessmentProgress(5.88 * 3));
  }, []);

  return (
    <div>
      <ChooseCountry
        assessment={assessment}
        assessmentNumber="02"
        next="03"
        forFunders={true}
        isMulti={true}
      />
    </div>
  );
}
