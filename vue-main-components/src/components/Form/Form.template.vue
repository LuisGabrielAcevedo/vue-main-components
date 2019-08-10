<template>
  <div>
    <v-form ref="form">
      <div v-if="aspectsFormatted.length === 1">
        <basic-form-component :aspects="aspectsFormatted" :model="model" @update-model="updateModel"></basic-form-component>
      </div>
      <div v-if="aspectsFormatted.length > 1">
        <div v-if="formType === 'tabs'">
          <tabs-form-component :aspects="aspectsFormatted" :model="model" @update-model="updateModel"></tabs-form-component>
        </div>
        <div v-if="formType === 'steppers'">
          <steppers-form-component :aspects="aspectsFormatted" :model="model" @update-model="updateModel"></steppers-form-component>
        </div>
      </div>
      <v-layout row align-center justify-center>
        <v-btn @click="submit()">Save</v-btn>
      </v-layout>
    </v-form>
  </div>
</template>
