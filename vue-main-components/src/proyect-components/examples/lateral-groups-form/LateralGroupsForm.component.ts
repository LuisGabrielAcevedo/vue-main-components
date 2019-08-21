import lateralGroupFormFieldsConfig from "@/metadata/lateral-groups-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./LateralGroupsForm.template.vue";

@Component({
    mixins: [Template],
})
export default class LateralGroupsFormComponent extends Mixins(FormComponent) {
    public created() {
      this.fieldsConfig = lateralGroupFormFieldsConfig;
    }
}
