// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector82Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 5"}
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
          "M.029 4.455L0 4.428h.058l-.03.027c.87-.465 1.65-.93 1.708-1.722C1.823 1.393.636 1.148.058 0v.055"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector82Icon;
/* prettier-ignore-end */
