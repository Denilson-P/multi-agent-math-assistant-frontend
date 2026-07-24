import ResourceList from "../dashboard/ResourceList";
import SessionSummary from "../dashboard/SessionSummary";

type SidebarProps = {
  userName: string;
  messageCount: number;
  lastResult: number | null;
  lastUserMessage: string;
  onClearChat: () => void;
  onLogout: () => void;
};

function Sidebar({
  userName,
  messageCount,
  lastResult,
  lastUserMessage,
  onClearChat,
  onLogout,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <section className="sidebar-user">
        <span>Usuário</span>
        <strong>{userName}</strong>
      </section>

      <SessionSummary
        messageCount={messageCount}
        lastResult={lastResult}
        lastUserMessage={lastUserMessage}
      />

      <ResourceList />

      <div className="sidebar-actions">
        <button
          type="button"
          className="clear-chat-button"
          onClick={onClearChat}
        >
          Nova conversa 🗑️
        </button>

        <button
          type="button"
          className="logout-button"
          onClick={onLogout}
        >
          Sair
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;