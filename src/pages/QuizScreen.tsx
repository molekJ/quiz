import { Carousel } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";
import { QuestionInterface } from "../types/interfaces";

interface Question {
  questions: QuestionInterface[];
}

export const QuizScreen = ({ questions }: Question) => {
  console.log(questions);
  return (
    <Carousel variant="dark" interval={null}>
      {questions.map((el) => {
        return (
          <Carousel.Item>
            <QuestionCard {...el} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
