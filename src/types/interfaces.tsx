export interface QuestionInterface {
  question: string;
  answers: AnswerInterface[];
}
export interface AnswerInterface {
  answer: string;
  is_correct: boolean;
}

export interface QuestionCardInterface {
  question: QuestionInterface;
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAsnwersType>>;
  questionId: number;
}

export type UserAsnwersType = { [key: number]: number | undefined };

export interface QuestionScreenInterface {
  questions: QuestionInterface[];
  userAnswers: UserAsnwersType;
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAsnwersType>>;
}