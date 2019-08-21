<template>
  <div>
    <div>
      <h1 class="my-4 ml-2">Grid form</h1>
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
    <div>
      <h1 class="my-4 ml-2">Grid form by columns</h1>
      <p class="my-4 ml-2">The columns property organizes the form into columns. This receives the number of columns in which you want to organize the form. If you use this property it is not necessary to defend the row and flex options in fieldsConfig.</p>
      <tabs-code-component :template="formHtml2" :ts="formTs" :metadata="fieldsByColumns">
        <div slot="example-data" style="width: 100%;">
          <h2 class="text-xs-center my-4">Form</h2>
          <DynamicFormComponent :columns="4" :ref="'model-form-columns'" :fieldsConfig="fieldsByColumns"/>
          <v-layout row align-center justify-center>
            <v-btn @click="submit2()">Submit</v-btn>
            <v-btn @click="resetValidations()">Reset validations</v-btn>
          </v-layout>
          <code-component v-if="resp2" :data="resp2" :type="'json'"></code-component>
        </div>
      </tabs-code-component>
    </div>
  </div>
</template>