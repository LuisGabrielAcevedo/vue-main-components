import tabsFormFieldsConfig from "@/metadata/tabs-form";
import { FormField, FormFieldTypes, FormLateralGroup } from "@/types/form.interfaces";

const fields: FormField[] = [
    {
        name: "Profile image",
        key: "avatar",
        component: FormFieldTypes.image,
        tab: "Basic info",
        options: {
            defaultImageField: "avatar_medium_url",
            group: FormLateralGroup.right,
        },
    },
    {
        name: "Text field 1",
        key: "field1",
        component: FormFieldTypes.textField,
        tab: "Basic info",
        options: {
            group: FormLateralGroup.left,
        },
    },
    {
        name: "Text field 2",
        key: "field2",
        component: FormFieldTypes.textField,
        tab: "Basic info",
        options: {
            group: FormLateralGroup.left,
        },
    },
    {
        name: "Text field 3",
        key: "field3",
        component: FormFieldTypes.textField,
        tab: "Basic info",
        options: {
            group: FormLateralGroup.right,
        },
    },
    {
        name: "Text field 4",
        key: "field4",
        component: FormFieldTypes.textField,
        tab: "Basic info",
        options: {
            group: FormLateralGroup.right,
        },
    },
    {
        name: "Text field 5",
        key: "field5",
        component: FormFieldTypes.textField,
        tab: "Purchasing details",
        options: {
            group: FormLateralGroup.right,
        },
    },
    {
        name: "Text field 6",
        key: "field6",
        component: FormFieldTypes.textField,
        tab: "Purchasing details",
        options: {
            group: FormLateralGroup.right,
        },
    },
    {
        name: "Text field 7",
        key: "field7",
        component: FormFieldTypes.textField,
        tab: "Purchasing details",
        options: {
            group: FormLateralGroup.right,
        },
    },
];

const lateralGroupFormFieldsConfig: FormField[] = [...tabsFormFieldsConfig, ...fields];

export default lateralGroupFormFieldsConfig;
