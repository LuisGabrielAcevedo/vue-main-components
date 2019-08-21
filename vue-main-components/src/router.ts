import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      redirect: "installation",
    },
    {
      path: "/installation",
      name: "installation",
      component: () => import("@/proyect-components/installation/Installation.compoent"),
    },
    {
      path: "/dynamic-form/simple",
      name: "simple",
      component: () => import("@/proyect-components/examples/simple-form/SimpleForm.component"),
    },
    {
      path: "/dynamic-form/components",
      name: "components",
      component: () => import("@/proyect-components/examples/components-form/ComponentsForm.component"),
    },
    {
      path: "/dynamic-form/grid",
      name: "grid",
      component: () => import("@/proyect-components/examples/grid-form/GridForm.component"),
    },
    {
      path: "/dynamic-form/tabs",
      name: "tabs",
      component: () => import("@/proyect-components/examples/tabs-form/TabsForm.component"),
    },
    {
      path: "/dynamic-form/lateral-groups",
      name: "lateral-groups",
      component: () => import("@/proyect-components/examples/lateral-groups-form/LateralGroupsForm.component"),
    },
    {
      path: "/dynamic-form/model",
      name: "model",
      component: () => import("@/proyect-components/examples/model-form/ModelForm.component"),
    },
    {
      path: "/dynamic-form/dynamic-components",
      name: "dynamic-components",
      component: () => import("@/proyect-components/examples/dynamic-components-form/DynamicComponentsForm.component"),
    },
    {
      path: "/dynamic-form/validations",
      name: "validations",
      component: () => import("@/proyect-components/examples/validations-form/ValidationsForm.component"),
    },
    {
      path: "/dynamic-form/examples",
      name: "examples",
      component: () => import("@/proyect-components/examples/form-examples/FormExamples.component"),
    },
  ],
});
