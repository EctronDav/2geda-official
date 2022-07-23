// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group22Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
        d={"M.944 1.48l.068.949h.629l-.069-.95H.944z"}
        fill={"currentColor"}
      ></path>

      <path
        opacity={".15"}
        d={
          "M.628.846V.634c0-.35.268-.634.6-.634h-.63C.269 0 0 .284 0 .634v.212c0 .35.268.634.599.634h.628c-.33 0-.599-.284-.599-.634z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
