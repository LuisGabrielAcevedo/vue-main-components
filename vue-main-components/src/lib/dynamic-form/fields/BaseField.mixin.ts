import { EventBus } from "@/event-bus";
import { FormField, FormFieldValidation, FormModel, Option, VisibleCallback } from "@/types/form.interfaces";
import get from "lodash/get";
import { Validator } from "vee-validate";
import Vue from "vue";
import { Component, Inject, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class BaseFieldComponent extends Vue {
  @Inject("validator") public $validator!: Validator;
  @Prop({ required: true }) public field!: FormField;
  @Prop({ required: true }) public model!: FormModel;
  @Prop({ required: true }) public currentModel!: FormModel;
  @Prop({ required: true }) public id!: string;
  @Prop({ required: true }) public appearance!: string;
  public dependEmitField!: string | undefined;
  public dependOnField!: string | undefined;
  public visibleValue: boolean = true;
  public disableValue: boolean = false;
  public value: any = this.field.defaultValue || null;
  public options: Option[] = [];
  public loading: boolean = false;
  public rules: string = "";
  public placeholder: string = "";
  public bindData: object = {};

  constructor() {
    super();
    this.dependEmitField = this.field.options!.dependEmitField || undefined;
    this.dependOnField = this.field.options!.dependOnField || undefined;
    this.placeholder = this.field.options!.placeholder || "";
    const rules: Array<FormFieldValidation | string> = this.field.options!.validationRules! || [];
    const bindData: object = this.field.options!.vuetifyProps! || undefined;
    if (bindData) {
      this.bindData = {...this.bindData, ...bindData};
    }
    if (rules) {
      rules.forEach((rule) => {
        this.rules += !this.rules ? this.rule(rule) : `|${this.rule(rule)}`;
      });
    }
  }

  public mounted() {
    if (this.field.options!.visibleCondition) {
      this.visibleValue = this.visible(this.field.options!.visibleCondition!);
    }
    if (this.field.options!.disableCondition!) {
      this.disableValue = this.disable(this.field.options!.disableCondition!);
    }
  }

  public rule(rule: FormFieldValidation | string): string {
    return typeof rule === "object" ? (rule as FormFieldValidation).rule : rule;
  }

  public resetValue(): void {
    this.value = this.field.defaultValue || null;
  }

  public changeModel(value: any): void {
    EventBus.$emit(`update-model-form-${this.id}`, {
      value,
      key: this.field.key,
    });
    if (this.dependEmitField) {
      EventBus.$emit(`change-form-${this.id}-${this.dependEmitField}`);
    }
  }

  public async loadSelectOptions(): Promise<any> {
    if (this.field.options!.selectOptions) {
      this.loading = true;
      this.options = await this.field.options!.selectOptions!(this);
      this.loading = false;
    }
  }

  public loadEmunSelectOptions(): void {
    if (this.field.options!.enumSelectOptions) {
      this.options = this.field.options!.enumSelectOptions!;
    }
  }

  public loadRadioGroupOptions(): void {
    if (this.field.options!.radioGroupOptions) {
      this.options = this.field.options!.radioGroupOptions!;
    }
  }

  public visible(visibleCondition: VisibleCallback): boolean {
    return visibleCondition ? visibleCondition(this.currentModel) : true;
  }

  public disable(disableCondition: VisibleCallback): boolean {
    return disableCondition ? disableCondition(this.currentModel) : false;
  }

  @Watch("currentModel", { deep: true })
  public changeCopyModel(): void {
    if (this.field.options!.visibleCondition) {
      this.visibleValue = this.visible(this.field.options!.visibleCondition!);
    }
    if (this.field.options!.disableCondition!) {
      this.disableValue = this.disable(this.field.options!.disableCondition!);
    }
  }

  public getValue(): any {
    return get(this.model, this.field.key!, this.field.defaultValue);
  }
}
