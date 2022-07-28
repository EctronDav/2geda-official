// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star9Icon(props) {
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
          "M15.761 6.418a1.081 1.081 0 00-.962-.751l-3.914-.27-1.45-3.657a1.08 1.08 0 00-1-.686 1.08 1.08 0 00-1.003.686L5.957 5.417l-3.888.25a1.087 1.087 0 00-.962.751 1.107 1.107 0 00.343 1.193l2.991 2.53-.89 3.499a1.219 1.219 0 00.462 1.291 1.186 1.186 0 001.324.04l3.09-1.957h.014l3.327 2.102c.17.11.37.17.573.171a1.087 1.087 0 001.042-1.37l-.943-3.829 2.979-2.477a1.107 1.107 0 00.342-1.193z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star9Icon;
/* prettier-ignore-end */
