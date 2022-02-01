import { useState } from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";
import { QuestionScreenInterface } from "../types/interfaces";
import { Link } from "react-router-dom";

export const QuizScreen = ({
  questions,
  userAnswers,
  setUserAnswers,
}: QuestionScreenInterface) => {
  const [current, setCurrent] = useState(0);
  const length = questions.length;

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
          <Container
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            <QuestionCard
              question={question}
              setUserAnswers={setUserAnswers}
              questionId={index}
            ></QuestionCard>
          </Container>
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
          disabled={current === length - 1 ? true : false}
        >
          Next
        </Button>
      </Col>
    </Card>
  );
};
