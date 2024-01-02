import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";
import SelectOne from "../../../components/reuseable/selectOne.jsx";

export default function One() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[0]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAssessmentProgress(4.76));
  }, []);

  return (
    <div>
      <SelectOne assessment={assessment} assessmentNumber="1" next="03" />
    </div>
  );
}
