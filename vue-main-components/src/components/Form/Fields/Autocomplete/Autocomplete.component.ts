import { Component, Vue } from 'vue-property-decorator';
import Template from './Autocomplete.template.vue';

@Component({
  mixins: [Template],
})
export default class AutocompleteComponent extends Vue {}
