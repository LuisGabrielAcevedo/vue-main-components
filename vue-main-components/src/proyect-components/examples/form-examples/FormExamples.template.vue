<template>
  <div>
    <!-- Strain form -->
    <h1 class="my-4 ml-2">Strain form</h1>
    <tabs-code-component :template="formHtmlUser" :ts="formTs" :metadata="fieldsConfigStrain">
      <div slot="example-data" style="width: 100%;">
        <h2 class="text-xs-center my-4">Form</h2>
        <DynamicFormComponent :ref="'dynamic-form-user-strain'" :fieldsConfig="fieldsConfigStrain"/>
        <v-layout row align-center justify-center>
          <v-btn @click="strainSubmit()">Submit</v-btn>
          <!-- <v-btn @click="resetValidations()">Reset validations</v-btn> -->
        </v-layout>
        <code-component v-if="respStrain" :data="respStrain" :type="'json'"></code-component>
      </div>
    </tabs-code-component>
    <!-- User profile form -->
    <h1 class="my-4 ml-2">User profile form</h1>
    <tabs-code-component :template="formHtmlUser" :ts="formTs">
      <div slot="example-data" style="width: 100%;">
        <h2 class="text-xs-center my-4">Form</h2>
        <DynamicFormComponent :ref="'dynamic-form-user-profile1'" :fieldsConfig="fieldsConfigUserProfile1"/>
        <DynamicFormComponent :ref="'dynamic-form-user-profile2'" :columns="4" :fieldsConfig="fieldsConfigUserProfile2"/>
        <v-layout row align-center justify-center>
          <v-btn @click="userProfileSubmit()">Submit</v-btn>
          <!-- <v-btn @click="resetValidations()">Reset validations</v-btn> -->
        </v-layout>
        <code-component v-if="respUserProfile" :data="respUserProfile" :type="'json'"></code-component>
      </div>
    </tabs-code-component>
    <!-- Product form -->
    <h1 class="my-4 ml-2">Product form</h1>
    <tabs-code-component :template="formHtmlUser" :ts="formTs" :metadata="fieldsConfigProduct">
      <div slot="example-data" style="width: 100%;">
        <h2 class="text-xs-center my-4">Form</h2>
        <DynamicFormComponent :ref="'dynamic-form-product'" :fieldsConfig="fieldsConfigProduct" :model="productModel"/>
        <v-layout row align-center justify-center>
          <v-btn @click="productSubmit()">Submit</v-btn>
          <!-- <v-btn @click="resetValidations()">Reset validations</v-btn> -->
        </v-layout>
        <code-component v-if="respProduct" :data="respProduct" :type="'json'"></code-component>
      </div>
    </tabs-code-component>
    <!-- User form -->
    <h1 class="my-4 ml-2">User form</h1>
    <tabs-code-component :template="formHtmlUser" :ts="formTs" :metadata="fieldsConfigUser">
      <div slot="example-data" style="width: 100%;">
        <h2 class="text-xs-center my-4">Form</h2>
        <DynamicFormComponent :ref="'dynamic-form-user'" :fieldsConfig="fieldsConfigUser"/>
        <v-layout row align-center justify-center>
          <v-btn @click="userSubmit()">Submit</v-btn>
          <!-- <v-btn @click="resetValidations()">Reset validations</v-btn> -->
        </v-layout>
        <code-component v-if="respUser" :data="respUser" :type="'json'"></code-component>
      </div>
    </tabs-code-component>
  </div>
</template>