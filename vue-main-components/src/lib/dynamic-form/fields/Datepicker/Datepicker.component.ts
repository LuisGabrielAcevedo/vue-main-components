import moment from "moment";
import Component from "vue-class-component";
import { Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./Datepicker.template.vue";

@Component({
  mixins: [Template],
})
export default class DatepickerComponent extends Mixins(BaseFieldComponent) {
  public dateFormatted: string | null = null;
  public menuStatus: boolean = false;
  public defaultFormat: string = "MM-DD-YYYY";

  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
    if (this.value) {
      this.dateFormatted = moment(this.value).format(this.defaultFormat);
    }
  }

  public resetDate() {
    this.value = "";
    this.changeModel(this.value);
  }

  public changeDate() {
    this.menuStatus = false;
    this.dateFormatted = moment(this.value).format(this.defaultFormat);
    this.changeModel(this.value);
  }
}
