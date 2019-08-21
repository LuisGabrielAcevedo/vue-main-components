<template>
  <div class="tabs-code-container">
    <v-expansion-panel v-model="active">
      <v-expansion-panel-content class="tabs-code-container__expansion">
        <v-layout row slot="header" dark color="primary" align-center></v-layout>
        <v-layout class="tabs-code-container__content">
          <v-tabs style="width: 100%;">
            <v-tab v-for="(tab, i) in tabs" :key="i">{{tab.name}}</v-tab>
            <v-tab-item v-for="(tab, i) in tabs" :key="i">
                <highlight-code class="tabs-code-container__highlight-code" :lang="tab.code_type">
                    {{tab.data}}
                </highlight-code> 
            </v-tab-item>
          </v-tabs>
        </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-layout class="tabs-code-container__example">
      <slot name="example-data"></slot>
    </v-layout>
  </div>
</template>
<style lang="stylus" scoped>
.tabs-code-container
    border 2px solid rgba(0, 0, 0, 0.12)
    background-color #fff
    margin 10px
    &__expansion
        background-color #eeeeee !important
    &__content
        background-color #2d2d2d
    &__example
        padding 10px

>>> .v-expansion-panel
        box-shadow none
>>> .v-expansion-panel__header
        padding 0 20px !important
        height 50px

</style>

