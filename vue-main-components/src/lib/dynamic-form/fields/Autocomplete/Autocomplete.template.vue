<template>
  <v-flex v-if="visibleValue">
    <label>{{ field.name }} <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span></label>
    <v-autocomplete
      v-model="value"
      :items="options"
      :loading="loading"
      @input="changeModel(value)"
      clearable
      :item-value="field.options.associationValue"
      :item-text="field.options.associationText"
      @click:clear="clearSearchInput"
      :name="field.key"
      :disabled="disableValue"
      :placeholder="placeholder"
      v-bind="bindData"
      v-validate="rules"
      :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
      solo
    ></v-autocomplete>
  </v-flex>
</template>
