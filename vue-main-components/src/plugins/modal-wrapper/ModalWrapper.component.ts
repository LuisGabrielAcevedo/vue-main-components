import { Component, Prop, Vue } from "vue-property-decorator";
import { EventBus } from "../../event-bus";
import { ModalOptions } from "../../types";
import Template from "./ModalWrapper.template.vue";

@Component({
    mixins: [Template],
})
export default class ModalWrapper<ModalType extends Vue> extends Vue {
    @Prop() public component!: ModalType;
    @Prop() public index!: number;
    @Prop() public options!: ModalOptions;
    @Prop() public mOptions!: { [key: string]: any };

    constructor(data: any) {
        super(data);
    }

    public onResolve(event: any) {
        setTimeout(() => {
            this.$destroy();
        }, 300);
        this.$emit("resolve", event);
    }

    public onReject(event: any) {
        setTimeout(() => {
            this.$destroy();
        }, 300);
        this.$emit("reject", event);
    }

    public mounted() {
        EventBus.$emit("noOverflow", true);
        this.$el.classList.add("modal-container");
        EventBus.$once("closeModals", this.onReject);
    }

    protected elClass(prefix: string, sufix: string) {
        return [String(prefix), sufix].join("__");
    }
    protected modClass(prefix: string, sufix: string) {
        return [String(prefix), sufix].join("--");
    }
}
