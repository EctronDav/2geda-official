// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector83Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 9"}
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
          "M8.41 5.588l-1.098.634a.526.526 0 01-.79-.455h-.001V3.23a.527.527 0 01.822-.438l1.067.617.027.017 1.07.617a.525.525 0 01-.006.914l-1.091.63zM15.23 0H1.061C.478 0 0 .478 0 1.062v7.934h16.292V1.062C16.292.478 15.813 0 15.229 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector83Icon;
/* prettier-ignore-end */
