import styled from 'styled-components';
import theme from '../../styles/Theme';

export const ButtonBase = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  background-color: ${theme.colors.Black};
  color: ${theme.colors.White};
`;

export const SecondaryButton = styled(ButtonBase)`
  background-color: ${theme.colors.Red};
  color: ${theme.colors.White};
`;


interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  variant?: 'primary' | 'secondary';
}

function Button({ children, onClick, className, disabled, type, style, variant = 'primary' }: ButtonProps) {
  let ButtonComponent;
  switch (variant) {
    case 'primary':
      ButtonComponent = PrimaryButton;
      break;
    case 'secondary':
      ButtonComponent = SecondaryButton;
      break;
    default:
      ButtonComponent = PrimaryButton;
  }

  return (
    <ButtonComponent
      onClick={onClick}
      className={className}
      disabled={disabled}
      type={type}
      style={style}
    >
      {children}
    </ButtonComponent>
  );
}

export default Button;
