interface ImageProps {
  img: string;
  alt: string;
  style?: React.CSSProperties;
}
function Image({ img, alt, style }: ImageProps) {
  return(
    <img src={img} alt={alt} style={style} />
  )
}

export default Image;
