export type MessageSender = "user" | "assistant";

export type ChatMessage = {
  id: string;
  content: string;
  sender: MessageSender;
  result?: number;
};