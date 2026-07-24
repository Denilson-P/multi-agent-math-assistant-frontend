import axios from "axios";
import { useState } from "react";

import { sendChatMessage } from "../services/chat.service";
import type { ChatMessage } from "../types/chat";

const initialMessages: ChatMessage[] = [
  {
    id: "initial-assistant-message",
    content: "Olá! Como posso ajudar você?",
    sender: "assistant",
  },
];

export function useChat() {
  const [messages, setMessages] =
    useState<ChatMessage[]>(initialMessages);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const userMessages = messages.filter(
    (message) => message.sender === "user",
  );

  const assistantMessages = messages.filter(
    (message) => message.sender === "assistant",
  );

  const lastUserMessage =
    userMessages.at(-1)?.content
    ?? "Nenhuma mensagem enviada ainda";

  const lastResult =
    [...assistantMessages]
      .reverse()
      .find(
        (message) => message.result !== undefined,
      )
      ?.result ?? null;

  async function sendMessage(
    content: string,
  ): Promise<void> {
    if (isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      content,
      sender: "user",
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setIsLoading(true);
    setError(null);

    try {
      const response = await sendChatMessage(content);

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        content: response.response,
        sender: "assistant",
        result: response.result ?? undefined,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    } catch (requestError: unknown) {
      const errorMessage = axios.isAxiosError(
        requestError,
      )
        ? requestError.response?.data?.detail
          ?? "Não foi possível conectar ao servidor."
        : "Ocorreu um erro inesperado.";

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  function clearChat(): void {
    setMessages(initialMessages);
    setError(null);
  }

  return {
    messages,
    messageCount: userMessages.length,
    lastUserMessage,
    lastResult,
    isLoading,
    error,
    sendMessage,
    clearChat,
  };
}