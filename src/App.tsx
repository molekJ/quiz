import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QuizScreen } from "./pages/QuizScreen";
import { SplashScreen } from "./pages/SplashScreen";
import { SummaryScreen } from "./pages/SummaryScreen";
import { Container } from "react-bootstrap";
import { GetQuestions } from "./service/GetQuestions";
import { useEffect, useState } from "react";

import { QuestionInterface } from "./types/interfaces";

function App() {
  useEffect(() => {
    const questionsPromise = GetQuestions();
    questionsPromise.then((res) => {
      setQuestions(res);
      console.log(res);
    });
  }, []);

  const [questions, setQuestions] = useState<QuestionInterface[] | []>([]);

  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
          <Route path="/summary" element={<SummaryScreen />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
