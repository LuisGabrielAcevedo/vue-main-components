export type VisibleCallback = (arg: FormModel) => boolean;
export type DisableCallback = (arg: FormModel) => boolean;

export enum FormFieldTypes {
  autocomplete = "AutocompleteComponent",
  asyncAutocomplete = "AsyncAutocompleteComponent",
  checkbox = "CheckboxComponent",
  enum = "EnumSelectComponent",
  radioGroup = "RadioGroupComponent",
  select = "SelectComponent",
  switch = "SwitchComponent",
  textarea = "TextareaComponent",
  textField = "TextFieldComponent",
  image = "ImageComponent",
  datepicker = "DatepickerComponent",
  numericField = "NumericFieldComponent",
  passwordField = "PasswordFieldComponent",
}

export interface FormField {
  name: any;
  key: string | null;
  component?: FormFieldTypes;
  dynamicComponent?: any;
  defaultValue?: any;
  tab?: any;
  options?: {
    selectOptions?: (...arg: any[]) => Promise<any> | any;
    placeholder?: any;
    defaultImageField?: string;
    validationRules?: Array<FormFieldValidation | string>;
    visibleCondition?: VisibleCallback;
    disableCondition?: DisableCallback;
    enumSelectOptions?: Option[];
    associationValue?: string;
    associationText?: string;
    radioGroupOptions?: Option[];
    dependOnField?: string;
    dependEmitField?: string;
    row?: number;
    flex?: number;
    group?: FormLateralGroup;
    rowTitle?: any;
    vuetifyProps?: object;
  };
}

export interface FormTabs {
  order: number | null;
  name: string;
  fields: FormField[] | FormField[][];
  leftFieldGroup?: FormField[];
  rightFieldGroup?: FormField[];
}

export interface FormModel {
  [key: string]: any;
}

export interface Option {
  value: any;
  text: any;
}

export enum ImageMode {
  select = "SELECT_PHOTO",
  camera = "CAMERA",
}

export enum FormLateralGroup {
  left = "left",
  right = "right",
}

export interface FormFieldValidation {
  rule: string;
  message?: string;
}

export interface VeeValidateDictionary {
  custom?: {
    [key: string]: any;
  };
}

export interface FormResponse {
  valid: boolean;
  currentModel?: FormModel;
  errors?: any;
  editedFields?: FormModel;
}
