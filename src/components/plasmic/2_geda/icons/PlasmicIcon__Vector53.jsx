// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector53Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 7"}
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
          "M.47 6.885a.47.47 0 01-.468-.52C.116 5.337.295 3.94.515 3.117c.269-1.003.589-1.885.953-2.623A9.72 9.72 0 011.59.25a.47.47 0 01.83.44 8.745 8.745 0 00-.112.22c-.336.682-.635 1.507-.887 2.45-.205.765-.377 2.112-.485 3.106a.47.47 0 01-.467.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector53Icon;
/* prettier-ignore-end */
