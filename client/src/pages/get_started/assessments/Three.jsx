import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentProgress } from "../../../store/features/appSlice.js";
import { useNavigate } from "react-router-dom";
import SelectOne from "../../../components/reuseable/selectOne.jsx";

export default function Three() {
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.app.assessmentFile[1]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAssessmentProgress(7.14));
  }, []);

  return (
    <div>
      <SelectOne assessment={assessment} assessmentNumber="3" next="04" />
    </div>
  );
}
