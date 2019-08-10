import { Component, Prop, Vue } from 'vue-property-decorator';
import Template from './TabsForm.template.vue';
import AutocompleteComponent from '@/components/Form/Fields/Autocomplete/Autocomplete.component';
import CheckboxComponent from '@/components/Form/Fields/Checkbox/Checkbox.component';
import EnumSelectComponent from '@/components/Form/Fields/EnumSelect/EnumSelect.component';
import RadioGroupComponent from '@/components/Form/Fields/RadioGroup/RadioGroup.component';
import SelectComponent from '@/components/Form/Fields/Select/Select.component';
import SwitchComponent from '@/components/Form/Fields/Switch/Switch.component';
import TextareaComponent from '@/components/Form/Fields/Textarea/Textarea.component';
import TextFieldComponent from '@/components/Form/Fields/TextField/TextField.component';
import ImageComponent from '@/components/Form/Fields/Image/Image.component';
import { FormModel, FormAspect } from '@/components/Form/Form.interfaces';

@Component({
  mixins: [Template],
  components: {
    AutocompleteComponent,
    CheckboxComponent,
    EnumSelectComponent,
    RadioGroupComponent,
    SelectComponent,
    SwitchComponent,
    TextareaComponent,
    TextFieldComponent,
    ImageComponent,
  },
})
export default class TabsFormComponent extends Vue {
  public active: number | null = null;
  @Prop({ default: null }) public model!: FormModel;
  @Prop({ default: [] }) public aspects!: FormAspect[];

  public updateModel(model: FormModel) {
    this.$emit('update-model', model);
  }
}
