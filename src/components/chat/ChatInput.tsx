import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";

type ChatInputProps = {
  isLoading: boolean;
  onSendMessage: (message: string) => void;
};

function ChatInput({
  isLoading,
  onSendMessage,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleMessageChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setMessage(event.target.value);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const normalizedMessage = message.trim();

    if (!normalizedMessage || isLoading) {
      return;
    }

    onSendMessage(normalizedMessage);
    setMessage("");
  }

  return (
    <form
      className="chat-input"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={message}
        placeholder={
          isLoading
            ? "Aguardando resposta..."
            : "Digite sua mensagem..."
        }
        disabled={isLoading}
        onChange={handleMessageChange}
      />

      <button
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default ChatInput;