// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group29Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M1.736.219L2.17 0l.434.219v2.295l-.434.22-.434-.22V.22zM0 .219L.434 0l.434.219v2.295l-.434.22L0 2.513V.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group29Icon;
/* prettier-ignore-end */
