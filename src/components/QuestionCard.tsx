import { QuestionInterface } from "../types/interfaces";
import { Card, Form } from "react-bootstrap";

export const QuestionCard: React.FC<QuestionInterface> = ({
  question,
  answers,
}) => {
  console.log(answers);
  return (
    <>
      <Card className="splash-screen ">
        <Card.Body>
          <Form.Group>
            <Form.Label>{question}</Form.Label>
            {answers.map((el) => {
              return (
                <Form.Check name={question} label={el.answer} type="radio" />
              );
            })}
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  );
};
