type SessionSummaryProps = {
  messageCount: number;
  lastResult: number | null;
  lastUserMessage: string;
};

function SessionSummary({
  messageCount,
  lastResult,
  lastUserMessage,
}: SessionSummaryProps) {
  return (
    <section className="session-summary">
      <h2>Sessão</h2>

      <div className="summary-card">
        <span>Mensagens</span>
        <strong>{messageCount}</strong>
      </div>

      <div className="summary-card">
        <span>Último resultado</span>
        <strong>
          {lastResult ?? "Nenhum resultado ainda"}
        </strong>
      </div>

      <div className="summary-card">
        <span>Última mensagem</span>
        <p>{lastUserMessage}</p>
      </div>
    </section>
  );
}

export default SessionSummary;