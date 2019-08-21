import modelFormFieldsConfig from "@/metadata/model-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { exampleService } from "@/services/examples.services";
import { FormModel } from "@/types/form.interfaces";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./ModelForm.template.vue";

@Component({
    mixins: [Template],
})
export default class ModelFormComponent extends Mixins(FormComponent) {
    public model: FormModel | null = null;

    public formHtml2: string = `
    <template>
        <div>
            <h2 class="text-xs-center my-4">Form</h2>
            <DynamicFormComponent :columns="4" :ref="'dynamic-form'" :fieldsConfig="fieldsConfig" :model="model"/>
            <v-layout row align-center justify-center>
                <v-btn @click="submit()">Submit</v-btn>
                <v-btn @click="resetValidations()">Reset validations</v-btn>
            </v-layout>
        </div>
    </template>

    `;
    public created() {
        this.fieldsConfig = modelFormFieldsConfig;
        this.loadCustomerData();
    }
    public async loadCustomerData() {
        this.model = await exampleService.loadCustomerData();
    }
}
