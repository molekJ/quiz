import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";
import { QuestionScreenInterface } from "../types/interfaces";
import { Link } from "react-router-dom";

export const QuizScreen = ({
  questions,
  userAnswers,
  setUserAnswers,
}: QuestionScreenInterface) => {
  const [current, setCurrent] = useState(0);
  const lenght = questions.length;

  const nextSlide = () => {
    setCurrent(current + 1);
  };

  const prevSlide = () => {
    setCurrent(current - 1);
  };

  return (
    <Card className="quiz-screen ">
      {questions.map((question, index) => {
        return (
          <QuestionCard
            question={question}
            setUserAnswers={setUserAnswers}
            key={index}
            questionId={index}
          ></QuestionCard>
        );
      })}

      <Col>
        <Button
          onClick={() => {
            prevSlide();
          }}
          disabled={current === 0 ? true : false}
        >
          Prev
        </Button>
        <Link
          to="/summary"
          style={{
            pointerEvents:
              questions.length === Object.keys(userAnswers).length
                ? "auto"
                : "none",
          }}
        >
          <Button
            variant="danger"
            disabled={
              questions.length === Object.keys(userAnswers).length
                ? false
                : true
            }
          >
            Zakoncz
          </Button>
        </Link>
        <Button
          onClick={() => {
            nextSlide();
          }}
          disabled={current === lenght - 1 ? true : false}
        >
          Next
        </Button>
        <Button
          onClick={() => {
            console.log(userAnswers);
            console.log(Object.keys(userAnswers).length);
            console.log(questions.length);
          }}
        >
          Pokaz odpowiedzi
        </Button>
      </Col>
    </Card>
  );
};
