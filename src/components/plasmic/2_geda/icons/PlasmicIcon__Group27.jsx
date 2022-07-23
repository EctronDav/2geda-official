// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group27Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 2"}
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
          "M1.38 0v1.485H.136l.22-.33a.48.48 0 00-.103-.65A.638.638 0 010 0m15.675 0a.638.638 0 01-.253.504.48.48 0 00-.103.652l.22.33h-1.245V0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group27Icon;
/* prettier-ignore-end */
