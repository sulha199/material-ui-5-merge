import React, { ImgHTMLAttributes } from 'react';

type ImageProps = Partial<Pick<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src' | 'height' | 'width' > & {
  objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down',
  style?: React.CSSProperties
}>

function Image(props: ImageProps) {
  return (
    <img
      alt={props.alt}
      src={props.src}
      height={props.height}
      width={props.width}
      style={{ objectFit: props.objectFit, height: props.height, width: props.width, ...props.style }}
    />
  );
}

export default Image;
