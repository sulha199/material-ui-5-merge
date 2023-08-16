import React from 'react';
type ImageProps = Partial<Pick<HTMLImageElement, 'alt' | 'src' | 'height' | 'width'> & {
    objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    style?: React.CSSProperties;
}>;
declare function Image(props: ImageProps): import("react/jsx-runtime").JSX.Element;
export default Image;
