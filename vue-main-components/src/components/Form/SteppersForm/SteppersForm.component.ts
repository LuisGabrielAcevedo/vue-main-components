import { Component, Prop, Vue } from 'vue-property-decorator';
import Template from './SteppersForm.template.vue';

@Component({
  mixins: [Template],
})
export default class SteppersFormComponent extends Vue {
  @Prop({ default: [] }) private aspects!: any[];
}
