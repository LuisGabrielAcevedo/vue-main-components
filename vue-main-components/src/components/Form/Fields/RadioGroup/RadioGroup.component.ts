import { Component, Vue } from 'vue-property-decorator';
import Template from './RadioGroup.template.vue';

@Component({
  mixins: [Template],
})
export default class RadioGroupComponent extends Vue {}
