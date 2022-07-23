// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group25Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 12"}
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
          "M14.097 6.18C13.292 3.173 12 .926 9.837 0v1.16L7.37.035 4.902 1.16V.045C2.782.988 1.512 3.217.715 6.194.267 7.867 0 11.44 0 11.44h14.817s-.273-3.585-.72-5.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
