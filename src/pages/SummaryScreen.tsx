import { useEffect } from "react";
import { SummaryScreenInterface } from "../types/interfaces";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SummaryScreen = ({
  userAnswers,
  questions,
  correctAnswers,
  punctation,
  setPunctation,
}: SummaryScreenInterface) => {
  const showAnswers = () => {
    for (const key in userAnswers) {
      if (userAnswers[key] === correctAnswers[key]) {
        setPunctation((old) => (old += 1));
      }
    }
  };

  const { t } = useTranslation();

  const wrongAnswers = Object.keys(correctAnswers).length;

  useEffect(() => {
    showAnswers();
  }, []);

  const checkScoringRange = (score: number, numOfQuestion: number) => {
    const percentageRange = (score / numOfQuestion) * 100;
    if (percentageRange <= 50) {
      return "0 - 50";
    } else if (percentageRange > 50 && percentageRange <= 80) {
      return "51- 80";
    } else {
      return "51- 80";
    }
  };

  return (
    <>
      <h1>{t("summary_message")}</h1>
      <p>
        {t("amount_of_correct_answers")}: {punctation}
      </p>
      <p>
        {t("amount_of_wrong_answers")}:{wrongAnswers - punctation}
      </p>
      <p>
        {t("percentage_scale")}:{" "}
        <span>
          {checkScoringRange(punctation, Object.keys(correctAnswers).length)} %
        </span>
      </p>
      <Link to="/preview">
        <Button>{t("check_answers_button")}</Button>
      </Link>
    </>
  );
};
