// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector18Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 13"}
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
          "M24.082 12.474H1.826A1.85 1.85 0 01.34 11.71a1.82 1.82 0 01-.255-1.614l1.147-3.95C2.506 1.856 5.606.794 8.919.03a.814.814 0 011.02.637.814.814 0 01-.638 1.019c-3.567.85-5.563 1.826-6.455 4.927l-1.147 3.992c0 .043-.043.085 0 .128 0 .042.042.085.127.085h22.256c.467 0 .85.382.85.85 0 .466-.383.806-.85.806z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
