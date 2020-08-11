import styled from "styled-components";

import { colors } from "../../theme";

export const Container = styled.div.attrs({
  className: "input-block",
})`
  position: relative;

  + & {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${colors.inputBackground};
    border: 1px solid ${colors.lineInWhite};
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background: ${colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
