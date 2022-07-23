// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector55Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 5"}
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
          "M4.897 0c-.679 0-1.524.436-1.898.433C2.628.43 1.797 0 1.093 0 .073 0-.154.616.089 1.866c.056.286.272 1.07.476 1.79l2.391 1.09L5.41 3.629c.211-.711.432-1.477.49-1.76C6.144.665 5.916.001 4.897.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector55Icon;
/* prettier-ignore-end */
