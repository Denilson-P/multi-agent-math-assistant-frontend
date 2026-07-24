import LoginForm from "../components/auth/LoginForm";

type LoginProps = {
  onLogin: (userName: string) => void;
};

function Login({
  onLogin,
}: LoginProps) {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-card__brand">
          <span
            className="login-card__icon"
            aria-hidden="true"
          >
            🤖
          </span>

          <h1>Multi-Agent Math Assistant</h1>

          <p>
            Entre para acessar o assistente matemático.
          </p>
        </div>

        <LoginForm onLogin={onLogin} />
      </section>
    </main>
  );
}

export default Login;