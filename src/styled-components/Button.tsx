import styled, { css } from 'styled-components';

type TButtonProps = {
  size?: 'large' | 'small' | 'medium';
  color?: 'dark' | 'light';
  text: string;
};

export default function Button({
  size = 'medium',
  color = 'dark',
  text,
}: TButtonProps) {
  return (
    <StyledButton size={size} color={color}>
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

  ${(props) =>
    props.size === 'large'
      ? css`
          font-size: 24px;
        `
      : props.size === 'medium'
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 10px;
        `}
  ${(props) =>
    props.color === 'dark'
      ? css`
          color: 'white';
          background: 'black';
        `
      : css`
          color: 'black';
          background: 'white';
        `}
`;
