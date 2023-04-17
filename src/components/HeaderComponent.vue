<template>
  <header :class="{'is-sticky': isSticky}">
    <div class="container">
      <LogoComponent :style="logoTheme" />
      <StartButton />
      <HamBurger :class="{'dark': isSticky}" />
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
    };
  },
  props: ['emit-sticky'],
  components: {
    LogoComponent,
    StartButton,
    HamBurger,
  },
  watch: {
    emitSticky() {
      this.isSticky = this.emitSticky;
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
    }
    &.is-sticky {
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
  }
  .hamburger {
    margin-left: 44px;
    margin-right: 10px;
  }
</style>
