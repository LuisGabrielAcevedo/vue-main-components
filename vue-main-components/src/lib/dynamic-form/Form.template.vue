<template>
  <div style="width:100%;">
    <v-form :ref="`form_${id}`">
      <div v-if="fieldsFormatted">
        <!-- Simple form -->
        <div v-if="fieldsFormatted.length === 1">
          <div v-for="(tab, i) in fieldsFormatted" :key="i">
            <v-layout row>
              <!-- Tabs lateral left -->
              <v-flex v-if="tab.leftFieldGroup.length" class="xs12 md3 px-2"  style="width: 20%">
                <v-layout column>
                  <v-flex v-for="(field , j) in tab.leftFieldGroup" :key="j">
                    <component
                      :id="id"
                      :is="field.dynamicComponent || field.component"
                      :field="field"
                      :model="formModel"
                      :currentModel="currentModel"
                      :appearance="appearance"
                      @update-model="updateModel"
                    ></component>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex :class="`xs12 md${formGrid(0)}`">
                <div v-for="(row , j) in tab.fields" :key="j">
                  <row-component
                    :id="id"
                    :fieldsConfig="row"
                    :model="formModel"
                    :currentModel="currentModel"
                    :appearance="appearance"
                    @update-model="updateModel"
                  ></row-component>
                </div>
              </v-flex>
              <!-- Tabs lateral right -->
              <v-flex v-if="tab.rightFieldGroup.length" class="xs12 md3 px-2" style="width: 20%">
                <v-layout column>
                  <v-flex v-for="(field , z) in tab.rightFieldGroup" :key="z">
                    <component
                      :id="id"
                      :is="field.dynamicComponent || field.component"
                      :field="field"
                      :model="formModel"
                      :currentModel="currentModel"
                      :appearance="appearance"
                      @update-model="updateModel"
                    ></component>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </div>
        </div>
        <div v-if="fieldsFormatted.length > 1">
          <div v-if="formType === 'tabs'">
            <!-- Tabs -->
            <v-tabs v-model="active" ripple hide-slider>
              <v-tab v-for="(tab, i) in fieldsFormatted" :key="i">{{tab.name}}</v-tab>
              <v-tab-item v-for="(tab, i) in fieldsFormatted" :key="i" class="mb-4 pt-4">
                <v-layout row wrap>
                  <!-- Tabs lateral left -->
                  <v-flex v-if="tab.leftFieldGroup.length" class="xs12 md3 px-2"  style="width: 20%">
                    <v-layout column>
                      <v-flex v-for="(field , j) in tab.leftFieldGroup" :key="j">
                        <component
                          :id="id"
                          :is="field.dynamicComponent || field.component"
                          :field="field"
                          :model="formModel"
                          :currentModel="currentModel"
                          :appearance="appearance"
                          @update-model="updateModel"
                        ></component>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex :class="`xs12 md${formGrid(tab)}`">
                    <div v-for="(row , k) in tab.fields" :key="k">
                      <row-component
                        :id="id"
                        :fieldsConfig="row"
                        :model="formModel"
                        :currentModel="currentModel"
                        :appearance="appearance"
                        @update-model="updateModel"
                      ></row-component>
                    </div>
                  </v-flex>
                  <!-- Tabs lateral right -->
                  <v-flex v-if="tab.rightFieldGroup.length" class="xs12 md3 px-2" style="width: 20%">
                    <v-layout column>
                      <v-flex v-for="(field , z) in tab.rightFieldGroup" :key="z">
                        <component
                          :id="id"
                          :is="field.dynamicComponent || field.component"
                          :field="field"
                          :model="formModel"
                          :currentModel="currentModel"
                          :appearance="appearance"
                          @update-model="updateModel"
                        ></component>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-tab-item>
            </v-tabs>
          </div>
          <!-- <div v-if="formType === 'steppers'">steppers</div> -->
        </div>
      </div>
    </v-form>
  </div>
</template>
<style lang="stylus" scoped>
>>> .dynamic-form-required 
        color #ff5252
        font-size 15px
>>> label 
        font-size 15px
</style>

