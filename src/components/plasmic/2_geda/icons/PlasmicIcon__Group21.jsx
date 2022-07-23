// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group21Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 2"}
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
        d={"M.129 1.689h7.21l.068-.95H.061l.068.95z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M.129 1.689h7.21L7.474 0H0l.129 1.689z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
