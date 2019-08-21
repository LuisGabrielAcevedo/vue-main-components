import { Vue } from "vue-property-decorator";
import { InjectableService } from "./InjectableService.class";
export interface DependencyInjectorServiceOptions {
  [key: string]: any;
}

export default class DependencyInjector<
  T extends InjectableService
> extends Vue {
  private app!: Vue;
  private root: { [key: string]: T } = {};

  public init(app: Vue) {
    this.app = app;
  }

  public inject(type: new (...args: any[]) => T, caller: Vue): T {
    let instance: T;
    if (!this.app) {
      this.app = caller.$root;
    }
    const isRootComponent: boolean = caller.$root.$children[0] === caller;
    const serviceExists = !!this.root[String(type)];

    if (isRootComponent || serviceExists) {
      instance = this.rootService(type);
    } else {
      instance = this.localService(type);
    }

    if (!serviceExists) {
      caller.$once("hook:beforeDestroy", () => {
        instance.$destroy();
      });
    }
    return instance;
  }

  private rootService(type: new (...args: any[]) => T): T {
    if (this.root[String(type)]) {
      return this.root[String(type)];
    } else {
      const instance = new type(this.app);
      this.root[String(type)] = instance;
      return instance;
    }
  }

  private localService(type: new (...args: any[]) => T): T {
    return new type(this.app);
  }
}
