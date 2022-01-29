export interface QuestionInterface {
  question: string;
  answers: AnswerInterface[];
}

export interface AnswerInterface {
  answer: string;
  is_correct: boolean;
}
