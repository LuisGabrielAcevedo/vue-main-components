import componentsFormFieldsConfig from "@/metadata/components-form";
import FormComponent from "@/proyect-components/examples/form/Form.component";
import { Component, Mixins } from "vue-property-decorator";
import Template from "./ComponentsForm.template.vue";

@Component({
    mixins: [Template],
})
export default class ComponentsFormComponent extends Mixins(FormComponent) {

    public metadata: string =  `
    import { FormField, FormFieldTypes } from "engeni-vue-components";
    export const metadata: FormField[] = [
    {
        name: "Text field",
        key: "text_field",
        component: FormFieldTypes.textField
    },
    {
        name: "Numeric field",
        key: "numeric_field",
        component: FormFieldTypes.numericField
    },
    {
        name: "Password field",
        key: "password",
        component: FormFieldTypes.passwordField
    },
    {
        name: "Textarea",
        key: "textarea",
        component: FormFieldTypes.textarea
    },
    {
        name: "Datepicker",
        key: "datepicker",
        component: FormFieldTypes.datepicker
    },
    {
        name: "Select",
        key: "select",
        component: FormFieldTypes.select
    },
    {
        name: "Enum",
        key: "enum",
        component: FormFieldTypes.enum,
        options: {
        enumSelectOptions: [
            {
            text: "OPTION 1",
            value: "option_1"
            },
            {
            text: "OPTION 2",
            value: "option_2"
            }
        ]
        }
    },
    {
        name: "Autocomplete",
        key: "autocomplete",
        component: FormFieldTypes.autocomplete
    },
    {
        name: "Async autocomplete",
        key: "asycn_autocomplete",
        component: FormFieldTypes.asyncAutocomplete
    },
    {
        name: "Checkbox",
        key: "checkbox",
        component: FormFieldTypes.checkbox,
        options: {
        placeholder: "Checkbox"
        }
    },
    {
        name: "Switch",
        key: "switch",
        component: FormFieldTypes.switch
    },
    {
        name: "Radio group",
        key: "radio_group",
        component: FormFieldTypes.radioGroup,
        options: {
        radioGroupOptions: [
            {
            text: "OPTION 1",
            value: "option_1"
            },
            {
            text: "OPTION 2",
            value: "option_2"
            }
        ]
        }
    },
    {
        name: "Image",
        key: "image",
        component: FormFieldTypes.image,
        options: {
        defaultImageField: "image"
        }
    }
    ];

    `;
    public created() {
      this.fieldsConfig = componentsFormFieldsConfig;
    }
}
