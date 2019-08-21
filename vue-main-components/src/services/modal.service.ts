import clone from "lodash/clone";
import { Vue } from "vue-property-decorator";
import { EventBus } from "../event-bus";
import { InjectableService } from "../plugins/dependency-injector/InjectableService.class";
import ModalWrapper from "../plugins/modal-wrapper/ModalWrapper.component";
import { ModalDefaultOptions, ModalOptions } from "../types";

export default class ModalsService<
  Modal extends Vue
> extends InjectableService {
  private rootContainer!: Element;
  private modalsCounter: number = 0;

  constructor(protected app: Vue) {
    super(app);
    this.rootContainer = document.createElement("div");
    this.rootContainer.classList.add("engeni-modals-service__root-container");
    (document.body as any).append(this.rootContainer);
  }

  public load(
    M: Modal,
    options?: Partial<ModalOptions>,
    transclude?: any,
  ): Promise<any> {
    this.modalsCounter++;
    const locals = { ...ModalDefaultOptions, ...options, ...{} };
    const modal = new ModalWrapper({
      propsData: {
        component: M,
        index: clone(this.modalsCounter),
        options: locals,
        mOptions: transclude,
      },
      i18n: this.app.$options.i18n,
      router: this.app.$options.router,
      store: this.app.$options.store,
    });
    const container = document.createElement("div");
    (this.rootContainer as any).append(container);
    const VueModal = modal.$mount(container);

    modal.$once("hook:beforeDestroy", () => {
      setTimeout(() => {
        this.modalsCounter--;
        this.rootContainer.removeChild(modal.$el);
        EventBus.$emit("onModalClose", this.modalsCounter);
      }, locals.closeDelay);
    });

    return new Promise((resolve, reject) => {
      VueModal.$on("resolve", (data: any) => {
        resolve(data);
        modal.$destroy();
      });
      VueModal.$on("reject", (data: any) => {
        reject(data);
        modal.$destroy();
      });
    });
  }
}
