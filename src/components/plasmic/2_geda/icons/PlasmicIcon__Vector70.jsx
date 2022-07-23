// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector70Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.376.71C.584.71.752.553.752.356A.366.366 0 00.376 0 .366.366 0 000 .355c0 .197.168.356.376.356z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector70Icon;
/* prettier-ignore-end */
