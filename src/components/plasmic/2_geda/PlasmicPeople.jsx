// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ovjdXhydzXTq3Bc7u9wCpt
// Component: WH3pMQ8XXI
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import DashboardSidebar from "../../DashboardSidebar"; // plasmic-import: 7WJwRnVAxlX/component
import BusinessHeader from "../../BusinessHeader"; // plasmic-import: QNsWw2e-3G/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_2_geda.module.css"; // plasmic-import: ovjdXhydzXTq3Bc7u9wCpt/projectcss
import sty from "./PlasmicPeople.module.css"; // plasmic-import: WH3pMQ8XXI/css

export const PlasmicPeople__VariantProps = new Array();

export const PlasmicPeople__ArgProps = new Array();

function PlasmicPeople__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root2"}
        data-plasmic-override={overrides.root2}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root2
        )}
      >
        <DashboardSidebar
          data-plasmic-name={"dashboardSidebar"}
          data-plasmic-override={overrides.dashboardSidebar}
          className={classNames("__wab_instance", sty.dashboardSidebar)}
        />

        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          className={classNames(projectcss.all, sty.main)}
        >
          <BusinessHeader
            data-plasmic-name={"businessHeader"}
            data-plasmic-override={overrides.businessHeader}
            className={classNames("__wab_instance", sty.businessHeader)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root2: ["root2", "dashboardSidebar", "main", "businessHeader"],
  dashboardSidebar: ["dashboardSidebar"],
  main: ["main", "businessHeader"],
  businessHeader: ["businessHeader"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPeople__ArgProps,
          internalVariantPropNames: PlasmicPeople__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicPeople__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root2") {
    func.displayName = "PlasmicPeople";
  } else {
    func.displayName = `PlasmicPeople.${nodeName}`;
  }
  return func;
}

export const PlasmicPeople = Object.assign(
  // Top-level PlasmicPeople renders the root element
  makeNodeComponent("root2"),
  {
    // Helper components rendering sub-elements
    dashboardSidebar: makeNodeComponent("dashboardSidebar"),
    main: makeNodeComponent("main"),
    businessHeader: makeNodeComponent("businessHeader"),
    // Metadata about props expected for PlasmicPeople
    internalVariantProps: PlasmicPeople__VariantProps,
    internalArgProps: PlasmicPeople__ArgProps
  }
);

export default PlasmicPeople;
/* prettier-ignore-end */
