export interface DataQuestionsInterface {
  dataQuestions: QuestionInterface[];
}

export interface QuestionInterface {
  question: string;
  answers: AnswerInterface[];
}

export interface AnswerInterface {
  answer: string;
  isCorrect: boolean;
}
