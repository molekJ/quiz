import { useState } from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";
import { QuestionScreenInterface } from "../types/interfaces";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

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
              mb-3
            ></QuestionCard>
          </Container>
        );
      })}

      <Col className="d-flex justify-content-center">
        <Button
          className="m-1"
          onClick={() => {
            prevSlide();
          }}
          disabled={current === 0 ? true : false}
        >
          {t("prev_button")}
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
            className="m-1"
            variant={
              questions.length === Object.keys(userAnswers).length
                ? "success"
                : "danger"
            }
            disabled={
              questions.length === Object.keys(userAnswers).length
                ? false
                : true
            }
          >
            {t("end_button")}
          </Button>
        </Link>
        <Button
          className="m-1 "
          onClick={() => {
            nextSlide();
          }}
          disabled={current === length - 1 ? true : false}
        >
          {t("next_button")}
        </Button>
      </Col>
    </Card>
  );
};
