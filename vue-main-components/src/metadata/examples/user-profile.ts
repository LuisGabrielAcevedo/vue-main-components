import AuthorizationComponent from "@/metadata/examples/components/authorization/Authorization.component";
import { exampleService } from "@/services/examples.services";
import { FormField, FormFieldTypes } from "@/types";

export const userProfileMetadata1: FormField[] = [
    {
        name: "",
        key: "avatar",
        component: FormFieldTypes.image,
        options: {
            defaultImageField: "avatar_medium_url",
            row: 1,
            flex: 12,
        },
    },
    {
        name: "First name",
        key: "first_name",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required"],
            placeholder: "First name",
            row: 2,
            flex: 3,
        },
    },
    {
        name: "Middle name",
        key: "middle_name",
        component: FormFieldTypes.textField,
        options: {
            placeholder: "Middle name",
            row: 2,
            flex: 3,
        },
    },
    {
        name: "Last name",
        key: "last_name",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required"],
            placeholder: "Last name",
            row: 2,
            flex: 3,
        },
    },
    {
        name: "Company email",
        key: "profile.company_email_address",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required", "email"],
            placeholder: "Company email",
            row: 2,
            flex: 3,
        },
    },
];

export const userProfileMetadata2: FormField[] = [
    {
        name: "User Display Name (Nickname)",
        key: "nickname",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Nickname",
        },
    },
    {
        name: "Personal email",
        key: "email",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            validationRules: ["email"],
            placeholder: "Personal email",
        },
    },
    {
        name: "Phone",
        key: "profile.phone_number",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Phone",
            vuetifyProps: {
                mask: "phone",
            },
        },
    },
    {
        name: "Mailing address",
        key: "profile.mailing_address",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Mailing address",
        },
    },
    {
        name: "Country",
        key: "profile.country_id",
        component: FormFieldTypes.autocomplete,
        tab: "General info/0",
        options: {
            placeholder: "select a country",
            selectOptions: async () => await exampleService.loadCountries(),
            dependEmitField: "profile.state_id",
            associationText: "name",
            associationValue: "id",
        },
    },
    {
        name: "State",
        key: "profile.state_id",
        component: FormFieldTypes.autocomplete,
        tab: "General info/0",
        options: {
            dependOnField: "profile.country_id",
            placeholder: "Select a state",
            validationRules: ["required"],
            selectOptions: async (arg) => exampleService.loadStates(),
            associationText: "name",
            associationValue: "id",
        },
    },
    {
        name: "City",
        key: "profile.city",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "City",
            validationRules: ["required"],
        },
    },
    {
        name: "Zip code",
        key: "profile.zip",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Zip code",
        },
    },
    {
        name: "birthdate",
        key: "profile.birthday",
        component: FormFieldTypes.datepicker,
        tab: "General info/0",
        options: {
            placeholder: "Birthdate",
        },
    },
    {
        name: "Gender",
        key: "profile.gender",
        component: FormFieldTypes.enum,
        tab: "General info/0",
        options: {
            placeholder: "gender",
            enumSelectOptions: [
                { value: "male", text: "Male" },
                { value: "female", text: "Female" },
                { value: "other", text: "Other" },
                { value: "no_answer", text: "No answer" },
            ],
        },
    },
    {
        name: "Emergency Contact",
        key: "profile.emergency_contact",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Emergency Contact",
        },
    },
    {
        name: "Emergency Contact Number",
        key: "profile.emergency_contact_number",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Emergency Contact Number",
        },
    },
    {
        name: "Driver license",
        key: "profile.drivers_license_number",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Driver license",
        },
    },
    {
        name: "Expiration driver license",
        key: "profile.drivers_license_expiration",
        component: FormFieldTypes.datepicker,
        tab: "General info/0",
        options: {
            placeholder: "Expiration driver license",
        },
    },
    {
        name: "Occupational license number",
        key: "profile.occupational_license_number",
        component: FormFieldTypes.textField,
        tab: "General info/0",
        options: {
            placeholder: "Occupational license number",
        },
    },
    {
        name: "Occupational license expiration",
        key: "profile.occupational_license_expiration",
        component: FormFieldTypes.datepicker,
        tab: "General info/0",
        options: {
            placeholder: "Occupational license expiration",
        },
    },
    {
        name: "Preferred Language",
        key: "settings.language",
        component: FormFieldTypes.enum,
        tab: "General info/0",
        options: {
            placeholder: "Preferred Language",
            validationRules: ["required"],
            enumSelectOptions: [
                { value: "es", text: "Spanish" },
                { value: "en", text: "English" },
            ],
        },
    },
    {
        name: null,
        key: null,
        dynamicComponent: AuthorizationComponent,
        tab: "Authorization/1",
    },
];
