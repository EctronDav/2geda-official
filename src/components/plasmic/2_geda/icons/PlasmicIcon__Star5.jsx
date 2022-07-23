// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M6.39 8.764l2.052 1.303c.265.167.59-.082.513-.387L8.36 7.343a.354.354 0 01.118-.358l1.84-1.535c.24-.2.118-.602-.196-.623L7.72 4.672a.338.338 0 01-.297-.22l-.896-2.255a.338.338 0 00-.635 0l-.895 2.256a.338.338 0 01-.297.22l-2.402.154c-.314.02-.436.424-.196.623l1.84 1.535a.354.354 0 01.118.358l-.55 2.166c-.093.366.298.664.611.464l1.91-1.209a.334.334 0 01.358 0v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Star5Icon;
/* prettier-ignore-end */
