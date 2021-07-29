import styled from "styled-components";

export default function Button({ style, children, onClick, variant }) {
  return (
    <StyledButton {...style} onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  cursor: pointer;
  font-size: 1.5rem;
  min-width: 5em;
  width: ${(p) => {
    switch (p.variant) {
      case "full-width":
        return "100%";
      default:
        return "auto";
    }
  }};
  border-radius: 8px;
  box-shadow: 0 3px black;
  font-family: "Work Sans";
  padding: 0.8em 2em;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ddd;
  }
`;
