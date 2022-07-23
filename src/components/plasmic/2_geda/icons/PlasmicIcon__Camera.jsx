// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CameraIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M15.315 15.315H3.535a1.178 1.178 0 01-1.179-1.178V5.89a1.178 1.178 0 011.178-1.178H5.89l1.178-1.767h4.713l1.178 1.767h2.356a1.178 1.178 0 011.178 1.178v8.247a1.178 1.178 0 01-1.178 1.178z"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9.425 12.37a2.65 2.65 0 100-5.302 2.65 2.65 0 000 5.302z"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CameraIcon;
/* prettier-ignore-end */
