// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SvgCleanerId0Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 17"}
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
          "M12.683 0A5.71 5.71 0 009 1.379 5.71 5.71 0 005.317 0C2.335 0 0 2.335 0 5.317c0 3.603 2.51 5.806 6.307 9.14l1.004.884a.313.313 0 00.008.006l1.146.99a.817.817 0 001.07 0l1.147-.99a.21.21 0 00.007-.006c2.27-2.007 3.972-3.544 5.203-5.043C17.33 8.548 18 6.964 18 5.317 18 2.335 15.665 0 12.683 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SvgCleanerId0Icon;
/* prettier-ignore-end */
