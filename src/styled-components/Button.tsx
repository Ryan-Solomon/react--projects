import styled, { css } from 'styled-components';

type TButtonProps = {
  size?: 'large' | 'small' | 'medium';
  color?: 'dark' | 'light';
  onClick?: () => void;
  text: string;
};

export default function Button({
  size = 'medium',
  color = 'dark',
  text,
  onClick,
}: TButtonProps) {
  return (
    <StyledButton onClick={onClick} size={size} color={color}>
      {text}
    </StyledButton>
  );
}

type StyledButtonProps = {
  size: 'large' | 'small' | 'medium';
  color: 'dark' | 'light';
};

const StyledButton = styled.button<StyledButtonProps>`
  padding: 1rem;
  color: ${({ color }) => (color === 'dark' ? 'white' : 'black')};
  background: ${({ color }) => (color === 'dark' ? 'black' : 'white')};
  font-size: ${({ size }) =>
    size === 'small' ? '1rem' : size === 'medium' ? '1.5rem' : '2rem'};
`;
