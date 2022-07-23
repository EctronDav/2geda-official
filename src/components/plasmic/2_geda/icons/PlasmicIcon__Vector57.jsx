// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector57Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 7"}
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
          "M13.525 5.647L.891 6.68 0 6.754V.216S.338.086.89.027c1.001-.105 2.705.027 4.374 1.604 2.592 2.448 4.01 1.033 6.277 1.76 1.32.422 1.775 1.118 1.926 1.625.107.364.058.63.058.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector57Icon;
/* prettier-ignore-end */
