<template>
  <v-app id="app">
    <FormComponent :aspects="aspects"/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormComponent from '@/components/Form/Form.component';
import { FormAspect, FormTypeField } from '@/components/Form/Form.interfaces';

@Component({
  components: {
    FormComponent,
  },
})
export default class App extends Vue {
  public aspects: FormAspect[] = [
    {
      name: 'name',
      accessor: 'name',
      component: FormTypeField.textField,
      defaultValue: '',
      options: {
        required: true,
        tab: 'basic_info/0',
        row: 0,
        flex: 6,
      },
    },
    {
      name: null,
      accessor: null,
      component: FormTypeField.empty,
      defaultValue: null,
      options: {
        required: true,
        tab: 'batch_assigned_to_product/1',
      },
    },
    {
      name: null,
      accessor: null,
      component: FormTypeField.empty,
      // dynamicComponent: TestComponent,
      defaultValue: null,
      options: {
        required: true,
        tab: 'pricing_discount_&_cost_details/2',
      },
    },
    {
      name: 'strain',
      accessor: 'strain_id',
      component: FormTypeField.select,
      defaultValue: null,
      options: {
        required: true,
        association_class: 'strain',
        association_value: 'id',
        association_text: 'name',
        tab: 'basic_info/0',
        row: 1,
        flex: 6,
      },
    },
    {
      name: 'batch_type',
      accessor: 'batch_type_id',
      component: FormTypeField.select,
      defaultValue: null,
      options: {
        required: true,
        association_class: 'batchType',
        association_value: 'id',
        association_text: 'name',
        tab: 'basic_info/0',
        row: 2,
        flex: 6,
      },
    },
    {
      name: 'category',
      accessor: 'product_category_id',
      component: FormTypeField.select,
      defaultValue: null,
      options: {
        required: true,
        association_class: 'category',
        association_value: 'id',
        association_text: 'name',
        tab: 'basic_info/0',
        row: 3,
        flex: 6,
      },
    },
    {
      name: 'brand',
      accessor: 'brand_id',
      component: FormTypeField.select,
      defaultValue: null,
      options: {
        required: true,
        association_class: 'brand',
        association_value: 'id',
        association_text: 'name',
        tab: 'basic_info/0',
        row: 4,
        flex: 6,
      },
    },
    {
      name: 'vendor',
      accessor: 'vendor_id',
      component: FormTypeField.select,
      defaultValue: null,
      options: {
        required: true,
        association_class: 'vendor',
        association_value: 'id',
        association_text: 'name',
        tab: 'basic_info/0',
        row: 5,
        flex: 6,
      },
    },
    {
      name: 'barcode',
      accessor: 'barcode',
      component: FormTypeField.textField,
      defaultValue: '',
      options: {
        required: true,
        tab: 'basic_info/0',
        row: 6,
        flex: 6,
      },
    },
    {
      name: 'cannabis_product',
      accessor: 'marijuana',
      component: FormTypeField.checkbox,
      defaultValue: false,
      options: {
        required: true,
        tab: 'basic_info/0',
        row: 0,
        flex: 2,
      },
    },
    {
      name: 'requires_weighing',
      accessor: 'requires_weighing',
      component: FormTypeField.checkbox,
      defaultValue: false,
      options: {
        required: true,
        tab: 'basic_info/0',
        row: 0,
        flex: 2,
      },
    },
    {
      name: 'require_inventory',
      accessor: 'require_inventory',
      component: FormTypeField.checkbox,
      defaultValue: false,
      options: {
        required: true,
        tab: 'basic_info/0',
        row: 0,
        flex: 2,
      },
    },
    {
      name: 'usable_weight',
      accessor: 'usable_weight',
      component: FormTypeField.textField,
      defaultValue: '',
      options: {
        required: true,
        tab: 'basic_info/0',
        row: 1,
        flex: 3,
      },
    },
    {
      name: 'unit',
      accessor: 'unit',
      component: FormTypeField.select,
      defaultValue: '',
      options: {
        required: true,
        tab: 'basic_info/0',
        row: 1,
        flex: 3,
      },
    },
    {
      name: null,
      accessor: null,
      component: FormTypeField.empty,
      defaultValue: null,
      options: {
        required: true,
        tab: 'packaging_details/3',
      },
    },
    {
      name: 'picture',
      accessor: 'image_thumb_url',
      component: FormTypeField.image,
      defaultValue: null,
      options: {
        required: true,
        tab: 'picture/4',
      },
    },
  ];
}
</script>

