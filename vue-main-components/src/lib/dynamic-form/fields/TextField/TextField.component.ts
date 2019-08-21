import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./TextField.template.vue";

@Component({
  mixins: [Template],
})
export default class TextFieldComponent extends Mixins(BaseFieldComponent) {
  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
  }
}
