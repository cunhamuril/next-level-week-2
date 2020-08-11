import styled from "styled-components";
import media from "styled-media-query";

import { colors } from "../../theme";

export const TeacherItemContainer = styled.article`
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);

  background: ${colors.boxBase};
  border: 1px solid ${colors.lineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: ${colors.textTitle};
      }

      span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
      }
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  footer {
    padding: 3.2rem 2rem;
    background: ${colors.boxFooter};
    border-top: 1px solid ${colors.lineInWhite};
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p strong {
      color: ${colors.primary};
      font-size: 1.6rem;
      display: block;
    }

    a {
      width: 20rem;
      height: 5.6rem;
      background: ${colors.secondary};
      color: ${colors.buttonText};
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem Archivo;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: 0.2s;
      text-decoration: none;

      :hover {
        background: ${colors.secondaryDark};
      }
    }
  }

  ${media.greaterThan("medium")`
    header, 
    footer {
      padding: 3.2rem;
    }

    > p {
      padding: 0 3.2rem;
    }

    footer {
      p strong {
        display: initial;
        margin-left: 1.6rem;
      }

      a {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;

        img {
          margin-right: 1.6rem;
        }
      }
    }
  `}
`;
