import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QuizScreen } from "./pages/QuizScreen";
import { SplashScreen } from "./pages/SplashScreen";
import { SummaryScreen } from "./pages/SummaryScreen";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
          <Route path="/summary" element={<SummaryScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
