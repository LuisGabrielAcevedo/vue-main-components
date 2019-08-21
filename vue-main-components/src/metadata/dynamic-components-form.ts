import modelFormFieldsConfig from "@/metadata/model-form";
import LimitsComponent from "@/proyect-components/examples/dynamic-components-form/Limits/Limits.componet";
import { FormField, FormLateralGroup } from "@/types/form.interfaces";

const fields: FormField[] = [
    {
        name: "Limits",
        key: null,
        dynamicComponent: LimitsComponent,
        tab: "Basic info",
        options: {
            group: FormLateralGroup.right,
        },
    },
];

export const dynamicComponentsFormFieldsConfig: FormField[] = [...modelFormFieldsConfig, ...fields];

export default dynamicComponentsFormFieldsConfig;
