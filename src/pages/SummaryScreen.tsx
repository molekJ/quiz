import React, { useState } from "react";
import { UserAsnwersType, QuestionInterface } from "../types/interfaces";
import { Button } from "react-bootstrap";

interface SummaryScreenInterface {
  userAnswers: UserAsnwersType;
  questions: QuestionInterface[];
}

export const SummaryScreen = ({
  userAnswers,
  questions,
}: SummaryScreenInterface) => {
  const [correctAnswers, setCorrectAnswers] = useState<UserAsnwersType>();

  const checkAnswers = () => {
    questions.forEach((question, indexQuestion) => {
      question.answers.forEach((answer, indexAnswer) => {
        if (answer.is_correct === true) {
          setCorrectAnswers((old) => {
            return { ...old, [indexQuestion]: indexAnswer };
          });
        }
      });
    });
  };

  console.log(userAnswers);
  console.log(questions);

  return (
    <>
      <div>Podsumowanie</div>
      <Button
        onClick={() => {
          checkAnswers();
        }}
      >
        Sprawdz
      </Button>
    </>
  );
};
