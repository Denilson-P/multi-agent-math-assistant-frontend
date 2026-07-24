export type ChatRequest = {
  message: string;
};

export type ChatResponse = {
  response: string;
  result: number | null;
};