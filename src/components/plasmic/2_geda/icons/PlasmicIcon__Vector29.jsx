// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector29Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 16"}
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
          "M9.556 15.687C4.375 15.687 0 9.57 0 2.308c0-.255 0-.51.042-.807.085-.467.553-.765 1.02-.68.467.085.764.553.68 1.02-.043.127-.043.297-.043.467 0 6.201 3.653 11.68 7.857 11.68 4.205 0 7.9-5.479 7.9-11.68 0-.467-.042-.934-.127-1.317a.829.829 0 01.68-.977.829.829 0 01.976.68c.085.51.128 1.062.128 1.656.042 7.093-4.46 13.337-9.557 13.337z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
