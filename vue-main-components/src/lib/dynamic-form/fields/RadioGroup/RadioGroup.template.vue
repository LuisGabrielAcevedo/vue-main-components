<template>
  <v-flex v-if="visibleValue">
    <label>{{ field.name }} <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span></label>
    <v-radio-group v-model="value" v-bind="bindData">
      <v-radio v-for="(option, i) in options" :key="i" :label="option.text" :value="option.value"></v-radio>
    </v-radio-group>
  </v-flex>
</template>