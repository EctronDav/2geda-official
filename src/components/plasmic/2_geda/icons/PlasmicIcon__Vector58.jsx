// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector58Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 7"}
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
          "M13.467 4.931s-8.18.008-11.346.022c-.679.003-1.23-.516-1.23-1.157V0a3.84 3.84 0 00-.89.189v5.845L0 6.04v.687l.891-.073v-.057l12.634-1.035s.05-.267-.058-.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector58Icon;
/* prettier-ignore-end */
