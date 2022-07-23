// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector93Icon(props) {
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
          "M1.568 2.961c.866 0 1.567-.663 1.567-1.48C3.135.663 2.434 0 1.568 0S0 .663 0 1.48c0 .818.702 1.481 1.568 1.481z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector93Icon;
/* prettier-ignore-end */
