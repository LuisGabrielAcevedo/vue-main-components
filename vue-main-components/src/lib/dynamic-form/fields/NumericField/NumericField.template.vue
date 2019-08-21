<template>
    <v-flex v-if="visibleValue">
        <label>{{ field.name }} <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span></label>
        <v-text-field
            solo
            type="number"
            v-model="value"
            :name="field.key"
            :disabled="disableValue"
            :placeholder="placeholder"
            v-validate="rules"
            :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
            @input="preChangeModel()"
            v-bind="bindData"
        ></v-text-field>
    </v-flex>
</template>