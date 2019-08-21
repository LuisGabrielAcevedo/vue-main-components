<template>
  <v-flex>
    <v-flex v-if="visibleValue">
      <label>{{ field.name }} <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span></label>
      <v-text-field
        solo
        type="password"
        v-model="value"
        :ref="field.key"
        :name="field.key"
        :disabled="disableValue"
        :placeholder="placeholder"
        v-validate="rules"
        :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
        @input="changeModel(value)"
        v-bind="bindData"
      ></v-text-field>
    </v-flex>
  </v-flex>
</template>