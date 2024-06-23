import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useLogin, useNotify } from "react-admin";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ phone, password }).catch(() => notify("Неверные данные"));
  };

  return (
    <div className={styles.login}>
      <div className="container">
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <TextField
            className={styles.loginInput}
            name="phone"
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Телефон"
            variant="outlined"
          />
          <TextField
            className={styles.loginInput}
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Пароль"
            variant="outlined"
          />
          <Button className={styles.loginButton} type="submit" variant="contained">
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};
