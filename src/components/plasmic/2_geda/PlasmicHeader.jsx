// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ovjdXhydzXTq3Bc7u9wCpt
// Component: WzKkY_fim5
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
import sty from "./PlasmicHeader.module.css"; // plasmic-import: WzKkY_fim5/css
import _2Geda21PngXbZrXrHk from "./images/_2Geda21Png.png"; // plasmic-import: xbZrXR_Hk/picture

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgcBBykOvh4Vq()
  });

  return (hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
    <p.Stack
      as={"header"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"logo"}
        data-plasmic-override={overrides.logo}
        alt={"logo"}
        className={classNames(sty.logo)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"90px"}
        loading={"lazy"}
        src={{
          src: _2Geda21PngXbZrXrHk,
          fullWidth: 80,
          fullHeight: 80,
          aspectRatio: undefined
        }}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"headerRight"}
        data-plasmic-override={overrides.headerRight}
        hasGap={true}
        className={classNames(projectcss.all, sty.headerRight)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <button
            data-plasmic-name={"signinButton"}
            data-plasmic-override={overrides.signinButton}
            className={classNames(
              projectcss.all,
              projectcss.button,
              projectcss.__wab_text,
              sty.signinButton
            )}
            onClick={""}
          >
            {"Sign in"}
          </button>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <button
            data-plasmic-name={"signupButton"}
            data-plasmic-override={overrides.signupButton}
            className={classNames(
              projectcss.all,
              projectcss.button,
              projectcss.__wab_text,
              sty.signupButton
            )}
            onClick={""}
          >
            {"Sign up"}
          </button>
        ) : null}
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Forgot Password"}
        </div>
      ) : null}
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "logo", "headerRight", "signinButton", "signupButton", "text"],
  logo: ["logo"],
  headerRight: ["headerRight", "signinButton", "signupButton"],
  signinButton: ["signinButton"],
  signupButton: ["signupButton"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    headerRight: makeNodeComponent("headerRight"),
    signinButton: makeNodeComponent("signinButton"),
    signupButton: makeNodeComponent("signupButton"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
