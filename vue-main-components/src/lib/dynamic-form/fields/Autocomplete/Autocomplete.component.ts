
import { Component, Mixins } from "vue-property-decorator";
import SelectComponent from "../Select/Select.component";
import Template from "./Autocomplete.template.vue";

@Component({
  mixins: [Template],
})
export default class AutocompleteComponent extends Mixins(SelectComponent) {
  public async clearSearchInput() {
    this.value = null;
    this.changeModel(null);
  }
}
