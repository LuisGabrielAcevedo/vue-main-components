<template>
    <v-flex>
        <label>{{ aspect.name }}</label>
        <v-text-field
            solo
            v-model="value"
            @input="changeModel()"
        ></v-text-field>
    </v-flex>
</template>