import dynamicComponentsFormFieldsConfig from "@/metadata/dynamic-components-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { exampleService } from "@/services/examples.services";
import ModalsService from "@/services/modal.service";
import { FormModel } from "@/types/form.interfaces";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./DynamicComponentsForm.template.vue";

@Component({
    mixins: [Template],
})
export default class DynamicComponentsFormComponent extends Mixins(FormComponent) {
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

    public metadata: string = `
    {
        name: "Limits",
        key: null,
        dynamicComponent: LimitsComponent,
        tab: "Basic info",
        options: {
            group: FormLateralGroup.right,
        },
    },


    import { FormField, FormModel } from "engeni-vue-components";
    import { Component, Prop, Watch } from "vue-property-decorator";
    import Template from "./Limits.template.vue";
    import Vue from 'vue';

    @Component({
        mixins: [Template]
    })
    export default class LimitsComponent extends Vue {
        @Prop({ required: true }) public model!: FormModel;
        @Prop({ required: true }) public currentModel!: FormModel;
        @Prop({ required: true }) public field!: FormField;
        public limits: object[] = [];

        @Watch("model")
        public modelValue() {
            this.limits = this.model.applicable_limits;
        }
    }
    `;

    protected modal$!: ModalsService<any>;
    public created() {
      this.fieldsConfig = dynamicComponentsFormFieldsConfig;
      this.loadCustomerData();
    }
    public async loadCustomerData() {
        this.model = await exampleService.loadCustomerData();
    }
}
