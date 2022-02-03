import { QuestionCardInterface } from "../types/interfaces";
import { Card, Form } from "react-bootstrap";

export const QuestionCard = ({
  question,
  setUserAnswers,
  questionId,
}: QuestionCardInterface) => {
  const onChange = (questionId: number, answerId: number) => {
    setUserAnswers((old) => {
      return { ...old, [questionId]: answerId };
    });
  };

  return (
    <>
      <Card.Body className="height-card">
        <Form.Group>
          <Form.Label>{question.question}</Form.Label>
          {question.answers.map((el, index) => {
            return (
              <Form.Check
                key={index}
                name={question.question}
                label={el.answer}
                type="radio"
                value={index}
                onClick={() => {
                  onChange(questionId, index);
                }}
              />
            );
          })}
        </Form.Group>
      </Card.Body>
    </>
  );
};
