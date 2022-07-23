// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector51Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.47.94A.467.467 0 010 .47.468.468 0 01.29.036a.476.476 0 01.36 0 .5.5 0 01.152.101.474.474 0 01-.071.723.5.5 0 01-.17.07.466.466 0 01-.091.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector51Icon;
/* prettier-ignore-end */
