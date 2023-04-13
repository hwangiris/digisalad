<template>
  <section>
    <div class="video-mask">
      <div ref="kvVideo" class="ratio ratio-16by9">
        <iframe src="https://www.youtube.com/embed/8_4JRK4QkqU?vq=hd1080&autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&color=white&controls=0&disablekb=1&playlist=8_4JRK4QkqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    <div class="container">
      <LogoComponent :style="logoTheme" width="200" height="88" />
      <div class="display">
        <span>
          We create
        </span>
        <span>
          amazing
        </span>
        <span>
          digital experiences
        </span>
      </div>
    </div>
    <div class="scroll-notification">
      <button type="button">
        <DishAnime />
        <h6>TASTE US NOW!</h6>
      </button>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import LogoComponent from '@/components/LogoComponent.vue';
import DishAnime from '@/components/DishAnime.vue';

export default {
  data() {
    return {
      logoTheme: 'light',
    };
  },
  components: {
    LogoComponent,
    DishAnime,
  },
  mounted() {
    this.checkZoom();
    window.addEventListener('resize', this.checkZoom);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkZoom);
  },
  methods: {
    checkZoom() {
      const kv = this.$refs.kvVideo;
      const windows = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      const video = {
        width: kv.clientWidth,
        height: kv.clientHeight,
      };
      const multiple = [
        windows.width / video.width,
        windows.height / video.height,
      ];
      const max = Math.max(...multiple);
      kv.style.transform = `translate(-50%, -50%) scale(${max})`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/import';

section {
  position: relative;
  height: var(--app-height);
  padding-top: 180px;
  background-color: $black;
}
.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--app-height);
  overflow: hidden;
}
.ratio {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  &::after {
    @include beforeafter;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: .3;
  }
}
.container {
  position: relative;
  z-index: 1;
}
.display {
  margin-top: 34px;
  color: $white;
  font-size: $display;
  font-weight: $font-weight-bold;
  line-height: 1.85;
  text-transform: uppercase;
  letter-spacing: .2412em;
  span {
    display: table;
    padding-left: .2412em;
    &:last-child {
      position: relative;
      z-index: 1;
      &::before,
      &::after {
        position: absolute;
        @include beforeafter;
      }
      &::before {
        bottom: .5em;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: $primary;
        z-index: -1;
      }
      &::after {
        bottom: calc(.5em + 3px);
        left: calc(100% + 10px);
        width: 10px;
        height: 10px;
        background-color: $surface;
        border-radius: 10px;
      }
    }
  }
}
.scroll-notification {
  position: absolute;
  bottom: 75px;
  left: 50%;
  color: $white;
  transform: translateX(-50%);
  &::before, &::after {
    @include beforeafter;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 1px;
    transform: translateX(-50%);
  }
  &::before {
    height: 130px;
    margin-top: 30px;
    background-color: #808080;
  }
  &::after {
    height: 45px;
    margin-top: 30px;
    background-color: $white;
  }
  button {
    padding: 0;
    color: currentColor;
    background-color: transparent;
    border: 0;
  }
  h6 {
    margin-top: 10px;
    margin-bottom: 0;
  }
}
</style>
