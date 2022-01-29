import { Carousel } from "react-bootstrap";
import { QuestionCard } from "../components/QuestionCard";

export const QuizScreen = () => {
  const myArr = [
    {
      question: "Jaki kolor ma słońce",
      answers: [
        { answer: "zielony", is_correct: false },
        { answer: "czerwony", is_correct: false },
        { answer: "zółty", is_correct: true },
        { answer: "biały", is_correct: false },
      ],
    },
    {
      question: "Jaki jest wynik: 2 + 2 x 2",
      answers: [
        { answer: "6", is_correct: true },
        { answer: "8", is_correct: false },
        { answer: "10", is_correct: false },
        { answer: "4", is_correct: false },
      ],
    },
    {
      question: "Stolica Polski to:",
      answers: [
        { answer: "Kraków", is_correct: false },
        { answer: "Biała Podlaska", is_correct: false },
        { answer: "Zakopane", is_correct: false },
        { answer: "Warszawa", is_correct: true },
      ],
    },
  ];
  return (
    <Carousel variant="dark" interval={null}>
      {myArr.map((el) => {
        return (
          <Carousel.Item>
            <QuestionCard {...el} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
