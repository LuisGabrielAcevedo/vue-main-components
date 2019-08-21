<template>
    <v-flex v-if="visibleValue">
        <v-switch
            :label="`${field.name}`"
            v-model="value"
            @change="preChangeModel()"
            type="checkbox"
            :name="field.key"
            :disabled="disableValue"
            :placeholder="placeholder"
            v-validate="rules"
            :error-messages="errors.has(field.key) ? [errors.first(field.key)] : null"
            v-bind="bindData"
        ></v-switch>
    </v-flex>
</template>