import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  border-radius: 20px;
  border: none;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  /* ${sizeStyles} */
  /* ${colorStyles}  */
`;

export const Button = (children, size, color, outline, ...rest): JSX.Element => {
  return (
    <StyledButton size={size} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};
