<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon @click="drawerToggle()"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Engeni vue componets</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawerStatus" absolute temporary>
      <v-expansion-panel v-for="(route, i) in routes" :key="i">
        <v-expansion-panel-content v-if="route.children">
          <v-layout row slot="header" :class="{'active': itemStyle(route.path)}">
            <span>{{route.name}}</span>
          </v-layout>
          <v-layout v-for="(subRoute, j) in route.children" :key="j" row class="sub-item-content" :class="{'active': subItemStyle(subRoute.path)}" @click="goTo(subRoute.path)">
            <span>{{subRoute.name}}</span>
          </v-layout>
        </v-expansion-panel-content>
        <v-layout row v-else class="item-content" :class="{'active': itemStyle(route.path)}" @click="goTo(route.path)">
          <span>{{route.name}}</span>
        </v-layout>
      </v-expansion-panel>
    </v-navigation-drawer>
  </div>
</template>
<style lang="stylus" scoped>
.item-content 
    padding 12px 24px
    cursor pointer

.sub-item-content 
    padding 12px 36px
    cursor pointer
.active
    color #1867c0
    font-weight 600

</style>

