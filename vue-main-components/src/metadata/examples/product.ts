import ProductCostDetailsComponent from "@/metadata/examples/components/product-cost-details/ProductCostDetails.component";
import { FormField, FormFieldTypes } from "@/types";

export const productMetadata: FormField[] = [
    {
        name: "Product",
        key: "name",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            validationRules: ["required"],
            placeholder: "Product",
            row: 1,
            flex: 6,
        },
    },
    {
        name: "Cannabis product",
        key: "marijuana",
        component: FormFieldTypes.checkbox,
        tab: "Basic info/0",
        options: {
            row: 1,
            flex: 2,
        },
    },
    {
        name: "Requires weighing",
        key: "requires_weighing",
        component: FormFieldTypes.checkbox,
        tab: "Basic info/0",
        options: {
            row: 1,
            flex: 2,
        },
    },
    {
        name: "Require inventory",
        key: "require_inventory",
        component: FormFieldTypes.checkbox,
        tab: "Basic info/0",
        options: {
            row: 1,
            flex: 2,
            visibleCondition: (arg) => arg.marijuana,
        },
    },
    {
        name: "Strain",
        key: "strain_id",
        component: FormFieldTypes.autocomplete,
        tab: "Basic info/0",
        options: {
            row: 2,
            flex: 6,
            placeholder: "Strain",
            visibleCondition: (arg) => arg.marijuana,
        },
    },
    {
        name: "Usable weight",
        key: "usable_weight",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            placeholder: "Usable weight",
            row: 2,
            flex: 3,
            visibleCondition: (arg) => arg.marijuana && !arg.requires_weighing,
        },
    },
    {
        name: "Unit",
        key: "unit",
        component: FormFieldTypes.enum,
        tab: "Basic info/0",
        options: {
            row: 2,
            flex: 3,
            visibleCondition: (arg) => arg.marijuana && !arg.requires_weighing,
            enumSelectOptions: [
                {
                    value: "g",
                    text: "Grams",
                },
                {
                    value: "mg",
                    text: "Miligrams",
                },
                {
                    value: "ounces",
                    text: "Ounces",
                },
            ],
        },
    },
    {
        name: "Batch type",
        key: "batch_type_id",
        component: FormFieldTypes.autocomplete,
        tab: "Basic info/0",
        options: {
            row: 3,
            flex: 6,
            placeholder: "Batch type",
        },
    },
    {
        name: "Category",
        key: "product_category_id",
        component: FormFieldTypes.autocomplete,
        tab: "Basic info/0",
        options: {
            row: 4,
            flex: 6,
            placeholder: "Category",
        },
    },
    {
        name: "Brand",
        key: "brand_id",
        component: FormFieldTypes.autocomplete,
        tab: "Basic info/0",
        options: {
            row: 5,
            flex: 6,
            placeholder: "Brand",
        },
    },
    {
        name: "Vendor",
        key: "vendor_id",
        component: FormFieldTypes.autocomplete,
        tab: "Basic info/0",
        options: {
            row: 6,
            flex: 6,
            placeholder: "Vendor",
        },
    },
    {
        name: "External Barcode",
        key: "barcode",
        component: FormFieldTypes.textField,
        tab: "Basic info/0",
        options: {
            placeholder: "Barcode",
            row: 7,
            flex: 6,
        },
    },
    {
        name: null,
        key: null,
        tab: "Pricing, Discount & Cost details/2",
        dynamicComponent: ProductCostDetailsComponent,
        options: {
            row: 1,
            flex: 12,
        },
    },
    {
        name: "Default Cost Per Unit",
        key: "price_settings.default_cost_per_unit",
        component: FormFieldTypes.textField,
        tab: "Pricing, Discount & Cost details/2",
        options: {
            row: 2,
            flex: 6,
        },
    },
    {
        name: "Member discount eligible",
        key: "price_settings.member_discount_eligible",
        component: FormFieldTypes.checkbox,
        tab: "Pricing, Discount & Cost details/2",
        options: {
            rowTitle: "Pricing Settings",
            row: 3,
            flex: 4,
        },
    },
    {
        name: "Members only product",
        key: "price_settings.members_only_product",
        component: FormFieldTypes.checkbox,
        tab: "Pricing, Discount & Cost details/2",
        options: {
            row: 3,
            flex: 4,
        },
    },
    {
        name: "Block item from being sold below cost per unit",
        key: "price_settings.block_item_from_being_sold_below_cost_per_unit",
        component: FormFieldTypes.checkbox,
        tab: "Pricing, Discount & Cost details/2",
        options: {
            row: 3,
            flex: 4,
        },
    },
    {
        name: "Block item from being sold at zero cost",
        key: "price_settings.block_item_from_being_sold_at_zero_cost",
        component: FormFieldTypes.checkbox,
        tab: "Pricing, Discount & Cost details/2",
        options: {
            row: 4,
            flex: 4,
        },
    },
    {
        name: "Recreational customer label",
        key: "packaging_detail.recreational_template_label_id",
        component: FormFieldTypes.autocomplete,
        tab: "Packaging details/3",
        options: {
            placeholder: "Type to search",
            rowTitle: "Label Assignment",
            row: 1,
            flex: 6,
        },
    },
    {
        name: "Medical customer label",
        key: "packaging_detail.medical_template_label_id",
        component: FormFieldTypes.autocomplete,
        tab: "Packaging details/3",
        options: {
            placeholder: "Type to search",
            row: 2,
            flex: 6,
        },
    },
    {
        name: "Inventory customer label",
        key: "packaging_detail.inventory_template_label_id",
        component: FormFieldTypes.autocomplete,
        tab: "Packaging details/3",
        options: {
            placeholder: "Type to search",
            row: 3,
            flex: 6,
        },
    },
    {
        name: "Ingredients",
        key: "packaging_detail.ingredients",
        component: FormFieldTypes.textarea,
        tab: "Packaging details/3",
        options: {
            rowTitle: "Product contents",
            row: 4,
            flex: 6,
        },
    },
    {
        name: "Allergens",
        key: "packaging_detail.allergens",
        component: FormFieldTypes.textarea,
        tab: "Packaging details/3",
        options: {
            row: 4,
            flex: 6,
        },
    },
    {
        name: "Activation time",
        key: "packaging_detail.activation_time",
        component: FormFieldTypes.textField,
        tab: "Packaging details/3",
        options: {
            rowTitle: "Packaging Details",
            row: 5,
            flex: 3,
        },
    },
    {
        name: "Unit",
        key: "packaging_detail.activation_time_unit",
        component: FormFieldTypes.enum,
        tab: "Packaging details/3",
        options: {
            row: 5,
            flex: 3,
            enumSelectOptions: [
                {
                    value: "H",
                    text: "Hours",
                },
                {
                    value: "M",
                    text: "Minutes",
                },
                {
                    value: "S",
                    text: "Seconds",
                },
            ],
        },
    },
    {
        name: "Lasting effect time",
        key: "packaging_detail.lasting_effect_time",
        component: FormFieldTypes.textField,
        tab: "Packaging details/3",
        options: {
            row: 5,
            flex: 3,
        },
    },
    {
        name: "Unit",
        key: "packaging_detail.lasting_effect_time_unit",
        component: FormFieldTypes.enum,
        tab: "Packaging details/3",
        options: {
            row: 5,
            flex: 3,
            enumSelectOptions: [
                {
                    value: "H",
                    text: "Hours",
                },
                {
                    value: "M",
                    text: "Minutes",
                },
                {
                    value: "S",
                    text: "Seconds",
                },
            ],
        },
    },
    {
        name: "Serving size",
        key: "packaging_detail.serving_size",
        component: FormFieldTypes.textField,
        tab: "Packaging details/3",
        options: {
            row: 6,
            flex: 3,
        },
    },
    {
        name: "Unit",
        key: "packaging_detail.serving_size_unit",
        component: FormFieldTypes.enum,
        tab: "Packaging details/3",
        options: {
            row: 6,
            flex: 3,
            enumSelectOptions: [
                {
                    value: "ounce",
                    text: "Ounce",
                },
                {
                    value: "mg",
                    text: "Milligram",
                },
                {
                    value: "g",
                    text: "Gram",
                },
                {
                    value: "Kg",
                    text: "kilogram",
                },
            ],
        },
    },
    {
        name: "Suggested amount",
        key: "packaging_detail.suggested_amount",
        component: FormFieldTypes.textField,
        tab: "Packaging details/3",
        options: {
            row: 6,
            flex: 3,
        },
    },
    {
        name: "Serving Per Container",
        key: "packaging_detail.serving_size_of_the_container",
        component: FormFieldTypes.textField,
        tab: "Packaging details/3",
        options: {
            row: 6,
            flex: 3,
        },
    },
    {
        name: "Manufacturer",
        key: "packaging_detail.manufacturer_id",
        component: FormFieldTypes.autocomplete,
        tab: "Packaging details/3",
        options: {
            row: 7,
            flex: 6,
            placeholder: "Type to search",
            rowTitle: "Product Source",
        },
    },
    {
        name: "Cultivator",
        key: "packaging_detail.cultivator_id",
        component: FormFieldTypes.autocomplete,
        tab: "Packaging details/3",
        options: {
            row: 7,
            flex: 6,
            placeholder: "Type to search",
        },
    },
    {
        name: "",
        key: "avatar",
        component: FormFieldTypes.image,
        tab: "Picture/4",
        options: {
            defaultImageField: "avatar_medium_url",
        },
    },
];
