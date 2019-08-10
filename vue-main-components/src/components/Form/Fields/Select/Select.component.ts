import { Component, Prop, Vue } from 'vue-property-decorator';
import Template from './Select.template.vue';
import { FormAspect } from '@/components/Form/Form.interfaces';

@Component({
  mixins: [Template],
})
export default class SelectComponent extends Vue {
  @Prop({ default: null }) public aspect!: FormAspect;
}
