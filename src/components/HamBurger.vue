<template>
  <div class="hamburger">
    <input
      type="checkbox"
      id="hamburger"
      :class="`${theme}`"
      v-model="toggle"
      @change="toggleHamburger"
    />
    <label for="hamburger"><i></i></label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  props: ['theme'],
  methods: {
    toggleHamburger() {
      this.$emitter.emit('emit-update-hamburger', this.toggle);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  #hamburger {
    @include hamburger();
    @at-root .dark:not(.opened) & {
      + label {
        --ham-color: #{$purple};
      }
    }
  }
</style>
