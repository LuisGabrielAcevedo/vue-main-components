import { EventBus } from "@/event-bus";
import debounce from "lodash/debounce";
import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./AsyncAutocomplete.template.vue";

@Component({
  mixins: [Template],
})
export default class AsyncAutocompleteComponent extends Mixins(
  BaseFieldComponent,
) {
  public search: string = "";
  public newValue: string = "";
  public debounceSearch = debounce(
    async (scope: AsyncAutocompleteComponent, newValue: string) => {
      scope.loading = true;
      scope.newValue = newValue;
      scope.options = await scope.field.options!.selectOptions!(scope);
      scope.loading = false;
    },
    500,
  );

  public mounted() {
    if (this.dependOnField) {
      EventBus.$on(
        `change-form-${this.id}-${this.field.key}`,
        this.clearSearchInput,
      );
    }
  }

  public async clearSearchInput() {
    this.search = "";
    this.value = null;
    this.changeModel(null);
    this.changeValueSearch("");
  }

  public changeValueSearch(newValue: any) {
    if (!newValue || newValue.length > 2) {
      this.debounceSearch(this, newValue);
    }
  }

  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
    if (this.value) {
      this.debounceSearch(this, this.value);
    }
  }

  public destroyed() {
    if (this.dependOnField) {
      EventBus.$off(`change-form-${this.id}-${this.field.key}`);
    }
  }
}
