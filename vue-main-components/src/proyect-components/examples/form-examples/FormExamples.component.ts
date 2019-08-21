import DynamicFormComponent from "@/lib/dynamic-form/Form.component";
import { productMetadata } from "@/metadata/examples/product";
import { strainMetadata } from "@/metadata/examples/strain";
import { userMetadata } from "@/metadata/examples/user";
import { userProfileMetadata1, userProfileMetadata2 } from "@/metadata/examples/user-profile";
import CodeComponent from "@/proyect-components/code/Code.component";
import TabsCodeComponent from "@/proyect-components/tabs-code/TabsCode.component";
import { exampleService } from "@/services/examples.services";
import { FormField, FormModel, FormResponse } from "@/types";
import { Component, Vue } from "vue-property-decorator";
import Template from "./FormExamples.template.vue";

@Component({
    mixins: [Template],
    components: {
        DynamicFormComponent,
        TabsCodeComponent,
        CodeComponent,
    },
})
export default class FormExamplesComponent extends Vue {
    public userForm!: DynamicFormComponent;
    public fieldsConfigUser: FormField[] = userMetadata;
    public respUser: FormResponse | null = null;
    public productForm!: DynamicFormComponent;
    public respProduct: FormResponse | null = null;
    public fieldsConfigProduct: FormField[] = productMetadata;
    public productModel: FormModel | null = null;
    public userProfile1Form!: DynamicFormComponent;
    public userProfile2Form!: DynamicFormComponent;
    public fieldsConfigUserProfile1: FormField[] = userProfileMetadata1;
    public fieldsConfigUserProfile2: FormField[] = userProfileMetadata2;
    public respUserProfile: FormResponse | null = null;
    public strainForm!: DynamicFormComponent;
    public fieldsConfigStrain: FormField[] = strainMetadata;
    public respStrain: FormResponse | null = null;

    public formHtmlUser: string = `
    <template>
        <div>
            <h2 class="text-xs-center my-4">Form</h2>
            <DynamicFormComponent :ref="'dynamic-form'" :fieldsConfig="fieldsConfig"/>
            <v-layout row align-center justify-center>
                <v-btn @click="submit()">Submit</v-btn>
                <v-btn @click="resetValidations()">Reset validations</v-btn>
            </v-layout>
        </div>
    </template>
    `;

    public formTs: string = `
      import {
        DynamicFormComponent,
        FormField,
        FormResponse
      } from "engeni-vue-components";
      import { Component, Vue } from "vue-property-decorator";
      import Template from "./form.template.vue";
      import { metadata } from "./metadata";

      @Component({
        mixins: [Template],
        components: {
          DynamicFormComponent
        }
      })
      export default class FormComponent extends Vue {
        public form!: DynamicFormComponent;
        public fieldsConfig: FormField[] = metadata;

        public mounted(): void {
          this.form = this.$refs["dynamic-form"] as DynamicFormComponent;
        }

        public async submit(): Promise<any> {
          const resp: FormResponse = await this.form.submit();
        }

        public resetValidations(): void {
          this.form.resetValidations();
        }
      }
    `;

    public mounted() {
        this.userForm = this.$refs["dynamic-form-user"] as DynamicFormComponent;
        this.productForm = this.$refs["dynamic-form-product"] as DynamicFormComponent;
        this.userProfile1Form = this.$refs["dynamic-form-user-profile1"] as DynamicFormComponent;
        this.userProfile2Form = this.$refs["dynamic-form-user-profile2"] as DynamicFormComponent;
        this.strainForm = this.$refs["dynamic-form-user-strain"] as DynamicFormComponent;
        this.loadProduct();
    }

    public async loadProduct() {
        this.productModel = await exampleService.loadProduct();
    }

    public async userSubmit(): Promise<any> {
        const resp: FormResponse = await this.userForm.submit();
        this.respUser = resp;
    }

    public async userProfileSubmit(): Promise<any> {
        const resp1: FormResponse = await this.userProfile1Form.submit();
        const resp2: FormResponse = await this.userProfile2Form.submit();
    }

    public async productSubmit(): Promise<any> {
        const resp: FormResponse = await this.productForm.submit();
        this.respProduct = resp;
    }

    public async strainSubmit(): Promise<any> {
        const resp: FormResponse = await this.strainForm.submit();
        this.respStrain = resp;
    }
}
