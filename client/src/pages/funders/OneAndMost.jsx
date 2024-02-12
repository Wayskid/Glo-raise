import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFundersAssessmentProgress } from "../../store/features/appSlice.js";
import { useParams } from "react-router-dom";
import SelectMany from "../../components/reuseable/SelectMany.jsx";

export default function OneAndMost() {
  const dispatch = useDispatch();
  const { fundersAssessmentIndex } = useParams();
  const assessment = useSelector((state) =>
    state.app.fundersAssessmentFile.find(
      (item) => item.number === fundersAssessmentIndex
    )
  );

  useEffect(() => {
    dispatch(
      setFundersAssessmentProgress(5.88 * (+fundersAssessmentIndex + 1))
    );
  }, [fundersAssessmentIndex]);

  return (
    assessment && (
      <div key={fundersAssessmentIndex}>
        <SelectMany
          assessment={assessment}
          assessmentNumber={fundersAssessmentIndex}
          forFunders={true}
          next={
            fundersAssessmentIndex < 15
              ? ("0" + (+fundersAssessmentIndex + 1)).slice(-2)
              : "funders_form"
          }
        />
      </div>
    )
  );
}
