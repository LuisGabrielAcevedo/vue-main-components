import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Template from './Form.template.vue';
import BasicFormComponent from '@/components/Form/BasicForm/BasicForm.component';
import TabsFormComponent from '@/components/Form/TabsForm/TabsForm.component';
import SteppersFormComponent from '@/components/Form/SteppersForm/SteppersForm.component';
import { Tabs, FormAspect, FormModel } from '@/components/Form/Form.interfaces';
import assign from 'lodash/assign';
import chunk from 'lodash/chunk';
import cloneDeep from 'lodash/cloneDeep';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

@Component({
  mixins: [Template],
  components: {
    BasicFormComponent,
    TabsFormComponent,
    SteppersFormComponent,
  },
})
export default class FormComponent extends Vue {
  public aspectsFormatted: Tabs[] = [];
  public leftAspectsGroup: FormAspect[] = [];
  public rightAspectsGroup: FormAspect[] = [];
  public bottomAspectsGroup: FormAspect[] = [];
  public topAspectsGroup: FormAspect[] = [];
  public modelCopy: FormModel | null = null;
  @Prop({ default: null }) public model!: FormModel;
  @Prop({ required: true }) private aspects!: FormAspect[];
  @Prop({ default: 'tabs' }) private formType!: string;
  @Prop({ default: 3 }) private columns!: number;

  constructor() {
    super();
  }

  public mounted() {
    this.initForm();
  }

  public initForm() {
    this.aspectsFormatted = [];
    this.formatAspects();
  }

  @Watch('model')
  public copyModel() {
    this.modelCopy = cloneDeep(this.model);
  }

  public formatAspects() {
    const aspectsFormatted: Tabs[] = [];
    const tabs = groupBy(
      this.aspects,
      (aspect: FormAspect) => aspect.options!.tab,
    );
    Object.keys(tabs).forEach((tab) => {
      const order: number = +tab.split('/')[1];
      const name: string = tab.split('/')[0];
      aspectsFormatted.push({
        order,
        name,
        aspects: tabs[tab] as FormAspect[],
      });
    });
    this.aspectsFormatted = sortBy(aspectsFormatted, ['order']);
    this.buildColumns();
  }

  public buildColumns() {
    this.aspectsFormatted = this.aspectsFormatted.map((tab, i) => {
      if (tab.aspects.length === 1) {
        (tab.aspects as FormAspect[])[0].options!.flex = 12;
        tab.aspects = [tab.aspects as FormAspect[]];
      } else {
        tab.aspects = this.buildRows(tab.aspects as FormAspect[]);
      }
      return tab;
    });
  }

  public buildRows(aspects: FormAspect[]): FormAspect[][] {
    const rows: FormAspect[][] = [];
    const aspectsGroups = groupBy(
      aspects,
      (aspect: FormAspect) => aspect.options!.row,
    );
    Object.keys(aspectsGroups).forEach((group) => {
      rows.push(aspectsGroups[group]);
    });
    return rows;
  }

  public buildRowsByColumns(aspects: FormAspect[]): FormAspect[][] {
    const flex: number = Math.floor(12 / this.columns);
    aspects.map((aspectItem) => {
      aspectItem.options!.flex = flex;
      return aspectItem;
    });
    return chunk(aspects, this.columns);
  }

  public updateModel(model: FormModel) {
    this.modelCopy = assign(this.modelCopy, model);
  }

  public submit() {
    this.$emit('current_model', this.modelCopy);
  }
}
