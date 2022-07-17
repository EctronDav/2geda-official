// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector25Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 17"}
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
          "M29.311 16.595H2.384c-.722 0-1.444-.34-1.869-.934-.467-.595-.637-1.36-.425-2.081l1.784-6.201A10.433 10.433 0 019.222.2l.51-.128c.764-.212 1.614.043 2.166.68 1.869 2.124 4.247 2.294 6.753 2.294 2.506 0 4.884-.17 6.753-2.294.552-.637 1.402-.892 2.166-.68l.51.128c3.525.934 6.37 3.652 7.39 7.178l.765 2.633a.85.85 0 01-.595 1.062.85.85 0 01-1.062-.595l-.764-2.633a8.677 8.677 0 00-6.159-5.989l-.51-.127a.487.487 0 00-.51.17c-2.293 2.633-5.18 2.845-7.984 2.845-2.803 0-5.691-.212-8.027-2.888-.128-.127-.298-.212-.468-.17l-.51.128a8.732 8.732 0 00-6.158 6.03l-1.784 6.202a.737.737 0 00.128.595.747.747 0 00.552.254H29.31c.468 0 .85.383.85.85 0 .467-.382.85-.85.85z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
