// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector62Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 8"}
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
          "M4.1 7.744c2.264 0 4.1-1.733 4.1-3.872C8.2 1.734 6.364 0 4.1 0 1.836 0 0 1.734 0 3.872c0 2.139 1.836 3.872 4.1 3.872z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector62Icon;
/* prettier-ignore-end */
