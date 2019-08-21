import { FormField, FormFieldTypes } from "@/types/form.interfaces";
const gridFormFieldsConfig: FormField[] = [
    {
        name: "Field 1",
        key: "field_1",
        component: FormFieldTypes.textField,
        options: {
            row: 0,
            flex: 12,
        },
    },
    {
        name: "Field 2",
        key: "field_2",
        component: FormFieldTypes.textField,
        options: {
            row: 1,
            flex: 6,
        },
    },
    {
        name: "Field 3",
        key: "field_3",
        component: FormFieldTypes.textField,
        options: {
            row: 1,
            flex: 6,
        },
    },
    {
        name: "Field 4",
        key: "field_4",
        component: FormFieldTypes.textField,
        options: {
            row: 2,
            flex: 4,
        },
    },
    {
        name: "Field 5",
        key: "field_5",
        component: FormFieldTypes.textField,
        options: {
            row: 2,
            flex: 4,
        },
    },
    {
        name: "Field 6",
        key: "field_6",
        component: FormFieldTypes.textField,
        options: {
            row: 2,
            flex: 4,
        },
    },
    {
        name: "Field 7",
        key: "field_7",
        component: FormFieldTypes.textField,
        options: {
            row: 3,
            flex: 3,
        },
    },
    {
        name: "Field 8",
        key: "field_8",
        component: FormFieldTypes.textField,
        options: {
            row: 3,
            flex: 3,
        },
    },
    {
        name: "Field 9",
        key: "field_9",
        component: FormFieldTypes.textField,
        options: {
            row: 3,
            flex: 3,
        },
    },
    {
        name: "Field 10",
        key: "field_10",
        component: FormFieldTypes.textField,
        options: {
            row: 3,
            flex: 3,
        },
    },
];

export default gridFormFieldsConfig;
