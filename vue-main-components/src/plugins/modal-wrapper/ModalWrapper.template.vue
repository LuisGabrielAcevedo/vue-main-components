<template>
  <div>
    <div
      class="engeni-modal__modal-backdrop"
      :class="[
      modClass('engeni-modal',options.size), 
      modClass('engeni-modal--y', options.positionY), 
      modClass('engeni-modal--x', options.positionX)
      ]"
    >
      <div class="colored-layer" @click="onReject($event)"></div>
      <div
        class="engeni-modal__modal-container elevation-6"
        :class="[modClass('engeni-modal__modal-container', options.size)]"
      >
        <v-icon class="engeni-modal__modal-close-button" @click="onReject($event)">fal fa-times</v-icon>
        <h1 class="engeni-modal__modal-container__title" v-if="options.title">{{ $t(options.title) }}</h1>
        <component
          :is="component"
          @resolve="onResolve($event)"
          @reject="onReject($event)"
          v-bind="mOptions"
        ></component>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.modal-container:last-child {
  .engeni-modal__modal-backdrop {
    .colored-layer {
      opacity: 1;
    }
  }
}

.engeni-modal {
  &__modal-backdrop {
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--full_width, &--fit {
    padding: 45px;
  }

  &--y--top {
    align-items: flex-start;
  }

  &--y--bottom {
    align-items: flex-end;
  }

  &--x--right {
    justify-content: flex-end;
  }

  &--x--left {
    justify-content: flex-start;
  }
}

.engeni-modal__modal-container {
  position: relative;
  background-color: white;
  padding: 10px 15px 10px;
  border-radius: 3px;

  &--fit {
    max-width: 100%;
    max-height: 100%;
  }

  &--full_width {
    width: 100%;
    height: 100%;
  }

  &--normal {
    width: 100%;
    height: auto;
    max-width: 768px;
    max-height: 580px;
  }

  &--small {
    max-width: 320px;
    max-height: 568px;
  }

  &__title {
    font-family: $title-font;
    font-size: 20px;
    text-align: left;
    color: brand-primary;
    margin-bottom: 10px;
  }
}

.engeni-modal__modal-close-button {
  display: flex;
  width: 20px;
  height: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.colored-layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
}
</style>