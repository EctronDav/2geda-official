// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group24Icon(props) {
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
        opacity={".15"}
        d={
          "M.628 1.355C.628.607 1.201 0 1.908 0H1.28C.573 0 0 .607 0 1.355S.573 2.71 1.28 2.71h.176c.001-.029.003-.057.006-.085-.487-.192-.834-.688-.834-1.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
