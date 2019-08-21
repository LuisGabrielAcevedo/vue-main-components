import { Component, Vue } from "vue-property-decorator";
import Template from "./Installation.template.vue";
@Component({
    mixins: [Template],
})
export default class InstallationComponent extends Vue {}
