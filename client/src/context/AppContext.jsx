import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentEvaluation } from "../store/features/appSlice";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const assessmentEvaluation = useSelector(
    (state) => state.app.assessmentEvaluation
  );

  const [choice, setChoice] = useState({
    qstnNumber: "",
    qstn: "",
    answer: "",
    score: "",
  });

  //function to score
  function scoring(answer) {
    let score = 1;
    switch (answer) {
      case "Totally like us":
        score = 4;
        break;
      case "Mostly like us":
        score = 3;
        break;
      case "Somewhat like us":
        score = 2;
        break;
      case "Not like us":
        score = 1;
        break;
      default:
        score = 0;
        break;
    }
    return score;
  }

  //Handle onchange
  function handleChange(e, assessment) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: assessment.number,
        qstn: assessment.qstn,
        answer: e.target.value,
        score: scoring(e.target.value),
      })
    );
    setChoice({
      qstnNumber: assessment.number,
      qstn: assessment.qstn,
      answer: e.target.value,
      score: scoring(e.target.value),
    });
  }

  return (
    <appContext.Provider value={{ choice, setChoice, scoring, handleChange }}>
      {children}
    </appContext.Provider>
  );
};

export default appContext;
