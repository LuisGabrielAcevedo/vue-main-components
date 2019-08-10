<template>
  <div>
    <v-tabs v-model="active">
      <v-tab v-for="(tab, i) in aspects" :key="i">{{tab.name}}</v-tab>
      <v-tab-item v-for="(tab, i) in aspects" :key="i">
        <v-layout row v-for="(row , j) in tab.aspects" :key="j"> 
          <v-flex pa-2 :class="`xs${aspect.options.flex}`" row v-for="(aspect , k) in row" :key="k">
            <component :is="aspect.component || aspect.dynamicComponent" :aspect="aspect" :model="model" @update-model="updateModel"></component>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs>
  </div>
</template>