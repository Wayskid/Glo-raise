import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assessmentProgress: 0,
  foundersAssessmentStarted: false,
  assessmentFile: [
    {
      number: "1",
      qstn: "Our business is in this stage",
      options: [
        "Early Prototype",
        "Advanced Prototype",
        "Early Revenue",
        "Profitability",
        "Scale",
        "Middle Market",
        "Maturity",
      ],
    },
    {
      number: "3",
      qstn: "We solve a clear need many people have better than any other options",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
  ],
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setAssessmentProgress: (state, action) => {
      if (state.assessmentProgress < 100) {
        state.assessmentProgress = action.payload;
      }
    },
    setFoundersAssessmentStarted: (state, action) => {
      state.foundersAssessmentStarted = action.payload;
    },
  },
});

export const { setAssessmentProgress, setFoundersAssessmentStarted } =
  AppSlice.actions;
export default AppSlice.reducer;
