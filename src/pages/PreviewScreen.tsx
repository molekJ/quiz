import { PreviewScreenInterface } from "../types/interfaces";
import { Card, Container } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";
import { AnswerCard } from "../components/AnswerCard";
import { isNamedExportBindings } from "typescript";

export const PreviewScreen = ({
  questions,
  userAnswers,
}: PreviewScreenInterface) => {
  console.log(userAnswers);
  return (
    <>
      <Card className="quiz-screen ">
        {questions.map((question, index) => {
          return (
            <AnswerCard
              key={index}
              question={question}
              userAnswer={userAnswers[index]}
            ></AnswerCard>
          );
        })}
      </Card>
    </>
  );
};
