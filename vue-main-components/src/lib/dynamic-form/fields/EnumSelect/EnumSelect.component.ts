import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./EnumSelect.template.vue";

@Component({
  mixins: [Template],
})
export default class EnumSelectComponent extends Mixins(BaseFieldComponent) {
  public mounted() {
    this.loadEmunSelectOptions();
  }

  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
  }
}
