import DynamicFormComponent from "@/lib/dynamic-form/Form.component";
import CodeComponent from "@/proyect-components/code/Code.component";
import TabsCodeComponent from "@/proyect-components/tabs-code/TabsCode.component";
import {
    FormField, FormResponse,
} from "@/types/form.interfaces";
import { Component, Vue } from "vue-property-decorator";
@Component({
    components: {
        DynamicFormComponent,
        TabsCodeComponent,
        CodeComponent,
    },
})
export default class FormComponent extends Vue {
    public form!: DynamicFormComponent;
    public fieldsConfig!: FormField[];
    public resp: object | null = null;

    public formHtml: string = `
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

    public mounted(): void {
        this.form = this.$refs["dynamic-form"] as DynamicFormComponent;
    }

    public async submit(): Promise<any> {
        const resp: FormResponse = await this.form.submit();
        this.resp = resp;
    }

    public resetValidations(): void {
        this.form.resetValidations();
    }
}
