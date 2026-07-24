import ChatHistory from "../components/chat/ChatHistory";
import ChatInput from "../components/chat/ChatInput";
import Header from "../components/common/Header";
import UsageTips from "../components/dashboard/UsageTips";
import type { ChatMessage } from "../types/chat";

type ChatProps = {
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
};

function Chat({
  messages,
  isLoading,
  onSendMessage,
}: ChatProps) {
  return (
    <section className="chat-page">
      <Header />

      <UsageTips />

      <ChatHistory messages={messages} />

      <ChatInput
        isLoading={isLoading}
        onSendMessage={onSendMessage}
      />
    </section>
  );
}

export default Chat;