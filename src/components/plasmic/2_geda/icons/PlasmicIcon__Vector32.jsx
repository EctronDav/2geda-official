// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector32Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 37"}
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
          "M25.777 0H10.688C4.786 0 0 4.785 0 10.688v8.802c0 5.903 4.96 10.77 10.862 10.77v5.777c0 .39.298.585.574.31l1.18-1.18c3.194-3.193 7.525-4.907 12.042-4.907h1.12c5.902 0 10.688-4.866 10.688-10.769v-8.802C36.465 4.785 31.68 0 25.776 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
