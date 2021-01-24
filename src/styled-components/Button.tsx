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
  ${(props) =>
    props.size === 'large' ? css`` : props.size === 'medium' ? css`` : css``}
`;
