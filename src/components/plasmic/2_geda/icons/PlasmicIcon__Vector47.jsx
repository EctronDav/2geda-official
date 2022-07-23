// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector47Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 3"}
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
          "M13.316 0H1.28C.573 0 0 .607 0 1.355S.573 2.71 1.28 2.71h12.036c.707 0 1.28-.607 1.28-1.355S14.023 0 13.316 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector47Icon;
/* prettier-ignore-end */
