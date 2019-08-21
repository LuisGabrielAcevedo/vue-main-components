import chunk from "lodash/chunk";
import cloneDeep from "lodash/cloneDeep";
import groupBy from "lodash/groupBy";
import head from "lodash/head";
import set from "lodash/set";
import sortBy from "lodash/sortBy";
import { Uuid, UuidOptions } from "node-ts-uuid";
import { ErrorBag, ErrorField, Validator } from "vee-validate";
import Vue from "vue";
import { Component, Inject, Prop, Provide } from "vue-property-decorator";
import {
  FormField,
  FormLateralGroup,
  FormModel,
  FormTabs,
  VeeValidateDictionary,
} from "../../types/form.interfaces";
import AsyncAutocompleteComponent from "./fields/AsyncAutocomplete/AsyncAutocomplete.component";
import AutocompleteComponent from "./fields/Autocomplete/Autocomplete.component";
import CheckboxComponent from "./fields/Checkbox/Checkbox.component";
import DatepickerComponent from "./fields/Datepicker/Datepicker.component";
import EnumSelectComponent from "./fields/EnumSelect/EnumSelect.component";
import ImageComponent from "./fields/Image/Image.component";
import NumericFieldComponent from "./fields/NumericField/NumericField.component";
import PasswordFieldComponent from "./fields/PasswordField/PasswordField.component";
import RadioGroupComponent from "./fields/RadioGroup/RadioGroup.component";
import SelectComponent from "./fields/Select/Select.component";
import SwitchComponent from "./fields/Switch/Switch.component";
import TextareaComponent from "./fields/Textarea/Textarea.component";
import TextFieldComponent from "./fields/TextField/TextField.component";
const options: UuidOptions = {
  length: 10,
};

@Component({
  components: {
    AsyncAutocompleteComponent,
    CheckboxComponent,
    EnumSelectComponent,
    RadioGroupComponent,
    SelectComponent,
    SwitchComponent,
    TextareaComponent,
    TextFieldComponent,
    NumericFieldComponent,
    PasswordFieldComponent,
    DatepickerComponent,
    AutocompleteComponent,
    ImageComponent,
  },
})
export default class FormComponent extends Vue {
  get formModel(): FormModel {
    const model: FormModel = this.model
      ? cloneDeep(this.model)
      : cloneDeep(this.defaultModel());
    this.currentModel = cloneDeep(model);
    return model;
  }

  get fieldsFormatted(): FormTabs[] {
    const tabs: FormTabs[] = this.fieldsConfig && this.fieldsConfig.length ? cloneDeep(this.formatFields()) : [];
    return tabs;
  }

  public id: string = Uuid.generate(options);
  @Inject("$validator") public $validator!: Validator;
  @Provide() public validator: Validator = this.$validator;
  protected active: number | null = null;
  protected currentModel: FormModel | null = null;
  protected editedFieldsModel: FormModel = {};
  @Prop({ default: null }) protected fieldsConfig!: FormField[];
  @Prop({ default: null }) protected model!: FormModel | null;
  @Prop({ default: "tabs" }) protected formType!: string;
  @Prop({ default: "" }) protected appearance!: string;
  @Prop({ default: null }) protected columns!: number | null;

  protected formatFields(): FormTabs[] {
    let tabsFormatted: FormTabs[] = [];
    this.fieldsConfig.forEach((field) => {
      const tab: string | undefined = field.tab as string;
      const order: number = tab ? +tab!.split("/")[1] : 0;
      const name: string = tab ? tab!.split("/")[0] : "Default tab";
      const group: string | null = field.options ? field.options.group! : null;
      const item = tabsFormatted.find((tabFormatted) => tabFormatted.name === name);
      if (item) {
        if (group) {
          group === FormLateralGroup.left ? item.leftFieldGroup!.push(field)
            : item.rightFieldGroup!.push(field);
        } else {
          (item.fields as FormField[]).push(field);
        }
      } else {
        const tabNewItem: FormTabs = {
          order: isNaN(order) ? 0 : order,
          name,
          fields: [],
          leftFieldGroup: [],
          rightFieldGroup: [],
        };
        if (group) {
          group === FormLateralGroup.left ? tabNewItem.leftFieldGroup!.push(field)
            : tabNewItem.rightFieldGroup!.push(field);
        } else {
          (tabNewItem.fields as FormField[]).push(field);
        }
        tabsFormatted.push(tabNewItem);
      }
    });
    tabsFormatted = sortBy(tabsFormatted, ["order"]);
    tabsFormatted = this.buildColumns(tabsFormatted);
    return tabsFormatted;
  }

  protected buildColumns(tabs: FormTabs[]): FormTabs[] {
    let tabsFormatted: FormTabs[] = [];
    tabsFormatted = tabs.map((tab, i) => {
      if (tab.fields.length === 1) {
        if (!(tab.fields as FormField[])[0].options) {
          (tab.fields as FormField[])[0].options = {};
        }
        (tab.fields as FormField[])[0].options!.flex = 12;
        tab.fields = [tab.fields as FormField[]];
      } else {
        tab.fields = this.columns
          ? this.buildRowsByColumns(tab.fields as FormField[])
          : this.buildRows(tab.fields as FormField[]);
      }
      return tab;
    });
    return tabsFormatted;
  }

  protected buildRows(fields: FormField[]): FormField[][] {
    const rows: FormField[][] = [];
    fields = fields.map((field, i) => {
      return field.options ? field.options.row ? field : {
        ...field, options: {
          ...field.options, row: i,
        },
      } : { ...field, options: { row: i } };
    });
    const fieldsGroups = groupBy(
      fields,
      (field: FormField) => field.options!.row,
    );
    Object.keys(fieldsGroups).forEach((group) => {
      rows.push(fieldsGroups[group]);
    });
    return rows;
  }

  protected buildRowsByColumns(fields: FormField[]): FormField[][] {
    const flex: number = Math.floor(12 / this.columns!);
    fields.map((fieldItem) => {
      if (!fieldItem.options) {
        fieldItem.options = {};
      }
      fieldItem.options!.flex = flex;
      return fieldItem;
    });
    return chunk(fields, this.columns!);
  }

  protected defaultModel(): FormModel {
    let model: FormModel = {};
    this.fieldsConfig.forEach((field) => {
      if (field.key) {
        model = set(model, field.key!, field.defaultValue || null);
      }
    });
    return model;
  }

  protected buildValidationsDictionary(): void {
    const fields: FormField[] = this.fieldsConfig.filter(
      (field) => field.options && field.options!.validationRules,
    );
    const dictionary: VeeValidateDictionary = {
      custom: {},
    };
    if (fields.length) {
      fields.forEach((field) => {
        field.options!.validationRules!.forEach((rule) => {
          if (typeof rule === "object") {
            let ruleFormatted: string = rule.rule;
            ruleFormatted = ruleFormatted.split(":")[0];
            const key: string = field.key!;
            if (dictionary.custom![key]) {
              dictionary.custom![key][ruleFormatted] = rule.message;
            } else {
              dictionary.custom![key] = {};
              dictionary.custom![key][ruleFormatted] = rule.message;
            }
          }
        });
      });
    }
    this.validator.localize("en", dictionary);
  }

  protected tabsValidationMove(): void {
    const errors: ErrorBag = this.validator.errors!;
    const firstError: ErrorField | undefined = head(errors.items);
    if (firstError) {
      const field: FormField | undefined = this.fieldsConfig.find(
        (fieldItem) => fieldItem.key === firstError.field,
      );
      if (field && field.options && field.tab) {
        const tabIndex: number = +(field.tab as string).split("/")[1];
        this.active = tabIndex;
      }
    }
  }

  private formGrid(tab: FormTabs) {
    let flex: number = 12;
    if (tab.leftFieldGroup && tab.leftFieldGroup!.length) {
      flex = flex - 3;
    }
    if (tab.rightFieldGroup && tab.rightFieldGroup!.length) {
      flex = flex - 3;
    }
    return flex;
  }
}
