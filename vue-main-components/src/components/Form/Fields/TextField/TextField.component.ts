import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Template from './TextField.template.vue';
import { FormAspect, FormModel } from '@/components/Form/Form.interfaces';

@Component({
  mixins: [Template],
})
export default class TextFieldComponent extends Vue {
  @Prop({ default: null }) public aspect!: FormAspect;
  @Prop({ default: null }) public model!: FormModel;
  public value: any = this.aspect.defaultValue;

  @Watch('model')
  public changeValue() {
    this.value = this.model
      ? this.model[this.aspect.accessor!]
      : this.aspect.defaultValue;
  }

  public changeModel() {
    const model: FormModel = {};
    model[this.aspect.accessor!] = this.value;
    this.$emit('update-model', model);
  }
}
