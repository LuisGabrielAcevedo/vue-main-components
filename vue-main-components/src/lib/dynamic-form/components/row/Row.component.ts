import { FormField, FormModel } from "@/types/form.interfaces";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import AsyncAutocompleteComponent from "../../fields/AsyncAutocomplete/AsyncAutocomplete.component";
import AutocompleteComponent from "../../fields/Autocomplete/Autocomplete.component";
import CheckboxComponent from "../../fields/Checkbox/Checkbox.component";
import DatepickerComponent from "../../fields/Datepicker/Datepicker.component";
import EnumSelectComponent from "../../fields/EnumSelect/EnumSelect.component";
import ImageComponent from "../../fields/Image/Image.component";
import NumericFieldComponent from "../../fields/NumericField/NumericField.component";
import PasswordFieldComponent from "../../fields/PasswordField/PasswordField.component";
import RadioGroupComponent from "../../fields/RadioGroup/RadioGroup.component";
import SelectComponent from "../../fields/Select/Select.component";
import SwitchComponent from "../../fields/Switch/Switch.component";
import TextareaComponent from "../../fields/Textarea/Textarea.component";
import TextFieldComponent from "../../fields/TextField/TextField.component";
import Template from "./Row.template.vue";

@Component({
    mixins: [Template],
    components: {
        AsyncAutocompleteComponent,
        CheckboxComponent,
        EnumSelectComponent,
        RadioGroupComponent,
        SelectComponent,
        SwitchComponent,
        TextareaComponent,
        TextFieldComponent,
        NumericFieldComponent,
        PasswordFieldComponent,
        DatepickerComponent,
        AutocompleteComponent,
        ImageComponent,
    },
})
export default class RowComponent extends Vue {
    @Prop({ required: true }) public fieldsConfig!: FormField[];
    @Prop({ required: true }) public model!: FormModel;
    @Prop({ required: true }) public id!: string;
    @Prop({ required: true }) public currentModel!: FormModel;
    @Prop({ required: true }) public appearance!: string;
    public rowTitle: string | null = null;

    constructor() {
        super();
        this.fieldsConfig.forEach((field) => {
            if (field.options && field.options!.rowTitle) {
                this.rowTitle = field.options!.rowTitle!;
            }
        });
    }

    public updateModel(data: FormModel) {
        this.$emit("update-model", data);
    }
}
