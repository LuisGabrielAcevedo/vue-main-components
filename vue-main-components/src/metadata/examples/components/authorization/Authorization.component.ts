import { Validator } from "vee-validate";
import { Component, Inject, Provide, Vue } from "vue-property-decorator";
import Template from "./Authorization.template.vue";

@Component({
    mixins: [Template],
})
export default class AuthorizationComponent extends Vue {
    @Inject("$validator") public $validator!: Validator;
    @Provide() public validator: Validator = this.$validator;
    public password: string | null = null;
    public passwordConfirmation: string | null = null;

    public async submit() {
        if (await this.validator.validateAll()) {
            const data = {
                password: this.password,
                password_confirmation: this.passwordConfirmation,
            };
        }
    }
}
