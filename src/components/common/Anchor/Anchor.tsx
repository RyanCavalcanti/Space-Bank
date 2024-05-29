import { NoneAnchor, PrimaryButton, SecondaryButton, TertiaryButton, TextAnchor } from "./Anchor.styles";
interface AnchorProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  target?: string;
  variant: 'none' | 'text' | 'primary' | 'secondary' | 'tertiary';
}
function Anchor({ href, children, style, target, variant = 'none' }: AnchorProps) {
  let AnchorComponent;
  switch (variant) {
    case 'none':
      AnchorComponent = NoneAnchor;
      break;
    case 'text':
      AnchorComponent = TextAnchor;
      break;
    case 'primary':
      AnchorComponent = PrimaryButton;
      break;
    case 'secondary':
      AnchorComponent = SecondaryButton;
      break;
    case 'tertiary':
      AnchorComponent = TertiaryButton;
      break;
    default:
      AnchorComponent = NoneAnchor;
  }

  return(
    <AnchorComponent href={href} style={style} target={target}>{ children }</AnchorComponent>
  );
}

export default Anchor;
