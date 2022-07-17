// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 3"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 0c0 1.16.916 2.102 2.045 2.102 1.13 0 2.046-.941 2.046-2.102H0zm8.182 0c0 1.16.916 2.102 2.045 2.102 1.13 0 2.046-.941 2.046-2.102H8.182zm8.182 0c0 1.16.915 2.102 2.045 2.102S20.455 1.161 20.455 0h-4.091zm8.181 0c0 1.16.916 2.102 2.046 2.102S28.637 1.161 28.637 0h-4.092zm8.182 0c0 1.16.916 2.102 2.046 2.102S36.818 1.161 36.818 0h-4.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
