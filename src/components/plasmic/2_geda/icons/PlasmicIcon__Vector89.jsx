// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector89Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 5"}
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
          "M11.613 4.935V2.14C11.613.932 10.48 0 9.203 0H2.41C1.132 0 0 .96 0 2.139v2.796h11.613z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector89Icon;
/* prettier-ignore-end */
