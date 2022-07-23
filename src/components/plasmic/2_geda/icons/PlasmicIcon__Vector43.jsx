// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector43Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 11"}
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
          "M7.268.063A.18.18 0 007.132 0H.185a.18.18 0 00-.136.063.203.203 0 00-.048.148l.72 9.988a.19.19 0 00.184.181h5.601V6.236c.097 0 .276 1.191.283 1.09L7.317.21a.203.203 0 00-.049-.148zM1.665 7.75a1.402 1.402 0 01-.22-.757c0-.28.081-.542.22-.758V7.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector43Icon;
/* prettier-ignore-end */
