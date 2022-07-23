// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group36Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 3"}
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
          "M2.12 2.194h-.9C.551 2.194 0 1.727 0 1.097 0 .467.552 0 1.22 0h1.19m13.064 2.194h.9c.668 0 1.22-.467 1.22-1.097 0-.63-.552-1.097-1.22-1.097h-1.19"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group36Icon;
/* prettier-ignore-end */
