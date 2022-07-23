// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group33Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.84.437L.086 0l.752.71L1.62 0 .838.437zm0 1.476l-.753-.437.752.71.782-.71-.782.437z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M.84 1.175L0 .655l.84.82.867-.82-.868.52z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group33Icon;
/* prettier-ignore-end */
