// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector49Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 4"}
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
          "M10.356 0H1.331C.596 0 0 .63 0 1.409v.569c0 .778.596 1.408 1.33 1.408h9.027c.735 0 1.33-.63 1.33-1.409V1.41c0-.78-.595-1.41-1.33-1.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector49Icon;
/* prettier-ignore-end */
