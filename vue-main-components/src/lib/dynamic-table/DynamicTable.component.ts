import { Component, Vue } from "vue-property-decorator";
import Template from "./DynamicTable.template.vue";
@Component({
    mixins: [Template],
})
export default class DynamicTableComponent extends Vue {}
