import { Component, Vue } from "vue-property-decorator";
import Template from "./ImagePicker.template.vue";
@Component({
    mixins: [Template],
})
export default class ImagePickerComponent extends Vue {}
