<template>
  <v-flex v-if="visibleValue">
    <label>
      {{ field.name }}
      <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span>
    </label>
    <v-select
      solo
      :items="options"
      v-model="value"
      :item-value="'value'"
      :item-text="'text'"
      :name="field.key"
      :disabled="disableValue"
      :placeholder="placeholder"
      v-validate="rules"
      :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
      @change="changeModel(value)"
      v-bind="bindData"
    >
      <template slot="selection" slot-scope="{ item, index }">
        <span
          v-if="index === 0"
        >{{ item['text'] ? item['text'] : item }}</span>
        <span
          v-if="index === 1 && value"
          class="grey--text ml-2 caption"
        >(+{{ value.length - 1 }} others)</span>
      </template>
    </v-select>
  </v-flex>
</template>