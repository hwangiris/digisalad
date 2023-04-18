<template>
  <h2 ref="title" :class="`${align} ${theme}`">
    <slot></slot>
    <span class="decoration">
      <span v-for="(item, index) in amount" :key="`裝飾線${index}`">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 13"><path d="m29.1,3.74c-.73.04-1.41.37-1.89.92,0,0,0,0-.01.01-1.63,1.85-2.58,2.81-4.57,2.81h0c-1.99,0-2.93-.96-4.59-2.83C16.31,2.68,13.92-.01,9.39-.01c-.2,0-.38.01-.57.02C5.74.17,3.7,1.59,2.17,3.09c-.52.51-.98,1.03-1.39,1.5-.02.02-.06.06-.08.08-1.02,1.13-.93,2.88.19,3.9.55.5,1.26.75,1.99.71.73-.04,1.4-.36,1.85-.87.03-.03.05-.06.08-.09,1.63-1.85,2.58-2.81,4.56-2.81,0,0,0,0,0,0s0,0,0,0c1.99,0,2.93.96,4.58,2.83,1.73,1.95,4.09,4.61,8.55,4.66.04,0,.08,0,.12,0,4.54,0,6.93-2.7,8.68-4.68.01-.02.03-.03.04-.04.95-1.13.85-2.84-.25-3.84-.55-.5-1.26-.75-2-.71Z"/></svg>
      </span>
    </span>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      amount: 1,
    };
  },
  props: ['align', 'theme'],
  mounted() {
    const width = this.$refs.title.clientWidth;
    const unit = 26.5;
    this.amount = Math.ceil(width / unit);
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';
  :root {
    --color: #{$primary};
  }

  h2 {
    position: relative;
    display: table;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 20px;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: .12925em/2;
    @include media-breakpoint-up(md) {
      padding-left: 24px;
      padding-right: 24px;
      letter-spacing: .12925em;
    }
    &::after {
      @include beforeafter('', inline-block);
      width: 10px;
      height: 10px;
      margin-left: 15px;
      border-radius: 50%;
      background-color: $surface;
    }
    span {
      &.decoration {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        width: 103%;
        margin-right: -3%;
      }
      &:not(.decoration) {
        display: block;
        width: 32px;
        height: 13px;
        margin-right: -5.5px;
      }
      svg {
        display: block;
        path {
          fill: var(--color);
        }
      }
    }
    &.center {
      margin-left: auto;
      margin-right: auto;
    }
    &.primary {
      span:not(.decoration),
      svg path {
        --color: #{$primary};
      }
    }
    &.dark {
      span:not(.decoration),
      svg path {
        --color: #{$purple};
      }
    }
  }
</style>
