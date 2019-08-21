import { Component, Vue } from "vue-property-decorator";
import Template from "./Toolbar.template.vue";
@Component({
    mixins: [Template],
})
export default class ToolbarComponent extends Vue {
    public drawerStatus: boolean = false;

    public routes: IRoutes[] = [
        {
            name: "Installation",
            icon: "",
            path: "/installation",
        },
        {
            name: "Dynamic form",
            path: "/dynamic-form",
            icon: "",
            children: [
                {
                    name: "Simple form",
                    path: "/dynamic-form/simple",
                },
                {
                    name: "Form components",
                    path: "/dynamic-form/components",
                },
                {
                    name: "Grid",
                    path: "/dynamic-form/grid",
                },
                {
                    name: "Tabs",
                    path: "/dynamic-form/tabs",
                },
                {
                    name: "Lateral form groups",
                    path: "/dynamic-form/lateral-groups",
                },
                {
                    name: "Form model",
                    path: "/dynamic-form/model",
                },
                {
                    name: "Dynamic components",
                    path: "/dynamic-form/dynamic-components",
                },
                {
                    name: "Form Validations",
                    path: "/dynamic-form/validations",
                },
                {
                    name: "Examples",
                    path: "/dynamic-form/examples",
                },
            ],
        },
    ];
    public drawerToggle() {
        this.drawerStatus = !this.drawerStatus;
    }

    public goTo(path: string) {
        this.$route.fullPath === path ? this.drawerToggle() : this.$router.push(path);
    }

    public itemStyle(path: string) {
        return this.$route.fullPath.includes(path.split("/")[1]);
    }

    public subItemStyle(path: string) {
        return this.$route.fullPath.split("/")[2] === path.split("/")[2];
    }
}

export interface IRoutes {
    name: string;
    icon?: string;
    path: string;
    children?: IRoutes[];
}
