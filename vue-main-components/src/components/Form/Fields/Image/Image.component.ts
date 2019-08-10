import { Component, Vue } from 'vue-property-decorator';
import Template from './Image.template.vue';

@Component({
  mixins: [Template],
})
export default class ImageComponent extends Vue {}
