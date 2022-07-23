// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 11"}
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
        opacity={".15"}
        d={
          "M2.293 7.75V6.237a1.408 1.408 0 000 1.515zM1.35 10.2L.628.21A.203.203 0 01.677.064.18.18 0 01.813 0H.185a.18.18 0 00-.136.063.203.203 0 00-.048.148l.72 9.988a.19.19 0 00.184.181h.629a.19.19 0 01-.185-.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group20Icon;
/* prettier-ignore-end */
