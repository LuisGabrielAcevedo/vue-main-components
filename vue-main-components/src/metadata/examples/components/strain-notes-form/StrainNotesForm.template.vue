<template>
    <div>
        <h2>Add note</h2>
        <DynamicFormComponent :ref="'strain-note-form'" :fieldsConfig="fieldsConfig"/>
        <v-layout row align-center justify-center>
            <v-btn @click="submit()">Add</v-btn>
        </v-layout>
    </div>
</template>
