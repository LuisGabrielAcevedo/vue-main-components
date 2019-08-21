import { EventBus } from "@/event-bus";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";
import { Component } from "vue-property-decorator";
import { FormResponse } from "../../types/form.interfaces";
import RowComponent from "./components/row/Row.component";
import FormComponent from "./Form.mixin";
import Template from "./Form.template.vue";

@Component({
  mixins: [Template],
  components: {
    RowComponent,
  },
})
export default class DynamicFormComponent extends FormComponent {
  public async submit(): Promise<FormResponse> {
    if (await this.validator.validateAll()) {
      return {
        valid: true,
        currentModel: cloneDeep(this.currentModel!),
      };
    } else {
      this.tabsValidationMove();
      return {
        valid: false,
        errors: cloneDeep(this.validator.errors),
      };
    }
  }

  public resetForm(): void {
    this.currentModel = cloneDeep(this.defaultModel());
    this.editedFieldsModel = {};
  }

  public resetValidations(): void {
    this.validator.reset();
  }

  public mounted() {
    EventBus.$on(`update-model-form-${this.id}`, this.updateModel);
  }

  private created(): void {
    this.buildValidationsDictionary();
  }

  private updateModel(data: { value: any; key: string }): void {
    this.editedFieldsModel = set(
      this.editedFieldsModel!,
      data.key!,
      data.value,
    );
    this.currentModel = set(this.currentModel!, data.key!, data.value);
  }

  private destroyed(): void {
    EventBus.$off(`update-model-form-${this.id}`);
  }
}
