// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ovjdXhydzXTq3Bc7u9wCpt
// Component: m2QxDfHQRWZ
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
import DashboardSidebar from "../../DashboardSidebar"; // plasmic-import: 7WJwRnVAxlX/component
import BusinessHeader from "../../BusinessHeader"; // plasmic-import: QNsWw2e-3G/component
import PostBox from "../../PostBox"; // plasmic-import: Dq6gvuXdNEn/component
import CommentBox from "../../CommentBox"; // plasmic-import: aD3gQOgm7t/component
import MessagesBox from "../../MessagesBox"; // plasmic-import: 5K0H0lW6HF/component
import InventoryList from "../../InventoryList"; // plasmic-import: Gn6XkLaEoG/component
import { useScreenVariants as useScreenVariantsgcBBykOvh4Vq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gcB_bykOvh4VQ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_2_geda.module.css"; // plasmic-import: ovjdXhydzXTq3Bc7u9wCpt/projectcss
import sty from "./PlasmicProfile.module.css"; // plasmic-import: m2QxDfHQRWZ/css
import ListIcon from "./icons/PlasmicIcon__List"; // plasmic-import: AAQ0Kadt_Y/icon
import Camera2Icon from "./icons/PlasmicIcon__Camera2"; // plasmic-import: 1SdF2d1aN/icon
import Line30Icon from "./icons/PlasmicIcon__Line30"; // plasmic-import: Djirqaflo/icon
import rectangle2649YOl9Eh2X from "./images/rectangle264.jpeg"; // plasmic-import: 9yOl_9Eh2x/picture
import unsplash5N3Jp9WajTs2QYKzMQhs8 from "./images/unsplash5N3Jp9WajTs2.jpeg"; // plasmic-import: Q_YKzMQhs8/picture

export const PlasmicProfile__VariantProps = new Array();

export const PlasmicProfile__ArgProps = new Array();

function PlasmicProfile__RenderFunc(props) {
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

          <div
            data-plasmic-name={"peopleMainContent"}
            data-plasmic-override={overrides.peopleMainContent}
            className={classNames(projectcss.all, sty.peopleMainContent)}
          >
            <div
              data-plasmic-name={"peopleMainContentLeft"}
              data-plasmic-override={overrides.peopleMainContentLeft}
              className={classNames(projectcss.all, sty.peopleMainContentLeft)}
            >
              <div
                data-plasmic-name={"rectangle209"}
                data-plasmic-override={overrides.rectangle209}
                className={classNames(projectcss.all, sty.rectangle209)}
              >
                <span
                  data-plasmic-name={"span"}
                  data-plasmic-override={overrides.span}
                  className={classNames(
                    projectcss.all,
                    projectcss.span,
                    projectcss.__wab_text,
                    sty.span
                  )}
                >
                  {"People"}
                </span>

                <ListIcon
                  className={classNames(projectcss.all, sty.svg__usMva)}
                  role={"img"}
                />
              </div>

              <div
                data-plasmic-name={"rectangle218"}
                data-plasmic-override={overrides.rectangle218}
                className={classNames(projectcss.all, sty.rectangle218)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__lrKw9)}
                  displayHeight={"199px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: rectangle2649YOl9Eh2X,
                    fullWidth: 480,
                    fullHeight: 320,
                    aspectRatio: undefined
                  }}
                />

                <Camera2Icon
                  className={classNames(projectcss.all, sty.svg__xQhYz)}
                  role={"img"}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__s0Pyz)}
                  displayHeight={"125px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"132px"}
                  loading={"lazy"}
                  src={{
                    src: unsplash5N3Jp9WajTs2QYKzMQhs8,
                    fullWidth: 384,
                    fullHeight: 480,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___02Ekz
                  )}
                >
                  {"Joseph Oladipo"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mK0Mz
                  )}
                >
                  {"Product designer"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__t6Fs9
                  )}
                >
                  {"Lagos, Nigeria"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4Opyr
                  )}
                >
                  {"???Mental Health is how much you know about yourself???"}
                </div>

                <div
                  data-plasmic-name={"group277"}
                  data-plasmic-override={overrides.group277}
                  className={classNames(projectcss.all, sty.group277)}
                >
                  <div
                    data-plasmic-name={"group196"}
                    data-plasmic-override={overrides.group196}
                    className={classNames(projectcss.all, sty.group196)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___2742I
                      )}
                    >
                      {"Posts"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rnQzj
                      )}
                    >
                      {"570"}
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"group197"}
                    data-plasmic-override={overrides.group197}
                    className={classNames(projectcss.all, sty.group197)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r5Lie
                      )}
                    >
                      {"Followers"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sSN
                      )}
                    >
                      {"23million"}
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"group198"}
                    data-plasmic-override={overrides.group198}
                    className={classNames(projectcss.all, sty.group198)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ohy38
                      )}
                    >
                      {"Following"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gUiG
                      )}
                    >
                      {"21k"}
                    </div>
                  </div>
                </div>

                <div
                  data-plasmic-name={"group249"}
                  data-plasmic-override={overrides.group249}
                  className={classNames(projectcss.all, sty.group249)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__b5VzO
                    )}
                  >
                    {"Posts(206)"}
                  </div>

                  <Line30Icon
                    className={classNames(projectcss.all, sty.svg__kIXjr)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__roIig
                    )}
                  >
                    {"Outlet(11k)"}
                  </div>
                </div>
              </div>

              <PostBox
                data-plasmic-name={"postBox"}
                data-plasmic-override={overrides.postBox}
                className={classNames("__wab_instance", sty.postBox)}
              />

              <CommentBox
                data-plasmic-name={"commentBox"}
                data-plasmic-override={overrides.commentBox}
                className={classNames("__wab_instance", sty.commentBox)}
              />
            </div>

            {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
              <div
                data-plasmic-name={"peopleMainContentRight"}
                data-plasmic-override={overrides.peopleMainContentRight}
                className={classNames(
                  projectcss.all,
                  sty.peopleMainContentRight
                )}
              >
                <MessagesBox
                  data-plasmic-name={"messagesBox"}
                  data-plasmic-override={overrides.messagesBox}
                  className={classNames("__wab_instance", sty.messagesBox)}
                />

                <InventoryList
                  data-plasmic-name={"inventoryList"}
                  data-plasmic-override={overrides.inventoryList}
                  className={classNames("__wab_instance", sty.inventoryList)}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root2: [
    "root2",
    "dashboardSidebar",
    "main",
    "businessHeader",
    "peopleMainContent",
    "peopleMainContentLeft",
    "rectangle209",
    "span",
    "rectangle218",
    "group277",
    "group196",
    "group197",
    "group198",
    "group249",
    "postBox",
    "commentBox",
    "peopleMainContentRight",
    "messagesBox",
    "inventoryList"
  ],

  dashboardSidebar: ["dashboardSidebar"],
  main: [
    "main",
    "businessHeader",
    "peopleMainContent",
    "peopleMainContentLeft",
    "rectangle209",
    "span",
    "rectangle218",
    "group277",
    "group196",
    "group197",
    "group198",
    "group249",
    "postBox",
    "commentBox",
    "peopleMainContentRight",
    "messagesBox",
    "inventoryList"
  ],

  businessHeader: ["businessHeader"],
  peopleMainContent: [
    "peopleMainContent",
    "peopleMainContentLeft",
    "rectangle209",
    "span",
    "rectangle218",
    "group277",
    "group196",
    "group197",
    "group198",
    "group249",
    "postBox",
    "commentBox",
    "peopleMainContentRight",
    "messagesBox",
    "inventoryList"
  ],

  peopleMainContentLeft: [
    "peopleMainContentLeft",
    "rectangle209",
    "span",
    "rectangle218",
    "group277",
    "group196",
    "group197",
    "group198",
    "group249",
    "postBox",
    "commentBox"
  ],

  rectangle209: ["rectangle209", "span"],
  span: ["span"],
  rectangle218: [
    "rectangle218",
    "group277",
    "group196",
    "group197",
    "group198",
    "group249"
  ],

  group277: ["group277", "group196", "group197", "group198"],
  group196: ["group196"],
  group197: ["group197"],
  group198: ["group198"],
  group249: ["group249"],
  postBox: ["postBox"],
  commentBox: ["commentBox"],
  peopleMainContentRight: [
    "peopleMainContentRight",
    "messagesBox",
    "inventoryList"
  ],

  messagesBox: ["messagesBox"],
  inventoryList: ["inventoryList"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProfile__ArgProps,
          internalVariantPropNames: PlasmicProfile__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root2") {
    func.displayName = "PlasmicProfile";
  } else {
    func.displayName = `PlasmicProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicProfile = Object.assign(
  // Top-level PlasmicProfile renders the root element
  makeNodeComponent("root2"),
  {
    // Helper components rendering sub-elements
    dashboardSidebar: makeNodeComponent("dashboardSidebar"),
    main: makeNodeComponent("main"),
    businessHeader: makeNodeComponent("businessHeader"),
    peopleMainContent: makeNodeComponent("peopleMainContent"),
    peopleMainContentLeft: makeNodeComponent("peopleMainContentLeft"),
    rectangle209: makeNodeComponent("rectangle209"),
    span: makeNodeComponent("span"),
    rectangle218: makeNodeComponent("rectangle218"),
    group277: makeNodeComponent("group277"),
    group196: makeNodeComponent("group196"),
    group197: makeNodeComponent("group197"),
    group198: makeNodeComponent("group198"),
    group249: makeNodeComponent("group249"),
    postBox: makeNodeComponent("postBox"),
    commentBox: makeNodeComponent("commentBox"),
    peopleMainContentRight: makeNodeComponent("peopleMainContentRight"),
    messagesBox: makeNodeComponent("messagesBox"),
    inventoryList: makeNodeComponent("inventoryList"),
    // Metadata about props expected for PlasmicProfile
    internalVariantProps: PlasmicProfile__VariantProps,
    internalArgProps: PlasmicProfile__ArgProps
  }
);

export default PlasmicProfile;
/* prettier-ignore-end */
