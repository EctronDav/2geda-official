// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector60Icon(props) {
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
          "M1.296 1.799v-.691C1.296.496 1.82 0 2.469 0H1.173C.525 0 0 .496 0 1.108v.69c0 .613.525 1.109 1.173 1.109h1.296c-.648 0-1.173-.496-1.173-1.108z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector60Icon;
/* prettier-ignore-end */
