import React from "react";
import { Image as Img } from "theme-ui";

export default function Image({ src, ...rest }) {
  // Handle Next.js static imports which return an object with src property
  const imageSrc = typeof src === 'object' && src?.src ? src.src : src;
  return <Img src={imageSrc} {...rest} />;
}
