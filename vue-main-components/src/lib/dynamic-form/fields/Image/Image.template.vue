<template>
  <v-flex class="dynamic-form">
    <v-layout column align-center justify-center>
      <label>{{ field.name }} <span v-show="rules.includes('required')" class="dynamic-form-required ml-1">*</span></label>
      <div class="dynamic-form__image-container">
        <div class="square-border square-border__left-top"></div>
        <div class="square-border square-border__right-top"></div>
        <div class="square-border square-border__right-bottom"></div>
        <div class="square-border square-border__left-bottom"></div>
        <div
          class="dynamic-form__content"
          v-bind:class="{ active: isDragging }"
          @dragover="onDragOver($event)"
          @dragleave="onDragLeave($event)"
          @drop="onDrop($event)"
          :style="{'background-image': `url(${fileSelected || value})`}"
        >
          <!-- Select -->
          <div v-if="mode === imageModel.select">
            <div class="dynamic-form__close">
              <v-icon @click="resetImage()" class="dynamic-form__close__icon" v-if="fileSelected || value">close</v-icon>
            </div>
            <div class="no-image" v-if="!fileSelected && !value">
              <v-icon class="mt-4" size="120" color="#d8d8d8">{{icon}}</v-icon>
              <span>{{"Drag and drop"}}</span>
            </div>
          </div>
          <!-- Camera -->
          <video v-show="mode === imageModel.camera" ref="video" class="dynamic-form__content__video" autoplay></video>
          <canvas ref="canvas" class="dynamic-form__content__canvas" width="640" height="480"></canvas>
        </div>
      </div>
      <input style="display: none;" ref="fileInput" type="file" @change="fileChangeEvent($event)">
      <v-layout row align-center justify-center class="mt-2">
        <v-icon size="28" @click="$refs.fileInput.click(); closeCamera();" class="take">photo</v-icon>
        <v-icon
          size="28"
          v-if="mode === imageModel.select"
          class="take"
          @click="launchCamera()"
        >photo_camera</v-icon>
        <v-icon size="28" v-if="mode === imageModel.camera" class="take" @click="capture()">camera</v-icon>
      </v-layout>
      <!-- Buttons -->
    </v-layout>
  </v-flex>
</template>
<style lang="stylus" scoped>
.dynamic-form
    &__image-container
        position relative
        width 200px
        height 190px
    &__content
        margin-bottom 10px
        text-align center
        border 2px solid #d8d8d8
        display flex
        flex-direction column
        position relative
        overflow hidden
        flex-grow 0
        background-size cover
        background-position center
        height 100%
        &__video 
            width 196px
            height 186px
            transform scale(1.8)
        &__canvas 
            display none
    &__close 
        position absolute
        z-index 1
        right -1px
        background rgba(0, 0, 0, 0.2)
        &__icon 
            color white

.active
    border-color #1976d2 !important

.square-border
    content ""
    display block
    position absolute
    width 46.4px
    height 46.4px
    border-color #d8d8d8 !important
    &__left-top
        top -11px
        left -15px
        border-top solid 3px
        border-left solid 3px
    &__right-top 
        top -11px
        right -15px
        border-top solid 3px
        border-right solid 3px
    &__right-bottom 
        bottom -11px
        right -15px
        border-bottom solid 3px
        border-right solid 3px
    &__left-bottom
        bottom -11px
        left -15px
        border-bottom solid 3px
        border-left solid 3px

.no-image 
  display flex
  flex-direction column


.no-image span 
  font-size 12px
  padding 12px 0
  color grey


.take 
  cursor pointer
  margin 5px

</style>




