<template>
  <v-layout column align-center justify-center class="mt-4">
    <label>{{field.name}}</label>
    <div v-for="(limit, i) in limits" :key="i" class="mb-4">
      <v-layout row align-center justify-space-between>
        <span>
          {{ name(limit.rule_config.rule_name) }}
          <span>({{ limit.rule_config.unit }})</span>
        </span>
        <span>{{ limit.used }} / {{ limit.rule_config.amount }}</span>
      </v-layout>
      <div class="progress-bar-container">
        <div class="progress-bar-inside" :style="{'width':`${value(limit.used, limit.rule_config.amount)}%`}"></div>
      </div>
    </div>
  </v-layout>
</template>
<style lang="stylus" scoped>
.progress-bar-container
    width 200px
    height 18px
    border solid 2px #0099ff
    background-color #81cdff
    position relative
    overflow hidden
    padding 2px

.progress-bar-inside
    height 10px
    position absolute
    background-color #caeaff

</style>
