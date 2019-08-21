import validationsFormFieldsConfig from "@/metadata/validations-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./ValidationsForm.template.vue";

@Component({
    mixins: [Template],
})
export default class ValidationsFormComponent extends Mixins(FormComponent) {
    public formHtml2: string = `
    <template>
        <div>
            <h2 class="text-xs-center my-4">Form</h2>
            <DynamicFormComponent :columns="3" :ref="'dynamic-form'" :fieldsConfig="fieldsConfig"/>
            <v-layout row align-center justify-center>
                <v-btn @click="submit()">Submit</v-btn>
                <v-btn @click="resetValidations()">Reset validations</v-btn>
            </v-layout>
        </div>
    </template>

    `;
    public created() {
      this.fieldsConfig = validationsFormFieldsConfig;
    }
}
