<template>
  <div>
    <v-layout row v-if="rowTitle" class="row-title mb-4">
      <v-flex pa-2 xs12><h4>{{rowTitle}}</h4></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex 
        :class="`xs12 md${field.options.flex} px-2`" 
        row 
        v-for="(field , k) in fieldsConfig" :key="k">
            <component
            :id="id"
            :is="field.dynamicComponent || field.component"
            :field="field"
            :model="model"
            :currentModel="currentModel"
            :appearance="appearance"
            @update-model="updateModel"
            ></component>
      </v-flex>
    </v-layout>
  </div>
</template>
<style lang="stylus" scoped>
.row-title
    border-bottom 2px solid rgba(0, 0, 0, 0.12)

</style>

