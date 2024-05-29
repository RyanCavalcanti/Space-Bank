import { NoneStylesButton, PrimaryButton, SecondaryButton, TertiaryButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

function Button({ children, onClick, className, disabled, type, style, variant }: ButtonProps) {
  let ButtonComponent;
  switch (variant) {
    case 'primary':
      ButtonComponent = PrimaryButton;
      break;
    case 'secondary':
      ButtonComponent = SecondaryButton;
      break;
    case 'tertiary':
      ButtonComponent = TertiaryButton;
      break;
    default:
      ButtonComponent = NoneStylesButton;
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
