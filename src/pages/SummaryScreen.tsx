import { useEffect } from "react";
import { SummaryScreenInterface } from "../types/interfaces";
import { Button, Card } from "react-bootstrap";

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
      return "81- 100";
    }
  };

  return (
    <Card>
      <Card.Body className="d-flex-row">
        <Card.Title className="text-center">{t("summary_message")}</Card.Title>
        <Card.Text className="text-center">
          {t("amount_of_correct_answers")}: {punctation}
        </Card.Text>
        <Card.Text className="text-center">
          {t("amount_of_wrong_answers")}:{wrongAnswers - punctation}
        </Card.Text>
        <Card.Text className="text-center">
          {t("percentage_scale")}:{" "}
          <span>
            {checkScoringRange(punctation, Object.keys(correctAnswers).length)}{" "}
            %
          </span>
        </Card.Text>
        <Link to="/preview" className="d-flex justify-content-center">
          <Button>{t("check_answers_button")}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
