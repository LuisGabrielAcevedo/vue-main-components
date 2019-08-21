import { FormField, FormFieldTypes, FormLateralGroup } from "@/types/form.interfaces";
const validationsFormFieldsConfig: FormField[] = [
    {
        name: "First name",
        key: "first_name",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required"],
        },
    },
    {
        name: "Last name",
        key: "last_name",
        component: FormFieldTypes.textField,
        options: {
            validationRules: [
                {
                    rule: "required",
                    message: "El campo apellido es requerido",
                },
            ],
        },
    },
    {
        name: "Email",
        key: "email",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required", "email"],
        },
    },
    {
        name: "Password",
        key: "password",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required", {
                rule: "required",
                message: "Debe escribir almenos 3 caracteres",
            }, "max:11"],
        },
    },
    {
        name: "Write a number between 2 and 11",
        key: "age",
        component: FormFieldTypes.numericField,
        options: {
            validationRules: [
                "required",
                "between:2,11",
            ],
        },
    },
    {
        name: "Select a option different 1 and 2",
        key: "number",
        component: FormFieldTypes.enum,
        options: {
            validationRules: ["required", "excluded:1,2"],
            enumSelectOptions: [
                {
                    value: 1,
                    text: "Option 1",
                },
                {
                    value: 2,
                    text: "Option 2",
                },
                {
                    value: 3,
                    text: "Option 3",
                },
                {
                    value: 4,
                    text: "Option 4",
                },
            ],
        },
    },
];
export default validationsFormFieldsConfig;
