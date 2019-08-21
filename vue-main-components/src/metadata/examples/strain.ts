import StrainNotesTableComponent from "@/metadata/examples/components/strain-notes-table/StrainNotesTable.component";
import { FormField, FormFieldTypes } from "@/types";

export const strainMetadata: FormField[] = [
    {
        name: "Name",
        key: "name",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required"],
            row: 1,
            flex: 3,
        },
    },
    {
        name: "Rank",
        key: "rank",
        component: FormFieldTypes.numericField,
        options: {
            row: 1,
            flex: 3,
        },
    },
    {
        name: "Strain type",
        key: "strain_type_id",
        component: FormFieldTypes.autocomplete,
        options: {
            row: 1,
            flex: 3,
        },
    },
    {
        name: "",
        key: "avatar",
        component: FormFieldTypes.image,
        options: {
            defaultImageField: "avatar_medium_url",
            row: 1,
            flex: 3,
        },
    },
    {
        name: null,
        key: null,
        dynamicComponent: StrainNotesTableComponent,
        options: {
            row: 2,
            flex: 12,
        },
    },
];
