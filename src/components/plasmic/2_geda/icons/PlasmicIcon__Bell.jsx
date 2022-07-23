// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BellIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.025 13a8.987 8.987 0 019.037-9c4.95.038 8.913 4.15 8.913 9.113V14c0 4.475.937 7.075 1.762 8.5a1 1 0 01-.862 1.5H6.125a.999.999 0 01-.863-1.5c.825-1.425 1.763-4.025 1.763-8.5v-1zM12 24v1a4 4 0 108 0v-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BellIcon;
/* prettier-ignore-end */
