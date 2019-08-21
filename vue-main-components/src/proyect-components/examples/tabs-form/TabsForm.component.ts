import tabsFormFieldsConfig from "@/metadata/tabs-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./TabsForm.template.vue";

@Component({
    mixins: [Template],
})
export default class TabsFormComponent extends Mixins(FormComponent) {
    public created() {
      this.fieldsConfig = tabsFormFieldsConfig;
    }
}
