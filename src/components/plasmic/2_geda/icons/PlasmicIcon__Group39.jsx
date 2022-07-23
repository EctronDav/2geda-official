// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group39Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 2"}
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
          "M0 1.179V.466C0 .22.174 0 .435 0c.262 0 .436.22.436.466v.713m4.645 0V.466C5.516.22 5.69 0 5.952 0c.26 0 .435.22.435.466v.713"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group39Icon;
/* prettier-ignore-end */
