import questions from "../data/questions.json";

export const GetQuestions = () => {
  const dataFromJson = JSON.stringify(questions);

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dataFromJson);
    }, 1000);
  });
};
