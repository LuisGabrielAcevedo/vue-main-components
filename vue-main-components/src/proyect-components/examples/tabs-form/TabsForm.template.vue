<template>
  <div>
    <h1 class="text-xs-center my-4">Tabs form</h1>
    <tabs-code-component :template="formHtml" :ts="formTs" :metadata="fieldsConfig">
      <div slot="example-data" style="width: 100%;">
        <h2 class="text-xs-center my-4">Form</h2>
        <DynamicFormComponent :ref="'dynamic-form'" :fieldsConfig="fieldsConfig"/>
        <v-layout row align-center justify-center>
            <v-btn @click="submit()">Submit</v-btn>
            <v-btn @click="resetValidations()">Reset validations</v-btn>
        </v-layout>
        <code-component v-if="resp" :data="resp" :type="'json'"></code-component>
      </div>
    </tabs-code-component>
  </div>
</template>