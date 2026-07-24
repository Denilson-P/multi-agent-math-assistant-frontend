import type { MessageSender } from "../../types/chat";

type ChatMessageProps = {
  content: string;
  sender: MessageSender;
};

function ChatMessage({
  content,
  sender,
}: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <article
      className={`chat-message chat-message--${sender}`}
    >
      <div
        className={`chat-message__avatar chat-message__avatar--${sender}`}
        aria-label={isUser ? "User" : "Assistant"}
      >
        {isUser ? "👤" : "🤖"}
      </div>

      <div className="chat-message__content">
        <p>{content}</p>
      </div>
    </article>
  );
}

export default ChatMessage;