import { Component, Prop, Vue } from 'vue-property-decorator';
import Template from './BasicForm.template.vue';


@Component({
  mixins: [Template],
})
export default class BasicFormComponent extends Vue {
  @Prop({ default: [] }) private aspects!: any[];
}
