import { Component, Vue } from 'vue-property-decorator';
import Template from './Switch.template.vue';

@Component({
  mixins: [Template],
})
export default class SwitchComponent extends Vue {}
