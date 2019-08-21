import DynamicFormComponent from "@/lib/dynamic-form/Form.component";
import { FormField, FormFieldTypes, FormResponse } from "@/types";
import { Uuid, UuidOptions } from "node-ts-uuid";
import { Component, Vue } from "vue-property-decorator";
import Template from "./StrainNotesForm.template.vue";
const options: UuidOptions = {
    length: 10,
    prefix: "temp-",
};
@Component({
    mixins: [Template],
    components: {
        DynamicFormComponent,
    },
})
export default class StrainNotesFormComponent extends Vue {
    public fieldsConfig: FormField[] = formMetadata;
    public form!: DynamicFormComponent;
    public mounted() {
        this.form = this.$refs["strain-note-form"] as DynamicFormComponent;
    }

    public async submit() {
        const resp: FormResponse = await this.form.submit();
        if (resp.valid) {
            const note = { ...resp.currentModel, id: Uuid.generate(options) };
            this.$emit("resolve", note);
        }
    }
}

const formMetadata: FormField[] = [
    {
        name: "Topic",
        key: "topic",
        component: FormFieldTypes.textField,
        options: {
            validationRules: ["required"],
        },
    },
    {
        name: "Note",
        key: "note",
        component: FormFieldTypes.textarea,
        options: {
            validationRules: ["required"],
        },
    },
    {
        name: "Show notes at point of sale",
        key: "show_notes_at_point_of_sale",
        component: FormFieldTypes.checkbox,
    },
];
