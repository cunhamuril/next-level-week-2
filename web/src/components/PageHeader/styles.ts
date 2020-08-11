import styled from "styled-components";
import media from "styled-media-query";

import { colors } from "../../theme";

export const PageHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};

  ${media.greaterThan("medium")`
    height: 340px;
  `}
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${colors.textInPrimary};
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    :hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }

  ${media.greaterThan("medium")`
    max-width: 1100px;
  `}
`;

export const HeaderContent = styled.div.attrs({
  className: "header-content",
})`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: ${colors.titleInPrimary};
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${colors.textInPrimary};
    margin-top: 2.4rem;
  }

  ${media.greaterThan("medium")`
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      max-width: 350px;
    }
  `}
`;
