// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector45Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 2"}
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
          "M7.59 0H.184A.19.19 0 000 .196v1.466a.19.19 0 00.185.196h7.404a.19.19 0 00.185-.196V.196A.19.19 0 007.589 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector45Icon;
/* prettier-ignore-end */
