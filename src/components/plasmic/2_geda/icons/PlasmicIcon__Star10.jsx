// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.724 12.566l3.32 2.108c.43.27.956-.131.831-.625l-.962-3.783a.573.573 0 01.191-.58l2.979-2.484c.388-.323.19-.975-.317-1.008l-3.887-.25a.547.547 0 01-.481-.356l-1.45-3.65a.547.547 0 00-1.028 0l-1.45 3.65a.547.547 0 01-.48.356l-3.888.25c-.508.033-.705.685-.316 1.008l2.978 2.484a.573.573 0 01.19.58l-.889 3.506c-.151.593.481 1.074.989.751l3.09-1.957a.54.54 0 01.58 0v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Star10Icon;
/* prettier-ignore-end */
