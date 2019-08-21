import { Component, Prop, Vue } from "vue-property-decorator";
import Template from "./Code.template.vue";
@Component({
    mixins: [Template],
})
export default class CodeComponent extends Vue {
    @Prop({required: true}) public data!: any;
    @Prop({required: true}) public type!: string;
}
