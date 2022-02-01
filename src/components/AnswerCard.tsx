import { Card, Form, Container, FormCheck } from "react-bootstrap";
import { AnswerCardInterface } from "../types/interfaces";

export const AnswerCard = ({ question, userAnswer }: AnswerCardInterface) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Form.Label>{question.question}</Form.Label>
          {question.answers.map((el, index) => {
            console.log(index);
            return (
              <>
                {el.is_correct ? (
                  <Form.Check
                    label={el.answer}
                    key={index}
                    type="radio"
                    className="text-success"
                    checked={userAnswer === index ? true : false}
                  />
                ) : (
                  <FormCheck
                    label={el.answer}
                    key={index}
                    type="radio"
                    checked={userAnswer === index ? true : false}
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
