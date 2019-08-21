# engeni-vue-components

## Instalacion
```
npm install engeni-vue-components
```

## Dynamic form component
### Uso
```javascript
import { FormFieldTypes, FormField } from 'engeni-vue-components';
```
FormFieldTypes ofrece los siguientes componentes:
 ```javascript
enum FormFieldTypes {
  autocomplete = 'AutocompleteComponent',
  asyncAutocomplete = 'AsyncAutocompleteComponent',
  checkbox = 'CheckboxComponent',
  enum = 'EnumSelectComponent',
  radioGroup = 'RadioGroupComponent',
  select = 'SelectComponent',
  switch = 'SwitchComponent',
  textarea = 'TextareaComponent',
  textField = 'TextFieldComponent',
  image = 'ImageComponent',
  datepicker = 'DatepickerComponent',
  numericField = 'NumericFieldComponent',
  passwordField = 'PasswordFieldComponent'
}
```
Crear el objeto de configuracion de formulario
```javascript
const userFieldsConfig: FormField[] = [
    {
        name: 'First name',
        key: 'first_name',
        component: FormFieldTypes.textField,
        defaultValue: 'Luis',
        options: {
            placeholder: 'First name',
        }
    },
    {
        name: 'Middle name',
        key: 'middle_name',
        component: FormFieldTypes.textField,
        defaultValue: '',
        options: {
            placeholder: 'Middle name',
        }
    },
    {
        name: 'Last name',
        key: 'last_name',
        component: FormFieldTypes.textField,
        defaultValue: '',
        options: {
            placeholder: 'Last name',
        }
    },
    {
        name: 'Email',
        key: 'email',
        component: FormFieldTypes.textField,
        defaultValue: '',
        options: {
            placeholder: 'Email'
        }
    }
];
```
#### Controlador
```javascript
import { Component, Vue } from 'vue-property-decorator';
import { DynamicFormComponent, FormField } from 'engeni-vue-components';
import userFieldsConfig from '@/metadata/user';
import Template from './BasicForm.template.vue';
@Component({
    mixins: [Template],
    components: {
        DynamicFormComponent
    }
})
export default class BasicFormComponent extends Vue {
    public form!: DynamicFormComponent;
    public fieldsConfig: FormField[] = userFieldsConfig;

    public mounted() {
        this.form = this.$refs['user-form'] as DynamicFormComponent;
    }

    public async submit() {
        const resp = await this.form.submit();
    }

    public resetValidations() {
        this.form.resetValidations();
    }
}
```
El componente DynamicFormComponent recibe como propiedad obligatoria fieldsConfig, la cual se refiere a la configuracion de los campos del formulario.
Es importante utilizar una referencia en la etiqueta del componente ya que esta nos permite acceder a algunos metodos como submit() y resetValidations().
#### Template
```html
<template>
  <div>
    <h1 class="text-md-center my-4">Dynamic Form</h1>
    <DynamicFormComponent :ref="'user-form'" :fieldsConfig="fieldsConfig"/>
    <v-layout row align-center justify-center>
      <v-btn @click="submit()">Submit</v-btn>
      <v-btn @click="resetValidations()">Reset validations</v-btn>
    </v-layout>
  </div>
</template>
```


