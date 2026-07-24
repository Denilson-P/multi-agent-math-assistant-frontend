import type {
  ChatMessage as ChatMessageData,
} from "../../types/chat";

import ChatMessage from "./ChatMessage";

type ChatHistoryProps = {
  messages: ChatMessageData[];
};

function ChatHistory({
  messages,
}: ChatHistoryProps) {
  return (
    <section className="chat-history">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          sender={message.sender}
          content={message.content}
        />
      ))}
    </section>
  );
}

export default ChatHistory;