import React, { useEffect, useState } from "react";
import {
  UserAsnwersType,
  QuestionInterface,
  SummaryScreenInterface,
} from "../types/interfaces";
import { Button } from "react-bootstrap";
import { get } from "https";

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
      console.log(punctation);
    }
  };

  useEffect(() => {
    showAnswers();
  }, []);

  return (
    <>
      <div>Podsumowanie</div>
      <Button>Dobre odpowiedzi</Button>
      <Button>Porownaj</Button>
      <p>{punctation}</p>
    </>
  );
};
