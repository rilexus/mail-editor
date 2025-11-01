import { forwardRef } from "react";

export const Img = forwardRef(
  ({ alt, src, width, height, style, ...props }, ref) => (
    <img
      {...props}
      alt={alt}
      height={height}
      ref={ref}
      src={src}
      style={{
        display: "block",
        outline: "none",
        border: "none",
        textDecoration: "none",
        ...style,
      }}
      width={width}
    />
  )
);

Img.displayName = "Img";
