import { Component, Vue } from 'vue-property-decorator';
import Template from './Textarea.template.vue';

@Component({
  mixins: [Template],
})
export default class TextareaComponent extends Vue {}
