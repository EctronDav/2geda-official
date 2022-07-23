// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group38Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 13"}
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
          "M0 12.065a1.12 1.12 0 011.103-1.097h15.794c.61 0 1.103.493 1.103 1.07M2.787.685c0-.41.348-.685.755-.685h10.916c.436 0 .755.302.755.713"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group38Icon;
/* prettier-ignore-end */
