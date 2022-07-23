// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector61Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 11"}
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
          "M5.626 10.626c3.107 0 5.625-2.378 5.625-5.313C11.251 2.38 8.733 0 5.626 0S0 2.379 0 5.313c0 2.935 2.519 5.313 5.626 5.313z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector61Icon;
/* prettier-ignore-end */
