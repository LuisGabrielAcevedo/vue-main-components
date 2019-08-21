<template>
    <v-flex v-if="visibleValue">
        <label>{{ field.name }} <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span></label>
        <v-text-field
            type="text"
            v-model="value"
            :name="field.key"
            :disabled="disableValue"
            :placeholder="placeholder"
            v-validate="rules"
            :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
            @input="changeModel(value)"
            solo
            v-bind="bindData"
        ></v-text-field>
    </v-flex>
</template>