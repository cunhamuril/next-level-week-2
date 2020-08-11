import styled from "styled-components";
import media from "styled-media-query";

import { colors } from "../../theme";

export const TeacherListContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  ${media.greaterThan("medium")`
    max-width: 100vw;
  `}
`;

export const SearchTeachersForm = styled.form`
  margin-top: 3.2rem;

  label {
    color: ${colors.textInPrimary};
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: ${colors.secondary};
    color: ${colors.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    :hover {
      background: ${colors.secondaryDark};
    }
  }

  .select-block + .input-block {
    margin-top: 1.4rem;
  }

  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    .input-block input {
      box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
    }

    .select-block + .input-block,
    .select-block + .select-block {
      margin-top: 0;
    }
  `}
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  ${media.greaterThan("medium")`
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  `}
`;
