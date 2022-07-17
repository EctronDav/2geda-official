// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group14Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 31"}
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
          "M25.402 0h-15.09C5.37 0 1.223 3.361 0 7.918c.58-.097 1.17-.16 1.778-.16h15.09c5.902 0 10.688 4.785 10.688 10.689v8.802c0 .977-.143 1.921-.388 2.823 5.01-.925 8.922-5.34 8.922-10.582v-8.802C36.09 4.785 31.304 0 25.402 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
