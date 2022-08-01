// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Storefront2Icon(props) {
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
          "M6 17.45V26a1 1 0 001 1h18a1 1 0 001-1v-8.55M6.75 5h18.5a1.012 1.012 0 01.962.725L28 12H4l1.787-6.275A1.012 1.012 0 016.75 5v0z"
        }
        stroke={"currentColor"}
        strokeOpacity={".3"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 12v2a4 4 0 11-8 0v-2m16 0v2a4 4 0 11-8 0v-2m16 0v2a4 4 0 11-8 0v-2"
        }
        stroke={"currentColor"}
        strokeOpacity={".3"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Storefront2Icon;
/* prettier-ignore-end */
