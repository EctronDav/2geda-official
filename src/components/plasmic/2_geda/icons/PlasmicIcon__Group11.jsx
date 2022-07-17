// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 3"}
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
          "M4.09 0c0 1.16-.915 2.102-2.045 2.102C.916 2.102 0 1.161 0 0h4.09zm8.183 0c0 1.16-.916 2.102-2.046 2.102S8.182 1.161 8.182 0h4.09zm8.182 0c0 1.16-.916 2.102-2.046 2.102S16.363 1.161 16.363 0h4.092zm8.181 0c0 1.16-.916 2.102-2.045 2.102-1.13 0-2.046-.941-2.046-2.102h4.091zm8.182 0c0 1.16-.916 2.102-2.045 2.102-1.13 0-2.046-.941-2.046-2.102h4.091zM45 0c0 1.16-.916 2.102-2.045 2.102-1.13 0-2.046-.941-2.046-2.102H45z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
