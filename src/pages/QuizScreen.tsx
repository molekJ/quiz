import { Carousel } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";

export const QuizScreen = () => {
  const myArr = [
    { question: "jaki", answer: "taki" },
    { question: "jaki2", answer: "taki2" },
    { question: "jaki3", answer: "taki3" },
    { question: "jaki4", answer: "taki4" },
    { question: "jaki5", answer: "taki5" },
  ];
  return (
    <Carousel fade variant="dark">
      {myArr.map((el) => {
        return (
          <Carousel.Item>
            <QuestionCard />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
