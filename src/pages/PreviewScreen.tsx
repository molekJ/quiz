import { PreviewScreenInterface } from "../types/interfaces";
import { Card } from "react-bootstrap";
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
              userAnswer={userAnswers[index]}
            ></AnswerCard>
          );
        })}
      </Card>
    </>
  );
};
