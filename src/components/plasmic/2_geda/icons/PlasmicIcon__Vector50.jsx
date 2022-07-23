// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector50Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 4"}
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
          "M.628 1.978v-.571C.628.632 1.224 0 1.958 0h-.627C.596 0 0 .63 0 1.409v.569c0 .778.596 1.408 1.33 1.408h.629c-.735 0-1.33-.63-1.33-1.409z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector50Icon;
/* prettier-ignore-end */
