// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 1"}
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
          "M.346 0L.079.29a.306.306 0 00.005.415A.268.268 0 00.476.7l.586-.637A.293.293 0 001.106 0h-.76zm1.865 0l-.267.29a.306.306 0 00.005.415A.268.268 0 002.34.7l.586-.637A.294.294 0 002.971 0h-.76zm1.865 0L3.81.29a.306.306 0 00.005.415.268.268 0 00.194.084c.072 0 .144-.03.198-.089l.587-.637A.295.295 0 004.836 0h-.76zm1.865 0l-.267.29a.306.306 0 00.005.415A.268.268 0 006.071.7l.587-.637A.294.294 0 006.702 0h-.76zm1.866 0l-.268.29a.306.306 0 00.005.415A.268.268 0 007.936.7l.587-.637A.294.294 0 008.567 0h-.76z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
