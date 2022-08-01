// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ovjdXhydzXTq3Bc7u9wCpt
// Component: D_xLN7HSDJ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsgcBBykOvh4Vq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gcB_bykOvh4VQ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_2_geda.module.css"; // plasmic-import: ovjdXhydzXTq3Bc7u9wCpt/projectcss
import sty from "./PlasmicDashboardHeader.module.css"; // plasmic-import: D_xLN7HSDJ/css
import MagnifyingGlassIcon from "./icons/PlasmicIcon__MagnifyingGlass"; // plasmic-import: vPllSbWx1H/icon
import unsplash5N3Jp9WajTsYDdWxVaitl from "./images/unsplash5N3Jp9WajTs.svg"; // plasmic-import: yDDWxVaitl/picture

export const PlasmicDashboardHeader__VariantProps = new Array();

export const PlasmicDashboardHeader__ArgProps = new Array();

function PlasmicDashboardHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgcBBykOvh4Vq()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"group243"}
        data-plasmic-override={overrides.group243}
        className={classNames(projectcss.all, sty.group243)}
      >
        <div
          data-plasmic-name={"_2Geda11"}
          data-plasmic-override={overrides._2Geda11}
          className={classNames(projectcss.all, sty._2Geda11)}
        />

        <div
          data-plasmic-name={"group10"}
          data-plasmic-override={overrides.group10}
          className={classNames(projectcss.all, sty.group10)}
        >
          <div
            data-plasmic-name={"group241"}
            data-plasmic-override={overrides.group241}
            className={classNames(projectcss.all, sty.group241)}
          >
            <input
              data-plasmic-name={"rectangle30"}
              data-plasmic-override={overrides.rectangle30}
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.rectangle30
              )}
              placeholder={
                hasVariant(globalVariants, "screen", "mobile")
                  ? "search"
                  : "search name, place and business"
              }
              type={"text"}
            />

            <MagnifyingGlassIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        </div>

        {(hasVariant(globalVariants, "screen", "smallMobile") ? true : true) ? (
          <div
            data-plasmic-name={"group242"}
            data-plasmic-override={overrides.group242}
            className={classNames(projectcss.all, sty.group242)}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"40px"}
              loading={"lazy"}
              src={{
                src: unsplash5N3Jp9WajTsYDdWxVaitl,
                fullWidth: 40,
                fullHeight: 40,
                aspectRatio: 1
              }}
            />

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"My Profile"}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "group243",
    "_2Geda11",
    "group10",
    "group241",
    "rectangle30",
    "svg",
    "group242",
    "img",
    "text"
  ],

  group243: [
    "group243",
    "_2Geda11",
    "group10",
    "group241",
    "rectangle30",
    "svg",
    "group242",
    "img",
    "text"
  ],

  _2Geda11: ["_2Geda11"],
  group10: ["group10", "group241", "rectangle30", "svg"],
  group241: ["group241", "rectangle30", "svg"],
  rectangle30: ["rectangle30"],
  svg: ["svg"],
  group242: ["group242", "img", "text"],
  img: ["img"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDashboardHeader__ArgProps,
          internalVariantPropNames: PlasmicDashboardHeader__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicDashboardHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDashboardHeader";
  } else {
    func.displayName = `PlasmicDashboardHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicDashboardHeader = Object.assign(
  // Top-level PlasmicDashboardHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    group243: makeNodeComponent("group243"),
    _2Geda11: makeNodeComponent("_2Geda11"),
    group10: makeNodeComponent("group10"),
    group241: makeNodeComponent("group241"),
    rectangle30: makeNodeComponent("rectangle30"),
    svg: makeNodeComponent("svg"),
    group242: makeNodeComponent("group242"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicDashboardHeader
    internalVariantProps: PlasmicDashboardHeader__VariantProps,
    internalArgProps: PlasmicDashboardHeader__ArgProps
  }
);

export default PlasmicDashboardHeader;
/* prettier-ignore-end */
