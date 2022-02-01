import { PreviewScreenInterface } from "../types/interfaces";
import { Card, Container } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";
import { AnswerCard } from "../components/AnswerCard";

export const PreviewScreen = ({
  questions,
  userAnswers,
}: PreviewScreenInterface) => {
  return (
    <>
      <Card className="quiz-screen ">
        {questions.map((question, index) => {
          return (
            <AnswerCard
              key={index}
              question={question}
              userAnswers={userAnswers}
            ></AnswerCard>
          );
        })}
      </Card>
    </>
  );
};
