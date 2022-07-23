// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector46Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        opacity={".15"}
        d={
          "M.628 1.662V.196A.19.19 0 01.813 0H.185A.19.19 0 000 .196v1.466a.19.19 0 00.185.196h.628a.19.19 0 01-.185-.196z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector46Icon;
/* prettier-ignore-end */
