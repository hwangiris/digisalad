<template>
  <header
    :class="{
      'is-sticky': isSticky,
      'opened': isOpened,
    }"
  >
    <div class="container">
      <LogoComponent
        :style="logoTheme"
        :class="{
          'opened': isOpened,
        }"
      />
      <StartButton />
      <HamBurger
        :class="{
          'dark': isSticky,
          'opened': isOpened,
        }"
      />
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import LogoComponent from '@/components/LogoComponent.vue';
import StartButton from '@/components/StartButton.vue';
import HamBurger from '@/components/HamBurger.vue';

export default {
  data() {
    return {
      logoTheme: '',
      isSticky: this.emitSticky,
      isOpened: this.emitHam,
    };
  },
  props: ['emit-sticky', 'emit-ham'],
  components: {
    LogoComponent,
    StartButton,
    HamBurger,
  },
  watch: {
    emitSticky() {
      this.isSticky = this.emitSticky;
    },
    emitHam() {
      this.isOpened = this.emitHam;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100px;
    padding-top: 25px;
    z-index: 10;
    svg {
      opacity: 0;
      @include parent-append(".is-sticky",  1, false) {
        opacity: 1;
      }
      @include parent-append(".opened",  1, false) {
        opacity: 1;
      }
    }
    &.is-sticky:not(.opened) {
      background-color: rgba($white, 0.9);
      backdrop-filter: blur(10px);
    }
  }
  .container {
    display: flex;
    align-items: center;
  }
  button {
    margin-left: auto;
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
  .hamburger {
    margin-left: auto;
    @include media-breakpoint-up(md) {
      margin-left: 44px;
      margin-right: 10px;
    }
  }
</style>
