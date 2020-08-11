import styled from "styled-components";
import media from "styled-media-query";

import { colors } from "../../theme";

export const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.textInPrimary};
  background: ${colors.primary};
`;

export const LandingPageContent = styled.div`
  width: 90vw;
  max-width: 700px;

  .hero-image {
    width: 100%;
  }

  ${media.greaterThan("medium")`
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";

    .hero-image {
      grid-area: hero;
      justify-self: end;
    }
  `}
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  ${media.greaterThan("medium")`
    grid-area: logo;
    align-self: center;
    text-align: initial;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-top: 1.6rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${colors.buttonText};

    transition: background-color 0.2s;

    :first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }

    &.study {
      background: ${colors.primaryLighter};

      :hover {
        background: ${colors.primaryLight};
      }
    }

    &.give-classes {
      background: ${colors.secondary};

      :hover {
        background: ${colors.secondaryDark};
      }
    }
  }

  ${media.greaterThan("medium")`
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  `}
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  ${media.greaterThan("medium")`
    grid-area: total;
    justify-self: end;
  `}
`;
