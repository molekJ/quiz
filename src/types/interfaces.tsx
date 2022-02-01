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

export interface SummaryScreenInterface {
  userAnswers: UserAsnwersType;
  questions: QuestionInterface[];
  correctAnswers: UserAsnwersType;
  punctation: number;
  setPunctation: React.Dispatch<React.SetStateAction<number>>;
}

export interface PreviewScreenInterface {
  questions: QuestionInterface[];
  userAnswers: UserAsnwersType;
}

export interface AnswerCardInterface {
  question: QuestionInterface;
  userAnswer: number | undefined;
}

export interface NavbarInterface {
  clearAllStates: () => void;
  timer: number;
}
