import { Component, Prop, Vue } from "vue-property-decorator";
import Template from "./TabsCode.template.vue";
@Component({
    mixins: [Template],
})
export default class TabsCodeComponent extends Vue {
    @Prop({default: null}) public template!: string;
    @Prop({default: null}) public js!: string;
    @Prop({default: null}) public ts!: string;
    @Prop({default: null}) public css!: string;
    @Prop({default: null}) public metadata!: string;
    public active: number | null = null;
    public tabs: Tabs[] = [];

    public mounted() {
        if (this.template) {
            this.tabs.push({
                name: "Template",
                code_type: "html",
                data: this.template,
            });
        }
        if (this.js) {
            this.tabs.push({
                name: "Javascript",
                code_type: "javascript",
                data: this.js,
            });
        }
        if (this.ts) {
            this.tabs.push({
                name: "Ts",
                code_type: "typescript",
                data: this.ts,
            });
        }
        if (this.css) {
            this.tabs.push({
                name: "Css",
                code_type: "css",
                data: this.css,
            });
        }
        if (this.metadata) {
            this.tabs.push({
                name: "Metadata",
                code_type: "javascript",
                data: this.metadata,
            });
        }
    }
}

export interface Tabs {
    name: string;
    code_type: string;
    data: any;
}
