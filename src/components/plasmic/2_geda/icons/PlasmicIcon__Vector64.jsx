// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector64Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 8"}
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
          "M4.1 7.747C1.838 7.747 0 6.01 0 3.874S1.838 0 4.1 0c2.262 0 4.1 1.736 4.1 3.872S6.362 7.747 4.1 7.747z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector64Icon;
/* prettier-ignore-end */
