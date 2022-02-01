import { useEffect } from "react";
import { SummaryScreenInterface } from "../types/interfaces";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

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
      <h1>Podsumowanie</h1>
      <p>Liczba dobrych odpowiedzi: {punctation}</p>
      <p>Liczba niepoprawnych odpowiedzi:{wrongAnswers - punctation}</p>
      <p>
        Twój wynik jest w przedziale:{" "}
        <span>
          {checkScoringRange(punctation, Object.keys(correctAnswers).length)} %
        </span>
      </p>
      <Link to="/preview">
        <Button>Sprawdz odpowiedzi</Button>
      </Link>
    </>
  );
};
