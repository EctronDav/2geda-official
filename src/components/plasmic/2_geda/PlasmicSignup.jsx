// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ovjdXhydzXTq3Bc7u9wCpt
// Component: CvbYCodVVJ
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
import MainLeft from "../../MainLeft"; // plasmic-import: AuD_LYJAI4/component
import AuthBox2 from "../../AuthBox2"; // plasmic-import: CBPLLuL4Oc/component
import { useScreenVariants as useScreenVariantsgcBBykOvh4Vq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gcB_bykOvh4VQ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_2_geda.module.css"; // plasmic-import: ovjdXhydzXTq3Bc7u9wCpt/projectcss
import sty from "./PlasmicSignup.module.css"; // plasmic-import: CvbYCodVVJ/css
import _2Geda11XT8XtazA5Pq from "./images/_2Geda11.png"; // plasmic-import: xT8XtazA5Pq/picture

export const PlasmicSignup__VariantProps = new Array();

export const PlasmicSignup__ArgProps = new Array();

function PlasmicSignup__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgcBBykOvh4Vq()
  });

  return (
    <React.Fragment>
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
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container)}
        >
          <div
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div
              data-plasmic-name={"headerLeft"}
              data-plasmic-override={overrides.headerLeft}
              className={classNames(projectcss.all, sty.headerLeft)}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"60px"}
                loading={"lazy"}
                src={{
                  src: _2Geda11XT8XtazA5Pq,
                  fullWidth: 512,
                  fullHeight: 516,
                  aspectRatio: undefined
                }}
              />
            </div>

            <div
              data-plasmic-name={"headerRight"}
              data-plasmic-override={overrides.headerRight}
              className={classNames(projectcss.all, sty.headerRight)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    projectcss.__wab_text,
                    sty.button
                  )}
                >
                  {"Sign in"}
                </button>
              ) : null}
            </div>
          </div>

          <div
            data-plasmic-name={"main"}
            data-plasmic-override={overrides.main}
            className={classNames(projectcss.all, sty.main)}
          >
            {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
              <MainLeft
                data-plasmic-name={"mainLeft"}
                data-plasmic-override={overrides.mainLeft}
                className={classNames("__wab_instance", sty.mainLeft)}
              />
            ) : null}

            <AuthBox2
              data-plasmic-name={"authBox2"}
              data-plasmic-override={overrides.authBox2}
              className={classNames("__wab_instance", sty.authBox2)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "container",
    "header",
    "headerLeft",
    "img",
    "headerRight",
    "button",
    "main",
    "mainLeft",
    "authBox2"
  ],

  container: [
    "container",
    "header",
    "headerLeft",
    "img",
    "headerRight",
    "button",
    "main",
    "mainLeft",
    "authBox2"
  ],

  header: ["header", "headerLeft", "img", "headerRight", "button"],
  headerLeft: ["headerLeft", "img"],
  img: ["img"],
  headerRight: ["headerRight", "button"],
  button: ["button"],
  main: ["main", "mainLeft", "authBox2"],
  mainLeft: ["mainLeft"],
  authBox2: ["authBox2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSignup__ArgProps,
          internalVariantPropNames: PlasmicSignup__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    header: makeNodeComponent("header"),
    headerLeft: makeNodeComponent("headerLeft"),
    img: makeNodeComponent("img"),
    headerRight: makeNodeComponent("headerRight"),
    button: makeNodeComponent("button"),
    main: makeNodeComponent("main"),
    mainLeft: makeNodeComponent("mainLeft"),
    authBox2: makeNodeComponent("authBox2"),
    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */
