// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector44Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M2.27.225L1.682.011a.175.175 0 00-.14.009.192.192 0 00-.095.112L.01 4.56c-.02.06-.01.126.024.178a.184.184 0 00.15.082h.66a.187.187 0 00.175-.133L2.386.474A.199.199 0 002.27.225z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector44Icon;
/* prettier-ignore-end */
