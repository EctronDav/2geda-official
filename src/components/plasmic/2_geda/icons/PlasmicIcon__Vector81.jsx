// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector81Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M1.712 0v.055V0C1.133 1.148-.082 1.394.004 2.76c.058.793.81 1.258 1.679 1.722l.029-.054-.03.027c.869-.465 1.65-.93 1.708-1.722.087-1.34-1.1-1.585-1.678-2.733z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector81Icon;
/* prettier-ignore-end */
