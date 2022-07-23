// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M9.739 3.966a.668.668 0 00-.595-.464l-2.418-.167-.896-2.26a.668.668 0 00-.619-.423.668.668 0 00-.618.423L3.68 3.347l-2.402.155a.672.672 0 00-.595.464.684.684 0 00.212.737l1.848 1.563-.55 2.162a.753.753 0 00.286.798.733.733 0 00.818.024l1.91-1.21h.008l2.055 1.3a.655.655 0 00.884-.16.672.672 0 00.114-.581l-.582-2.366 1.84-1.53a.684.684 0 00.212-.737z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
