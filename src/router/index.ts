import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ComponentIntroView from "../views/ComponentIntroView.vue";
import JsxShowcaseView from "../views/JsxShowcaseView.vue";
import ComponentsDataSectionView from "../views/ComponentsDataSectionView.vue";
import ComponentPropsView from "../views/ComponentPropsView.vue";
import ComponentComputedView from "../views/ComponentComputedView.vue";
import ComponentWatchView from "../views/ComponentWatchView.vue";
import ComponentConditionalRenderingView from "../views/ComponentConditionalRenderingView.vue";
import ComponentListRenderingView from "../views/ComponentListRenderingView.vue";
import ComponentSeparationView from "../views/ComponentSeparationView.vue";
import ComponentSlotsShowcaseView from "../views/ComponentSlotsShowcaseView.vue";
import ComponentPropBindingShowcaseView from "../views/ComponentPropBindingShowcaseView.vue";
import ComponentLifecycleHooksShowcaseView from "../views/ComponentLifecycleHooksShowcaseView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/components-intro",
    name: "components-intro",
    component: ComponentIntroView,
  },
  {
    path: "/oh-god-why",
    name: "oh-god-why",
    component: JsxShowcaseView,
  },
  {
    path: "/components-data-section",
    name: "components-data-section",
    component: ComponentsDataSectionView,
  },
  {
    path: "/components-props-section",
    name: "components-props-section",
    component: ComponentPropsView,
  },
  {
    path: "/components-computed-section",
    name: "components-computed-section",
    component: ComponentComputedView,
  },
  {
    path: "/components-watch-section",
    name: "components-watch-section",
    component: ComponentWatchView,
  },
  {
    path: "/components-conditional-rendering",
    name: "components-conditional-rendering",
    component: ComponentConditionalRenderingView,
  },
  {
    path: "/components-list-rendering",
    name: "components-list-rendering",
    component: ComponentListRenderingView,
  },
  {
    path: "/components-separation",
    name: "components-separation",
    component: ComponentSeparationView,
  },
  {
    path: "/components-slots",
    name: "components-slots",
    component: ComponentSlotsShowcaseView,
  },
  {
    path: "/components-binding",
    name: "components-binding",
    component: ComponentPropBindingShowcaseView,
  },
  {
    path: "/components-lc-hooks",
    name: "components-lc-hooks",
    component: ComponentLifecycleHooksShowcaseView,
  },
  // Lazy loading
  {
    path: "/components-refs",
    name: "components-refs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComponentRefView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
