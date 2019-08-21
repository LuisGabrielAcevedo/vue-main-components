import ToolbarComponent from "@/proyect-components/toolbar/Toobar.component";
import { Component, Vue } from "vue-property-decorator";
import Template from "./App.vue";
@Component({
    mixins: [Template],
    components: {
        ToolbarComponent,
    },
})
export default class App extends Vue {}
