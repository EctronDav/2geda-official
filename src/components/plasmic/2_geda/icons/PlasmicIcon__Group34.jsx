// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group34Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 6"}
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
          "M16.292 0H0v1.275c0 .584.478 1.062 1.062 1.062H15.23c.585 0 1.063-.478 1.063-1.062V0zm-6.058 2.337H6.058l-.354 1.771h4.884l-.354-1.77z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.588 4.108H5.312a.71.71 0 00-.708.709v.708h7.083v-.708a.71.71 0 00-.708-.709h-.391z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group34Icon;
/* prettier-ignore-end */
