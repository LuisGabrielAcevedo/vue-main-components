import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./PasswordField.template.vue";

@Component({
  mixins: [Template],
})
export default class PasswordFieldComponent extends Mixins(BaseFieldComponent) {
  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
  }
}
