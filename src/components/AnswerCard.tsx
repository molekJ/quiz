import { Card, Form, FormCheck } from "react-bootstrap";
import { AnswerCardInterface } from "../types/interfaces";

export const AnswerCard = ({ question, userAnswer }: AnswerCardInterface) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Form.Label>{question.question}</Form.Label>
          {question.answers.map((el, index) => {
            return (
              <>
                {el.is_correct ? (
                  <Form.Check
                    label={el.answer}
                    key={index}
                    type="radio"
                    className="text-success"
                    defaultChecked={userAnswer === index ? true : false}
                  />
                ) : (
                  <FormCheck
                    label={el.answer}
                    key={index}
                    type="radio"
                    defaultChecked={userAnswer === index ? true : false}
                    className={
                      userAnswer === index ? "text-danger" : "text-dark"
                    }
                    disabled={userAnswer === index ? true : false}
                  />
                )}
              </>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
};
