import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./RadioGroup.template.vue";

@Component({
  mixins: [Template],
})
export default class RadioGroupComponent extends Mixins(BaseFieldComponent) {
  public created() {
    this.loadRadioGroupOptions();
  }

  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
  }
}
