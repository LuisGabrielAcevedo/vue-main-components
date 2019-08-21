import { FormField, FormModel } from "@/types/form.interfaces";
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import Template from "./Limits.template.vue";

@Component({
    mixins: [Template],
})
export default class LimitsComponent extends Vue {
    @Prop({ required: true }) public model!: FormModel;
    @Prop({ required: true }) public currentModel!: FormModel;
    @Prop({ required: true }) public field!: FormField;
    public limits: object[] = [];

    @Watch("model")
    public modelValue() {
        this.limits = this.model.applicable_limits;
    }

    public name(name: string) {
        return name.length > 18 ? `${name.substring(0, 12)} ...` : name;
    }

    public value(used: number, amount: number): number {
        if (!used) {
            used = 0;
        }
        return used > amount ? 100 : (used * 100) / Number(amount);
    }
}
