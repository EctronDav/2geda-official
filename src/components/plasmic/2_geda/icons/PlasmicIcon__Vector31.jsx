// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector31Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 11"}
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
          "M5.394 10.746c-1.274 0-2.633-.17-4.077-.468l-.17-.042L0 9.429l.042-.51C.425 3.95 4.63 0 9.6 0a9.613 9.613 0 019.471 7.985l.17.892-.892.127c-.127 0-3.228.382-5.266-1.316-1.487 1.953-4.248 3.058-7.688 3.058zM1.869 8.622c4.714 1.02 8.834 0 10.108-2.463l.722-1.7.892 1.275c.892 1.274 2.549 1.529 3.568 1.571-1.02-3.313-4.035-5.606-7.56-5.606-3.95 0-7.263 2.973-7.815 6.838l.085.085z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
