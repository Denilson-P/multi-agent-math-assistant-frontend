import type {
  ChatRequest,
  ChatResponse,
} from "../types/api";

import { api } from "./api";

export async function sendChatMessage(
  message: string,
): Promise<ChatResponse> {
  const request: ChatRequest = {
    message,
  };

  const response = await api.post<ChatResponse>(
    "/chat",
    request,
  );

  return response.data;
}