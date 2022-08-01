// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function House2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M19 26v-6a1 1 0 00-1-1h-4a1 1 0 00-1 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1V14.437a1.038 1.038 0 01.325-.737l10-9.087a1 1 0 011.35 0l10 9.087a1.039 1.039 0 01.325.738V26a1 1 0 01-1 1h-6a1 1 0 01-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default House2Icon;
/* prettier-ignore-end */
