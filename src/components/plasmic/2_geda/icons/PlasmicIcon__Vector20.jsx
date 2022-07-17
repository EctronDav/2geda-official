// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
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
          "M4.672 15.757a.717.717 0 01-.425-.127C1.7 14.1 0 10.576 0 6.88 0 3.1 3.1 0 6.88 0a7.2 7.2 0 013.738 1.062c.382.255.51.764.255 1.19a.872.872 0 01-1.19.254 5.384 5.384 0 00-2.802-.807c-2.846 0-5.182 2.336-5.182 5.182 0 3.1 1.401 6.073 3.398 7.305.382.255.51.764.297 1.147a.788.788 0 01-.722.424z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
