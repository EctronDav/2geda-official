// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector30Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 9"}
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
          "M0 8.112C.34 3.568 4.12 0 8.707 0c4.332 0 7.9 3.143 8.622 7.263 0 0-3.695.467-5.352-1.911l-.127.297C10.49 8.367 6.159 9.769.637 8.537L0 8.112z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector30Icon;
/* prettier-ignore-end */
