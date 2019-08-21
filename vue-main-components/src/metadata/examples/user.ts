import { exampleService } from "@/services/examples.services";
import { FormField, FormFieldTypes, FormModel } from "@/types";

export const userMetadata: FormField[] = [
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
        name: "birthdate",
        key: "profile.birthday",
        component: FormFieldTypes.datepicker,
        options: {
            validationRules: ["required"],
            placeholder: "Birthdate",
            row: 2,
            flex: 3,
        },
    },
    {
        name: "Mailing address",
        key: "profile.mailing_address",
        component: FormFieldTypes.textField,
        options: {
            placeholder: "Mailing address",
            row: 3,
            flex: 3,
        },
    },
    {
        name: "Country",
        key: "profile.country_id",
        component: FormFieldTypes.autocomplete,
        options: {
            row: 3,
            flex: 3,
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
        options: {
            dependOnField: "profile.country_id",
            placeholder: "Select a state",
            selectOptions: async (arg: FormModel) => exampleService.loadStates(),
            associationText: "name",
            associationValue: "id",
            row: 3,
            flex: 3,
        },
    },
    {
        name: "City",
        key: "profile.city",
        component: FormFieldTypes.textField,
        options: {
            row: 3,
            flex: 3,
            placeholder: "City",
        },
    },
    {
        name: "Zip code",
        key: "profile.zip",
        component: FormFieldTypes.textField,
        options: {
            placeholder: "Zip code",
            row: 4,
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
            row: 4,
            flex: 3,
        },
    },
    {
        name: "Personal email",
        key: "email",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["email"],
            placeholder: "Personal email",
            row: 4,
            flex: 3,
        },
    },
    {
        name: "Phone",
        key: "profile.phone_number",
        component: FormFieldTypes.textField,
        options: {
            row: 4,
            flex: 3,
            placeholder: "Phone",
            vuetifyProps: {
                mask: "phone",
            },
        },
    },
    {
        name: "Driver license",
        key: "profile.drivers_license_number",
        component: FormFieldTypes.textField,
        options: {
            row: 5,
            flex: 3,
            placeholder: "Driver license",
        },
    },
    {
        name: "Expiration driver license",
        key: "profile.drivers_license_expiration",
        component: FormFieldTypes.datepicker,
        options: {
            row: 5,
            flex: 3,
            placeholder: "Expiration driver license",
        },
    },
    {
        name: "Occupational license number",
        key: "profile.occupational_license_number",
        component: FormFieldTypes.textField,
        options: {
            placeholder: "Occupational license number",
            row: 5,
            flex: 3,
        },
    },
    {
        name: "Occupational license expiration",
        key: "profile.occupational_license_expiration",
        component: FormFieldTypes.datepicker,
        options: {
            placeholder: "Occupational license expiration",
            row: 5,
            flex: 3,
        },
    },
    {
        name: "Gender",
        key: "profile.gender",
        component: FormFieldTypes.enum,
        options: {
            placeholder: "gender",
            enumSelectOptions: [
                { value: "male", text: "Male" },
                { value: "female", text: "Female" },
                { value: "other", text: "Other" },
                { value: "no_answer", text: "No answer" },
            ],
            row: 6,
            flex: 3,
        },
    },
    {
        name: "Hourly rate",
        key: "profile.hourly_rate",
        component: FormFieldTypes.numericField,
        options: {
            placeholder: "Hourly rate",
            row: 6,
            flex: 3,
        },
    },
    {
        name: "Location",
        key: "settings.current_location_id",
        component: FormFieldTypes.select,
        options: {
            placeholder: "Location",
            selectOptions: async () => [],
            associationText: "name",
            associationValue: "id",
            row: 6,
            flex: 3,
        },
    },
    {
        name: "Roles",
        key: "roles",
        component: FormFieldTypes.select,
        defaultValue: [],
        options: {
            placeholder: "Roles",
            selectOptions: async () => exampleService.loadRoles(),
            associationText: "name",
            associationValue: "id",
            row: 7,
            flex: 3,
            vuetifyProps: {
                multiple: true,
            },
        },
    },
];
