interface ImageProps {
  img: string;
  alt: string;
}
function Image({ img, alt }: ImageProps) {
  return(
    <img src={img} alt={alt} />
  )
}

export default Image;
