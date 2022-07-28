// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ovjdXhydzXTq3Bc7u9wCpt
// Component: Gn6XkLaEoG
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_2_geda.module.css"; // plasmic-import: ovjdXhydzXTq3Bc7u9wCpt/projectcss
import sty from "./PlasmicInventoryList.module.css"; // plasmic-import: Gn6XkLaEoG/css
import unsplashINwSiOcNzMgEGqqCl3UoC2 from "./images/unsplashINwSiOcNzMg.jpeg"; // plasmic-import: EGqqCl3UoC2/picture

export const PlasmicInventoryList__VariantProps = new Array();

export const PlasmicInventoryList__ArgProps = new Array();

function PlasmicInventoryList__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
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
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__htLUz
        )}
      >
        {"My Inventory"}
      </div>

      <div
        data-plasmic-name={"list"}
        data-plasmic-override={overrides.list}
        className={classNames(projectcss.all, sty.list)}
      >
        <div
          data-plasmic-name={"group166"}
          data-plasmic-override={overrides.group166}
          className={classNames(projectcss.all, sty.group166)}
        >
          <div
            data-plasmic-name={"redNike"}
            data-plasmic-override={overrides.redNike}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.redNike
            )}
          >
            {"Red Nike "}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__inCkc
            )}
          >
            {"#2,000,000"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__mV3Xv
            )}
          >
            {"Posted 24/02/2022"}
          </div>

          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"58px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"58px"}
            loading={"lazy"}
            src={{
              src: unsplashINwSiOcNzMgEGqqCl3UoC2,
              fullWidth: 2880,
              fullHeight: 1620,
              aspectRatio: undefined
            }}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "list", "group166", "redNike", "img"],
  list: ["list", "group166", "redNike", "img"],
  group166: ["group166", "redNike", "img"],
  redNike: ["redNike"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicInventoryList__ArgProps,
          internalVariantPropNames: PlasmicInventoryList__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicInventoryList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInventoryList";
  } else {
    func.displayName = `PlasmicInventoryList.${nodeName}`;
  }
  return func;
}

export const PlasmicInventoryList = Object.assign(
  // Top-level PlasmicInventoryList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    list: makeNodeComponent("list"),
    group166: makeNodeComponent("group166"),
    redNike: makeNodeComponent("redNike"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicInventoryList
    internalVariantProps: PlasmicInventoryList__VariantProps,
    internalArgProps: PlasmicInventoryList__ArgProps
  }
);

export default PlasmicInventoryList;
/* prettier-ignore-end */