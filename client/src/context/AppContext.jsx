import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssessmentEvaluation } from "../store/features/appSlice";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const {
    fundersAssessmentStarted,
    foundersAssessmentStarted,
    assessmentEvaluation,
  } = useSelector((state) => state.app);

  //SELECT ONE QUESTIONS=================================
  const [choice, setChoice] = useState("");

  //function to score
  function scoring(answer) {
    let score = 1;
    switch (answer) {
      case "Totally like us":
      case "Over 10Billion":
      case "Over 30%":
      case "We're growing much faster than our closest competitors":
      case "Rapidly growing and global":
      case "Over 100M":
      case "Low acquisition cost and recurring":
      case "Moderately - what we do brings new elements to their existing behaviors":
      case "Members of our team have successfully raised third-party funding":
      case "Orange - There's competition, but we know exactly how to win":
      case "Essential":
      case "Fragmented — There is no clear leader with more than 10% market share":
        score = 4;
        break;
      case "Mostly like us":
      case "1B - 9.99B":
      case "15-29%":
      case "We're growing faster than our closest competitors":
      case "Moderately growing and global":
      case "50-99M":
      case "30-49M":
      case "Medium acquisition cost and recurring":
      case "Significantly - what we do completely re-imagines a familiar service":
      case "Members of our team have successfully built and harvested another company":
      case "Purple - High and increasing, but we know who they are":
      case "Important":
      case "Consolidating — A few competitors are poised to exceed 10% market share":
        score = 3;
        break;
      case "Somewhat like us":
      case "100M-999M":
      case "5-19%":
      case "We're growing at the same rate as a our closest competitors":
      case "Rapidly growing and regional":
      case "10-29M":
      case "High acquisition cost and recurring":
      case "Low acquisition cost and transactional":
      case "Very Little - we give them another option to something that's very familiar to them":
      case "Members of our team have successfully conducted M&A transactions":
      case "White - There's no competition":
      case "Useful":
      case "Concentrated — There is a strong leader with over 30% market share":
        score = 2;
        break;
      case "Not like us":
      case "Not at all like us":
      case "Not much like us":
      case "Don't know":
      case "Less than 100M":
      case "Less than 5%":
      case "We're growing slower than our closest competitors":
      case "Moderately growing and regional":
      case "Market is still forming":
      case "Less than 10M":
      case "Medium acquisition cost and transactional":
      case "Completely - what we do is very different from anything they've experienced":
      case "This is the first venture for all of us":
      case "Red - Intense and coming from all directions":
      case "Ambivalent":
      case "Dominated — There is a dominant player with over 40% market share":
        score = 1;
        break;
      default:
        score = 0;
        break;
    }
    return score;
  }

  //Handle onchange
  function handleOthers(e, assessment) {
    if (fundersAssessmentStarted === true) {
      dispatch(
        setAssessmentEvaluation({
          qstnNumber: assessment.number,
          qstn: assessment.qstn,
          answer: e.target.value,
        })
      );
    }
    if (foundersAssessmentStarted === true) {
      dispatch(
        setAssessmentEvaluation({
          qstnNumber: assessment.number,
          qstn: assessment.qstn,
          answer: e.target.value,
          score: scoring(e.target.value),
        })
      );
    }
  }
  function handleChange(e, assessment) {
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: assessment.number,
        qstn: assessment.qstn,
        answer: e.target.value,
        score: scoring(e.target.value),
      })
    );
  }

  //SELECT MANY QUESTIONS===============================
  const [choices, setChoices] = useState([]);
  function handleSelectMany(e, assessment) {
    let answers;
    if (choices?.length) {
      if (choices.includes(e.target.value)) {
        setChoices(choices.filter((ans) => ans !== e.target.value));
        answers = choices.filter((ans) => ans !== e.target.value);
      } else {
        setChoices((prev) => [...prev, e.target.value]);
        answers = [...choices, e.target.value];
      }
    } else {
      setChoices([e.target.value]);
      answers = [e.target.value];
    }
    dispatch(
      setAssessmentEvaluation({
        qstnNumber: assessment.number,
        qstn: assessment.qstn,
        answer: answers,
        score:
          (assessment.number === "13") | (assessment.number === "33")
            ? answers.length === 5
              ? 4
              : answers.length === 4
              ? 4
              : answers.length === 3
              ? 3
              : answers.length === 2
              ? 2
              : answers.length === 1
              ? 1
              : 0
            : assessment.number === "29"
            ? answers.includes("This is the first venture for all of us")
              ? 0
              : answers.length === 3
              ? 4
              : answers.length === 2
              ? 3
              : answers.length === 1
              ? 2
              : 1
            : assessment.number === "38"
            ? answers.length === 0
              ? 4
              : answers.length === 1
              ? 4
              : answers.length === 2
              ? 3
              : answers.length === 3
              ? 2
              : 1
            : 0,
      })
    );
  }

  //Calculate final score
  const [finalScore, setFinalScore] = useState(0);
  function getAssessmentScore() {
    setFinalScore(assessmentEvaluation.reduce((a, c) => a + c?.score, 0));
  }

  useEffect(() => {
    if (assessmentEvaluation.length) {
      getAssessmentScore();
    }
  }, [assessmentEvaluation]);

  console.log(assessmentEvaluation);
  console.log(finalScore);

  return (
    <appContext.Provider
      value={{
        choice,
        setChoice,
        scoring,
        handleChange,
        choices,
        setChoices,
        handleSelectMany,
        handleOthers,
        finalScore,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default appContext;
