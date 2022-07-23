// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector84Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M.79 3.52l1.1-.635h-.001l1.09-.63a.525.525 0 00.006-.914L1.917.723 1.89.706.822.09A.527.527 0 000 .527v2.538h.001a.526.526 0 00.79.455z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector84Icon;
/* prettier-ignore-end */
