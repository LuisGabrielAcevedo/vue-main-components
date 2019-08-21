<template>
  <v-flex v-if="visibleValue">
    <label>{{ field.name }} <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span></label>
    <v-menu
      :close-on-content-click="false"
      :nudge-right="40"
      v-model="menuStatus"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="dateFormatted"
        append-icon="event"
        :name="field.key"
        readonly
        :disabled="disableValue"
        :placeholder="placeholder"
        v-validate="rules"
        :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
        clearable
        @input="resetDate()"
        solo
        v-bind="bindData"
      ></v-text-field>
      <v-date-picker
        v-model="value"
        no-title
        @change="changeDate()"
      ></v-date-picker>
    </v-menu>
  </v-flex>
</template>