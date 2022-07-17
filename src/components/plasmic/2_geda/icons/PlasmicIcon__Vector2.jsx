// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M0 0l1.164 3.476h4.75c.69 0 1.252.555 1.252 1.252S6.611 5.98 5.914 5.98H2l.548 1.668h2.12c.69 0 1.252.556 1.252 1.252a1.25 1.25 0 01-1.252 1.253H3.387l2.253 6.729 1.912-4.44c.489-1.074 1.756-.867 2.03-.392l5.67 5.662 2.49-2.49-5.67-5.655c-.54-.504-.555-1.586.393-2.038l4.447-1.904L0 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
