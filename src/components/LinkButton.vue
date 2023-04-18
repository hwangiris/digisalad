<template>
  <a :href="link" :class="`${returnClass}`">
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {
    return {
      returnClass: '',
    };
  },
  props: ['theme', 'size', 'link'],
  beforeMount() {
    if (!this.size) {
      this.returnClass = `${this.theme}`;
    } else {
      this.returnClass = `${this.theme} ${this.size}`;
    }
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';

  :root {
    --btn-background: #{$primary};
  }

  a {
    display: table;
    margin-left: auto;
    margin-right: auto;
    padding: 33px 24px;
    color: $white;
    font-weight: $font-weight-bold;
    letter-spacing: 0.13875em;
    background-color: var(--btn-background);
    &.large {
      @include media-breakpoint-up(lg) {
        padding: 60px 30px;
        &::after {
          width: 70px;
          margin-left: 2em;
        }
      }
    }
    &::after {
      @include beforeafter('', inline-block);
      width: 50px;
      height: 2px;
      margin-left: 1em;
      vertical-align: middle;
      background-color: $white;
      transform: translateY(-50%);
    }
    &.primary {
      --btn-background: #{$primary};
    }
    &.dark {
      --btn-background: #{$purple};
    }
  }
</style>
