import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";

type LoginFormProps = {
  onLogin: (userName: string) => void;
};

function LoginForm({
  onLogin,
}: LoginFormProps) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(
    null,
  );

  function handleUserNameChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setUserName(event.target.value);
  }

  function handlePasswordChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setPassword(event.target.value);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): void {
    event.preventDefault();

    const normalizedUserName = userName.trim();

    if (!normalizedUserName || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setError(null);
    onLogin(normalizedUserName);
  }

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >
      <div className="login-form__field">
        <label htmlFor="userName">
          Nome ou e-mail
        </label>

        <input
          id="userName"
          name="userName"
          type="text"
          value={userName}
          placeholder="Digite seu nome"
          autoComplete="username"
          onChange={handleUserNameChange}
        />
      </div>

      <div className="login-form__field">
        <label htmlFor="password">
          Senha
        </label>

        <input
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="Digite sua senha"
          autoComplete="current-password"
          onChange={handlePasswordChange}
        />
      </div>

      {error && (
        <p
          className="login-form__error"
          role="alert"
        >
          {error}
        </p>
      )}

      <button type="submit">
        Entrar
      </button>

      <p className="login-form__notice">
        Acesso demonstrativo. As credenciais não são
        validadas nem armazenadas.
      </p>
    </form>
  );
}

export default LoginForm;