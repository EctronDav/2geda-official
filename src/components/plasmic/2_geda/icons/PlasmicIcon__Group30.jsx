// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group30Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 7"}
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
          "M15.598 0h-2.026v.547h2.026V0zM0 1.367c1.244 3.006 4.37 5.192 8.045 5.192s6.8-2.186 8.045-5.192H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group30Icon;
/* prettier-ignore-end */
