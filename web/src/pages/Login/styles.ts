import styled from "styled-components";
import media from "styled-media-query";

import loginBackground from "../../assets/images/login-background.svg";

import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`;

export const Left = styled.div`
  display: none;

  ${media.greaterThan("large")`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 50%;
    padding: 7.8rem 9.2rem;

    background: ${colors.primary}  url(${loginBackground}) no-repeat center;

    h2 {
    font: 500 1.6rem Poppins;

    max-width: 21rem;

    color: ${colors.textInPrimary};
  }
  `}
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 2.6rem;

  height: 100%;
  width: 100%;

  ${media.greaterThan("large")`
    padding: 22.9rem 16rem 4.8rem;    

    width: 50%;
  `}
`;

export const Header = styled.header`
  margin: -2.6rem;
  padding: 2.4rem 4rem 0;

  background: ${colors.primary};

  svg {
    width: 50%;
  }

  h2 {
    font: 500 1.6rem Poppins;

    max-width: 21rem;

    color: ${colors.textInPrimary};
  }

  ${media.greaterThan("large")`
    display: none;      
  `}
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    legend {
      line-height: 3.6rem;
      font: 600 3.6rem Poppins;

      color: ${colors.textTitle};
    }

    .input-block {
      margin-top: 4rem;

      input::placeholder {
        color: ${colors.textComplement};
      }

      input[type="email"],
      .password-input {
        position: relative;
        width: 100%;

        padding: 2.4rem;

        border: 1px solid ${colors.lineInWhite};
        background: ${colors.inputBackground};
      }

      input[type="email"]:focus::before,
      .password-input:focus-within::before {
        height: calc(100% - 2.8rem);
        width: 2px;
        content: "";
        background: ${colors.primaryLight};
        position: absolute;
        left: 0;
        top: 1.4rem;
        bottom: 1.4rem;
      }

      input[type="email"] {
        border-radius: 0.8rem 0.8rem 0 0;
      }

      .password-input {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 0 0 0.8rem 0.8rem;

        input {
          width: 75%;

          border: 0;
          background: transparent;
        }

        svg {
          cursor: pointer;
          transition: 0.15s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }

    .alter-options {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 2.4rem;

      label,
      a {
        font-size: 1.4rem;
        line-height: 2.4rem;

        text-decoration: none;
        color: ${colors.textComplement};
      }

      label {
        display: flex;
        align-items: center;
      }

      a {
        transition: 0.15s;

        &:hover {
          color: ${colors.textBase};
        }
      }

      input[type="checkbox"] {
        margin-right: 1.6rem;
        border-radius: 0.8rem;

        background: ${colors.inputBackground};
        border: 1px solid ${colors.lineInWhite};
      }
    }

    button[type="submit"] {
      margin-top: 4rem;

      width: 100%;
      padding: 1.6rem;
      border-radius: 0.8rem;

      border: 0;
      cursor: pointer;
      transition: 0.15s;
      font: 600 1.6rem Archivo;
      color: ${colors.buttonText};
      background: ${colors.secondary};

      &:disabled {
        cursor: not-allowed;
        color: ${colors.textComplement};
        background: ${colors.buttonDisabled};
      }

      &:not(:disabled):hover {
        background: ${colors.secondaryDark};
      }
    }
  }

  ${media.greaterThan("large")`
    align-items: flex-start;   
  `}
`;

export const Footer = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  width: 100%;
  max-width: 35.2rem;

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;

    color: ${colors.textBase};

    a {
      transition: 0.15s;
      color: ${colors.primary};

      &:hover {
        color: ${colors.primaryDark};
      }
    }
  }

  span {
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    line-height: 2rem;

    color: ${colors.textComplement};

    svg {
      margin-left: 0.8rem;
    }
  }
`;
