// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector27Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 10"}
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
          "M8.027 9.886H.85a.852.852 0 01-.85-.85c0-.466.382-.849.85-.849h7.177c.298 0 .468-.17.552-.254a.837.837 0 00.128-.638l-1.784-6.2A.85.85 0 017.518.032a.85.85 0 011.061.594l1.784 6.201a2.365 2.365 0 01-.424 2.124 2.456 2.456 0 01-1.912.934z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
