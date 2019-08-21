import { FormField, FormModel } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";
import Template from "./ProductCostDetails.template.vue";

@Component({
    mixins: [Template],
})
export default class ProductCostDetailsComponent extends Vue {
    @Prop({ required: true }) public model!: FormModel;
    @Prop({ required: true }) public currentModel!: FormModel;
    @Prop({ required: true }) public field!: FormField;

    get totalCost() {
        return this.currentModel.cost
            ? this.filter(+this.currentModel.cost.current_total_cost)
            : "-";
    }

    get totalPotentialProfit() {
        return this.currentModel.cost
            ? this.filter(+this.currentModel.cost.total_potential_profit)
            : "-";
    }

    get averageCostPerUnit() {
        return this.currentModel.cost
            ? this.filter(+this.currentModel.cost.average_cost_per_unit)
            : "-";
    }

    public filter(value: any) {
        if (!value) {
            return `$0.00`;
        } else {
            const sign = Math.sign(value);
            return `${sign < 0 ? "-" : ""}$${Math.abs(value).toFixed(2)}`;
        }
    }
}
