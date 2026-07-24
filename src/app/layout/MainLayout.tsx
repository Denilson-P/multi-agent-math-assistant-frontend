import Sidebar from "../../components/common/Sidebar";
import { useChat } from "../../hooks/useChat";
import Chat from "../../pages/Chat";

type MainLayoutProps = {
  userName: string;
  onLogout: () => void;
};

function MainLayout({
  userName,
  onLogout,
}: MainLayoutProps) {
  const {
    messages,
    messageCount,
    lastResult,
    lastUserMessage,
    isLoading,
    sendMessage,
    clearChat,
  } = useChat();

  return (
    <main className="app-layout">
      <Sidebar
        userName={userName}
        messageCount={messageCount}
        lastResult={lastResult}
        lastUserMessage={lastUserMessage}
        onClearChat={clearChat}
        onLogout={onLogout}
      />

      <Chat
        messages={messages}
        isLoading={isLoading}
        onSendMessage={sendMessage}
      />
    </main>
  );
}

export default MainLayout;