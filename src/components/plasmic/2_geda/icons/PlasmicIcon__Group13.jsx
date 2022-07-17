// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group13Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 17"}
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
          "M7.406 9.811c-.127 0-.255-.042-.382-.085-1.656-.892-2.803-3.058-2.803-5.436A4.278 4.278 0 018.51 0c.722 0 1.359.17 1.996.467a.851.851 0 01.382 1.147.851.851 0 01-1.147.382 2.514 2.514 0 00-1.23-.296A2.574 2.574 0 005.92 4.29c0 1.7.807 3.356 1.869 3.908.424.213.552.722.34 1.147a.785.785 0 01-.723.467z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M5.75 16.097H1.46c-.467 0-.934-.212-1.19-.595-.254-.382-.339-.807-.211-1.231l.68-2.464c.849-2.76 2.802-3.44 4.926-3.95a.814.814 0 011.02.638.814.814 0 01-.638 1.019c-2.123.51-3.143 1.062-3.695 2.76l-.595 2.124H5.75c.467 0 .85.383.85.85 0 .467-.383.85-.85.85z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
