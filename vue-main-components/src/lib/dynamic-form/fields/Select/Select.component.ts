import { EventBus } from "@/event-bus";
import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./Select.template.vue";

@Component({
  mixins: [Template],
})
export default class SelectComponent extends Mixins(BaseFieldComponent) {
  public mounted() {
    if (!this.dependOnField) {
      this.loadSelectOptions();
    } else {
      EventBus.$on(
        `change-form-${this.id}-${this.field.key}`,
        this.formChangeEvent,
      );
      EventBus.$on(
        `load-select-options-form-${this.id}-${this.field.key}`,
        this.loadSelectOptions,
      );
    }
  }

  public formChangeEvent() {
    this.value = null;
    this.changeModel(null);
    this.loadSelectOptions();
  }

  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
    if (this.value && this.dependEmitField) {
      EventBus.$emit(
        `load-select-options-form-${this.id}-${this.dependEmitField}`,
      );
    }
  }

  public destroyed() {
    if (this.dependOnField) {
      EventBus.$off(`change-form-${this.id}-${this.field.key}`);
      EventBus.$off(`load-select-options-form-${this.id}-${this.field.key}`);
    }
  }
}
