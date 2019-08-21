import Vue from "vue";
import DynamicFormComponent from "./lib/dynamic-form/Form.component";
import DynamicTableComponent from "./lib/dynamic-table/DynamicTable.component";
import ImagePickerComponent from "./lib/image-picker/ImagePicker.component";
import DependencyInjector from "./plugins/dependency-injector/dependency-injector.service";
import ModalsService from "./services/modal.service";
Vue.component("DynamicFormComponent", DynamicFormComponent);
Vue.component("DynamicTableComponent", DynamicTableComponent);
Vue.component("DynamicTableComponent", ImagePickerComponent);
export * from "./types";

export {
    DynamicFormComponent,
    DynamicTableComponent,
    ImagePickerComponent,
    ModalsService,
    DependencyInjector,
};
