// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 28"}
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
          "M16.875 0H0v3.75h16.875V0zM7.5 6.563H0v1.875h7.5V6.562zm9.375 0h-7.5v1.875h7.5V6.562zM7.5 10.313H0v1.874h7.5v-1.874zm9.375 0h-7.5v1.874h7.5v-1.874zM7.5 14.063H0v1.874h7.5v-1.874zm9.375 0h-7.5v1.874h7.5v-1.874zM7.5 17.813H0v1.875h7.5v-1.875zm9.375 0h-7.5v1.875h7.5v-1.875zM7.5 21.563H0v1.875h7.5v-1.875zm9.375 0h-7.5v1.875h7.5v-1.875zM7.5 25.313H0v1.875h7.5v-1.875zm9.375 0h-7.5v1.875h7.5v-1.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
