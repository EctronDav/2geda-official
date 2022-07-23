// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group32Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M.723.574L.58 0v.765h.723L.723.574zm-.607.601L0 .655v.657h.608l-.492-.137z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M.434.875L.29.273v.766h.753L.434.875z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group32Icon;
/* prettier-ignore-end */
