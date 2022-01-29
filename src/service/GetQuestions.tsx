import questions from "../data/questions.json";
import { QuestionInterface } from "../types/interfaces";
export const GetQuestions = (): Promise<QuestionInterface[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(questions), 1000);
  });
};
