// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector24Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 15"}
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
          "M28.466 14.907H1.538c-1.02 0-1.741-.977-1.487-1.954l1.784-6.2A9.518 9.518 0 018.588.168l.51-.127c.467-.128.977.042 1.317.425 2.039 2.336 4.63 2.59 7.39 2.59s5.352-.254 7.39-2.59c.34-.383.85-.553 1.317-.425l.552.127a9.518 9.518 0 016.753 6.583l.765 2.634"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
