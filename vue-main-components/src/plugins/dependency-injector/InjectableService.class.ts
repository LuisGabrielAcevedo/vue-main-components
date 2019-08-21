import { Vue } from "vue-property-decorator";

export abstract class InjectableService extends Vue {
  constructor(protected app: Vue) {
    super(app.$options);
  }
}
