// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector59Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 3"}
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
          "M1.173 0h15.654C17.475 0 18 .496 18 1.108v.69c0 .613-.525 1.109-1.173 1.109H1.173C.525 2.907 0 2.41 0 1.799v-.691C0 .496.525 0 1.173 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector59Icon;
/* prettier-ignore-end */
