// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector42Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 17"}
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
          "M6.307 14.457a364.041 364.041 0 011.012.89l1.146.99a.818.818 0 00.535.2v-5.54H7.909V8.813H5.727V6.632h2.182V4.449H9V1.38A5.71 5.71 0 005.317 0C2.335 0 0 2.335 0 5.317c0 3.603 2.51 5.806 6.307 9.14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector42Icon;
/* prettier-ignore-end */
