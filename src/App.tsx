import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QuizScreen } from "./pages/QuizScreen";
import { SplashScreen } from "./pages/SplashScreen";
import { SummaryScreen } from "./pages/SummaryScreen";
import { Container } from "react-bootstrap";
import { GetQuestions } from "./service/GetQuestions";
import { useEffect, useState } from "react";

import { QuestionInterface, UserAsnwersType } from "./types/interfaces";

function App() {
  useEffect(() => {
    const questionsPromise = GetQuestions();
    questionsPromise.then((res) => {
      setQuestions(res);
      setIsLoaded(true);
    });
  }, []);

  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<UserAsnwersType>({});

  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SplashScreen isLoaded={isLoaded} />} />
          <Route
            path="/quiz"
            element={
              <QuizScreen
                questions={questions}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <SummaryScreen userAnswers={userAnswers} questions={questions} />
            }
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
