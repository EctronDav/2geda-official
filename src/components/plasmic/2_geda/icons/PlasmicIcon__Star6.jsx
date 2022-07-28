// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M15.762 6.418a1.08 1.08 0 00-.962-.751l-3.914-.27-1.45-3.657a1.08 1.08 0 00-1.001-.686 1.08 1.08 0 00-1.002.686L5.957 5.417l-3.888.25a1.087 1.087 0 00-.962.751 1.107 1.107 0 00.343 1.193l2.992 2.53-.89 3.499a1.219 1.219 0 00.461 1.291 1.186 1.186 0 001.325.04l3.09-1.957h.013l3.328 2.102c.17.11.37.17.573.171a1.087 1.087 0 001.041-1.37l-.942-3.829 2.978-2.477a1.107 1.107 0 00.343-1.193z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star6Icon;
/* prettier-ignore-end */
