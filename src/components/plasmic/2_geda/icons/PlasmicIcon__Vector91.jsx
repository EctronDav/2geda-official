// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector91Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M2.664 2.516a1.625 1.625 0 01-2.207 0 1.416 1.416 0 010-2.084 1.625 1.625 0 012.207 0c.61.576.61 1.508 0 2.084z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector91Icon;
/* prettier-ignore-end */
