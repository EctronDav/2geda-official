// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector48Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 2"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.234.634c0-.35-.268-.634-.599-.634H.6C.269 0 0 .284 0 .634v.212c0 .35.268.634.599.634h8.036c.331 0 .6-.284.6-.634V.634z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector48Icon;
/* prettier-ignore-end */
