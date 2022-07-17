// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector28Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 15"}
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
          "M9.769.765C9.47 7.645 5.224 14.015 0 14.015 2.463 12.063 4.545 7.39 5.436 0 8.325.892 9.77.51 9.77.765z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector28Icon;
/* prettier-ignore-end */
