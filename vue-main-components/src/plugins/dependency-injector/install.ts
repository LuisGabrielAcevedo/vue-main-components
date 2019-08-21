import _Vue from "vue";
import DependencyInjector, {
  DependencyInjectorServiceOptions,
} from "./dependency-injector.service";

declare module "vue/types/vue" {
  interface Vue {
    $services: DependencyInjector<any>;
  }
}

export default function DependencyInjectorServicePlugin(
  Vue: typeof _Vue,
  options?: DependencyInjectorServiceOptions,
) {
  Vue.prototype.$services = new DependencyInjector();
}
