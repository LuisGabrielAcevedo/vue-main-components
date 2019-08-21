import { exampleService } from "@/services/examples.services";
import { FormField, FormFieldTypes } from "@/types/form.interfaces";

const tabsFormFieldsConfig: FormField[] = [
    {
        name: "First name",
        key: "first_name",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            row: 1,
            flex: 4,
        },
    },
    {
        name: "Middle name",
        key: "middle_name",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            row: 1,
            flex: 4,
            validationRules: ["required"],
        },
    },
    {
        name: "Last name",
        key: "last_name",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            row: 1,
            flex: 4,
        },
    },
    {
        name: "Birthday",
        key: "birthday",
        component: FormFieldTypes.datepicker,
        tab: "Basic info/0",
        options: {
            row: 2,
            flex: 4,
        },
    },
    {
        name: "Email",
        key: "email",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            row: 2,
            flex: 4,
        },
    },
    {
        name: "Phone",
        key: "phone",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            row: 2,
            flex: 4,
        },
    },
    {
        name: "Id number",
        key: "id_number",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            row: 3,
            flex: 4,
        },
    },
    {
        name: "Id type",
        key: "id_type",
        component: FormFieldTypes.enum,
        tab: "Basic info/0",
        options: {
            row: 3,
            flex: 4,
            enumSelectOptions: [
                { value: "ID", text: "Id" },
                { value: "PASSPORT", text: "Passport" },
                { value: "LICENSE", text: "License number" },
            ],
        },
    },
    {
        name: "Id expiration",
        key: "id_expiration",
        component: FormFieldTypes.datepicker,
        tab: "Basic info/0",
        options: {
            row: 3,
            flex: 4,
        },
    },
    {
        name: "Customer Check in Note",
        key: "notes[0].note",
        component: FormFieldTypes.textarea,
        tab: "Basic info/0",
        options: {
            row: 4,
            flex: 12,
        },
    },
    {
        name: "Show note in customer check in",
        key: "shows_checkin_note",
        component: FormFieldTypes.checkbox,
        tab: "Basic info/0",
        options: {
            row: 5,
            flex: 12,
        },
    },
    {
        name: "Member level",
        key: "member_level_id",
        component: FormFieldTypes.autocomplete,
        tab: "Purchasing details/1",
        options: {
            row: 1,
            flex: 3,
            selectOptions: () => exampleService.loadMemberLevels(),
            associationText: "name",
            associationValue: "id",
        },
    },
    {
        name: "Flat discount rate",
        key: "flat_discount_rate",
        component: FormFieldTypes.textField,
        tab: "Purchasing details/1",
        options: {
            row: 1,
            flex: 3,
            validationRules: ["required"],
        },
    },
    {
        name: "Tax exempt",
        key: "tax_exempt",
        component: FormFieldTypes.checkbox,
        tab: "Purchasing details/1",
        options: {
            row: 1,
            flex: 3,
        },
    },
    {
        name: "address",
        key: "address",
        component: FormFieldTypes.textField,
        tab: "More info/2",
        options: {
            row: 1,
            flex: 3,
        },
    },
    {
        name: "Apt suite",
        key: "apt_suite",
        component: FormFieldTypes.textField,
        tab: "More info/2",
        options: {
            row: 1,
            flex: 3,
        },
    },
    {
        name: "Country",
        key: "country_id",
        component: FormFieldTypes.autocomplete,
        tab: "More info/2",
        options: {
            row: 1,
            flex: 3,
            selectOptions: () => exampleService.loadCountries(),
            associationText: "name",
            associationValue: "id",
        },
    },
    {
        name: "State",
        key: "state_id",
        component: FormFieldTypes.autocomplete,
        tab: "More info/2",
        options: {
            row: 1,
            flex: 3,
            selectOptions: () => exampleService.loadStates(),
            associationText: "name",
            associationValue: "id",
        },
    },
    {
        name: "City",
        key: "city",
        component: FormFieldTypes.textField,
        tab: "More info/2",
        options: {
            row: 2,
            flex: 3,
        },
    },
    {
        name: "Zip",
        key: "zip",
        component: FormFieldTypes.textField,
        tab: "More info/2",
        options: {
            row: 2,
            flex: 3,
        },
    },
    {
        name: "Gender",
        key: "gender",
        component: FormFieldTypes.enum,
        tab: "More info/2",
        options: {
            row: 2,
            flex: 3,
            enumSelectOptions: [
                { value: "FEMALE", text: "Female" },
                { value: "MALE", text: "Male" },
            ],
        },
    },
    {
        name: "Referred by",
        key: "referred_by_id",
        component: FormFieldTypes.autocomplete,
        tab: "More info/2",
        options: {
            row: 2,
            flex: 3,
            selectOptions: () => exampleService.loadCustomers(),
            associationText: "name",
            associationValue: "id",
        },
    },
];

export default tabsFormFieldsConfig;
