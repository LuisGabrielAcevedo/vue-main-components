<template>
    <v-flex v-if="visibleValue">
        <v-checkbox
            :label="`${field.name}`"
            v-model="value"
            type="checkbox"
            :name="field.key"
            :disabled="disableValue"
            :placeholder="placeholder"
            v-validate="rules"
            :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
            @change="preChangeModel()"
            v-bind="bindData"
        ></v-checkbox>
    </v-flex>
</template>