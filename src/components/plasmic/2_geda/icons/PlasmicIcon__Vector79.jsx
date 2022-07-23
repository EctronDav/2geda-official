// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector79Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M2.25 0C1.499.3.805-.137.226.52c-.347.355-.232.874-.058 1.448.608.164 1.129.273 1.534-.055.665-.546.231-1.202.55-1.913z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector79Icon;
/* prettier-ignore-end */
