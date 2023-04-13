<template>
  <header>
    <div class="container">
      <LogoComponent :style="logoTheme" />
      <StartButton />
      <HamBurger />
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
    };
  },
  components: {
    LogoComponent,
    StartButton,
    HamBurger,
  },
};
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100px;
    padding-top: 25px;
    z-index: 10;
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
