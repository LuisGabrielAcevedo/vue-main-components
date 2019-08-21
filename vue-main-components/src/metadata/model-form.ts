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
];

const modelFormFieldsConfig: FormField[] = [...tabsFormFieldsConfig, ...fields];

export default modelFormFieldsConfig;
