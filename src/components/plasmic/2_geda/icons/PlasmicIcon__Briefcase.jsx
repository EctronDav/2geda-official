// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BriefcaseIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M13.5 4H11v-.5A1.506 1.506 0 009.5 2h-3A1.506 1.506 0 005 3.5V4H2.5a1 1 0 00-1 1v8a1 1 0 001 1h11a1 1 0 001-1V5a1 1 0 00-1-1zM6 3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V4H6v-.5zM13.5 5v2.6A11.475 11.475 0 018 9a11.475 11.475 0 01-5.5-1.4V5h11zM6.75 7.5a.5.5 0 01.5-.5h1.5a.5.5 0 110 1h-1.5a.5.5 0 01-.5-.5z"
        }
        fill={"currentColor"}
        fillOpacity={".2"}
      ></path>
    </svg>
  );
}

export default BriefcaseIcon;
/* prettier-ignore-end */
