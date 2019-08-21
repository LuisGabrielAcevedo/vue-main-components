import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./NumericField.template.vue";

@Component({
  mixins: [Template],
})
export default class NumericFieldComponent extends Mixins(BaseFieldComponent) {
  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
  }

  public preChangeModel() {
    this.changeModel(Number(this.value));
  }
}
