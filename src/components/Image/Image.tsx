import {DefaultTheme, makeStyles} from "@mui/styles"
import React, { ImgHTMLAttributes } from 'react';

export type ImageProps = Partial<Pick<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src' | 'height' | 'width' > & {
  objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down',
  style?: React.CSSProperties
}>

const imageClasses = makeStyles<DefaultTheme, ImageProps, 'root'>({ root: {
  objectFit: props => props.objectFit, 
  height: props => props.height, 
  width: props => props.width, 
}})

function Image(props: ImageProps) {
  const classes = imageClasses(props);
  return (
    <img
      alt={props.alt}
      src={props.src}
      height={props.height}
      width={props.width}
      className={classes.root}
      style={{...props.style }}
    />
  );
}

export default Image;
