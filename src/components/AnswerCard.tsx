import { Card, Form, Container } from "react-bootstrap";
import { AnswerCardInterface } from "../types/interfaces";

export const AnswerCard = ({ question, userAnswers }: AnswerCardInterface) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Form.Label>{question.question}</Form.Label>
          {question.answers.map((el, index) => {
            return <Form.Check key={index} label={el.answer} type="radio" />;
          })}
        </Card.Body>
      </Card>
    </>
  );
};
