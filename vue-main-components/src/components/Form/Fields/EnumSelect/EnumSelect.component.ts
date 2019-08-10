import { Component, Vue } from 'vue-property-decorator';
import Template from './EnumSelect.template.vue';

@Component({
  mixins: [Template],
})
export default class EnumSelectComponent extends Vue {}
