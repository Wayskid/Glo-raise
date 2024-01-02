import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import SelectOneRadio from "../../../components/reuseable/SelectOneRadio.jsx";

export default function ThreeToTwentyOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assessmentIndex } = useParams();
  const assessment = useSelector((state) =>
    state.app.assessmentFile.find((item) => item.number === assessmentIndex)
  );

  useEffect(() => {
    dispatch(setAssessmentProgress(2.38 * (+assessmentIndex + 1)));
  }, [assessmentIndex]);

  return (
    assessment && (
      <div>
        <SelectOneRadio
          assessment={assessment}
          assessmentNumber={assessmentIndex}
          next={("0" + (+assessmentIndex + 1)).slice(-2)}
        />
      </div>
    )
  );
}
