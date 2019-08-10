export type UpdateFormModelCallback = (model: FormModel) => void;

export enum FormTypeField {
  autocomplete = 'AutocompleteComponent',
  checkbox = 'CheckboxComponent',
  enum = 'EnumSelectComponent',
  radioGroup = 'RadioGroupComponent',
  select = 'SelectComponent',
  switch = 'SwitchComponent',
  textarea = 'TextareaComponent',
  textField = 'TextFieldComponent',
  image = 'ImageComponent',
  dynamic = 'DynamicComponent',
  empty = '',
}

export interface FormAspect {
  name: string | null;
  accessor: string | null;
  component: FormTypeField;
  dynamicComponent?: any;
  defaultValue: any;
  options?: {
    required?: boolean;
    association_class?: string;
    association_value?: string;
    association_text?: string;
    tab?: string;
    row?: number;
    flex?: number;
  };
}

export interface Tabs {
  order: number;
  name: string;
  aspects: FormAspect[] | FormAspect[][];
}

export interface FormModel {
  [key: string]: any;
}
