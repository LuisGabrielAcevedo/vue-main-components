import DynamicFormComponent from "@/lib/dynamic-form/Form.component";
import gridFormFieldsConfig from "@/metadata/grid-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { FormField, FormResponse } from "@/types";
import cloneDeep from "lodash/cloneDeep";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./GridForm.template.vue";

@Component({
    mixins: [Template],
})
export default class GridFormComponent extends Mixins(FormComponent) {
    public formByColumns!: DynamicFormComponent;
    public fieldsByColumns: FormField[] = [];
    public resp2: FormResponse | null = null;
    public formHtml2: string = `
    <template>
        <div>
            <h2 class="text-xs-center my-4">Form</h2>
            <DynamicFormComponent :columns="4" :ref="'dynamic-form'" :fieldsConfig="fieldsConfig"/>
            <v-layout row align-center justify-center>
                <v-btn @click="submit()">Submit</v-btn>
                <v-btn @click="resetValidations()">Reset validations</v-btn>
            </v-layout>
        </div>
    </template>

    `;
    public created() {
      this.fieldsConfig = gridFormFieldsConfig;
      this.fieldsByColumns = cloneDeep(this.fieldsConfig);
    }
    public mounted() {
        this.formByColumns = this.$refs["model-form-columns"] as DynamicFormComponent;
    }
    public async submit2() {
        const resp2 = await this.formByColumns.submit();
        this.resp2 = resp2;
    }
}
