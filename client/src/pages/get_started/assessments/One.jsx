import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import SelectOneRadio from "../../../components/reuseable/SelectOneRadio.jsx";

export default function One() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[0]);

  useEffect(() => {
    dispatch(setAssessmentProgress(4.76));
  }, []);

  return (
    <div>
      <SelectOneRadio assessment={assessment} assessmentNumber="1" next="03" />
    </div>
  );
}
