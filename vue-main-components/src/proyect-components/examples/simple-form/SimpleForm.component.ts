import { formSimpleFieldsConfig } from "@/metadata/simple-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./SimpleForm.template.vue";

@Component({
    mixins: [Template],
})
export default class SimpleFormComponent extends Mixins(FormComponent) {
    public metadata: string = `
    import { FormField, FormFieldTypes } from "engeni-vue-components";
    export const metadata: FormField[] = [
        {
          name: "Full name",
          key: "full_name",
          component: FormFieldTypes.textField,
          defaultValue: "Luis Gabriel Acevedo",
          options: {
            placeholder: "Write your full name",
            validationRules: ["required"],
          },
        },
        {
          name: "Email",
          key: "email",
          component: FormFieldTypes.textField,
          options: {
            placeholder: "Write your email",
            validationRules: ["required", "email"],
          },
        },
        {
          name: "Password",
          key: "password",
          component: FormFieldTypes.passwordField,
          options: {
            placeholder: "Write your password",
            validationRules: ["required", "min:3", "max:11"],
          },
        },
        {
          name: "Country",
          key: "country",
          component: FormFieldTypes.select,
          options: {
            placeholder: "Select a country",
            selectOptions: () => formService.loadCountries(),
            associationText: "name",
            associationValue: "id",
            validationRules: ["required"],
          },
        },
        {
          name: "Phone",
          key: "phone",
          component: FormFieldTypes.textField,
          options: {
            validationRules: ["required"],
            vuetifyProps: {
              mask: "phone",
            },
          },
        },
        {
          name: "I accept the conditions",
          key: "conditions",
          component: FormFieldTypes.checkbox,
          options: {
            validationRules: ["required"],
          },
        },
    ];

    class FormService {
        public loadCountries() {
          return [
            {
                name: "Argentina",
                id: "AR",
            },
            {
                name: "Venezuela",
                id: "VEN",
            },
          ];
        }
    }

    const formService = new FormService();



    `;

    public created() {
        this.fieldsConfig = formSimpleFieldsConfig;
    }
}
