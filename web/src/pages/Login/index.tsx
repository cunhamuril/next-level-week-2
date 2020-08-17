import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as IntroLogo } from "../../assets/images/intro.svg";
import { ReactComponent as PurpleHeart } from "../../assets/images/icons/purple-heart.svg";
import { ReactComponent as SeePassword } from "../../assets/images/icons/see-password.svg";
import { ReactComponent as UnseePassword } from "../../assets/images/icons/unsee-password.svg";

import { Container, Left, Right, Header, Main, Footer } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container>
      <Left>
        <IntroLogo />
      </Left>

      <Right>
        <Header>
          <IntroLogo />
        </Header>

        <Main>
          <form onSubmit={handleLoginSubmit}>
            <legend>Fazer login</legend>

            <div className="input-block">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="password-input">
                <input
                  type={seePassword ? "text" : "password"}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={() => setSeePassword(!seePassword)}>
                  {seePassword ? <UnseePassword /> : <SeePassword />}
                </div>
              </div>
            </div>

            <div className="alter-options">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                Lembrar-me
              </label>

              <Link to="#!">Esqueci minha senha</Link>
            </div>

            <button type="submit" disabled={!email || !password}>
              Entrar
            </button>
          </form>
        </Main>

        <Footer>
          <p>
            Não tem conta? <br />
            <strong>
              <Link to="#!">Cadastre-se</Link>
            </strong>
          </p>

          <span>
            É de graça <PurpleHeart />
          </span>
        </Footer>
      </Right>
    </Container>
  );
};

export default Login;
