// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Camera2Icon(props) {
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
          "M26 7h-3.462l-1.7-2.55A.988.988 0 0020 4h-8a.988.988 0 00-.838.45L9.463 7H6a3.013 3.013 0 00-3 3v14a3.012 3.012 0 003 3h20a3.012 3.012 0 003-3V10a3.012 3.012 0 00-3-3zm-5.5 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Camera2Icon;
/* prettier-ignore-end */
