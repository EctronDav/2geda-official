// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ImageIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 46"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M36.612 8.462H6.78c-.749 0-1.356.631-1.356 1.41v25.386c0 .778.607 1.41 1.356 1.41h29.832c.749 0 1.356-.632 1.356-1.41V9.872c0-.779-.607-1.41-1.356-1.41z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.424 29.616l8.526-8.867a1.35 1.35 0 01.442-.311 1.312 1.312 0 011.49.311l7.56 7.863c.126.133.276.239.442.311a1.312 1.312 0 001.49-.311l3.492-3.632a1.35 1.35 0 01.442-.311 1.311 1.311 0 011.49.311l7.17 7.457"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.442 19.744c1.123 0 2.034-.947 2.034-2.115 0-1.168-.91-2.116-2.034-2.116-1.123 0-2.034.948-2.034 2.116 0 1.168.91 2.115 2.034 2.115z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ImageIcon;
/* prettier-ignore-end */
