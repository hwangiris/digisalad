<template>
  <section>
    <div class="video-mask">
      <div ref="kvVideo" class="ratio ratio-16by9">
        <iframe src="https://www.youtube.com/embed/8_4JRK4QkqU?vq=hd1080&autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&color=white&controls=0&disablekb=1&playlist=8_4JRK4QkqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <picture>
        <source type="image/avif" srcset="/images/kv/key-video.avif"/>
        <source type="image/webp" srcset="/images/kv/key-video.webp"/>
        <img
          src="/images/kv/key-video.jpg"
          alt="香港空拍景"
          loading="lazy"
        />
      </picture>
    </div>
    <div class="container">
      <div class="logo" ref="kvLogo" :class="{'opacity-0': isSticky}">
        <LogoComponent :style="logoTheme" width="200" height="90" />
      </div>
      <div class="subtitle h5">DIGITAL AGENCY</div>
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
      <button type="button" @click="$emitter.emit('emit-scroll-about');">
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
      isSticky: null,
      logoTheme: 'light',
      scroll: {
        offsetTop: null,
        offsetLeft: null,
        container: null,
        margin: null,
        leftSpace: null,
        window: null,
      },
    };
  },
  props: ['emit-sticky'],
  components: {
    LogoComponent,
    DishAnime,
  },
  mounted() {
    this.checkZoom();
    window.addEventListener('resize', this.checkZoom);
    window.addEventListener('scroll', this.handleScroll);
    this.scroll.offsetTop = this.$refs.kvLogo.offsetTop - 25;
    this.scroll.offsetLeft = this.$refs.kvLogo.offsetLeft;
    this.scroll.window = window.innerWidth;
    this.scroll.container = document.querySelector('.container').offsetWidth;
    this.scroll.margin = (this.scroll.window - this.scroll.container) / 2;
    this.scroll.leftSpace = (this.scroll.offsetLeft - this.scroll.margin);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkZoom);
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scroll = window.scrollY;
      const percent = (scroll / this.scroll.offsetTop);
      const basic = ((120 / 200));
      if (percent < 1 && percent > 0) {
        this.isSticky = false;
        document.querySelector('.logo').style.transform = `
          translateX(-${this.scroll.leftSpace * percent}px)
          scale(${1 - ((1 - basic) * percent)})
        `;
      } else if (percent === 0) {
        document.querySelector('.logo').style.transform = 'translateX(0) scale(1)';
      } else if (percent >= 1) {
        this.isSticky = true;
        document.querySelector('.logo').style.transform = `
          translateX(-${this.scroll.leftSpace}px)
          scale(${basic})
        `;
      }
    },
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
  watch: {
    isSticky() {
      this.$emitter.emit('emit-update-sticky', this.isSticky);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/import';

section {
  position: relative;
  height: var(--app-height);
}
.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--app-height);
  overflow: hidden;
  z-index: -1;
  &::before, &::after {
    @include beforeafter;
  }
  &::before {
    width: 100%;
    height: 100%;
    background-color: $black;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: .3;
  }
  @media (pointer:none), (pointer:coarse) {
    iframe {
      display: none;
    }
  }
}
picture, img {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (pointer:none), (pointer:coarse) {
    display: block;
  }
}
.ratio {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
}
.container {
  height: 100%;
  padding-top: 70px;
  @media screen and (min-width: 360px) {
    padding-top: 100px;
  }
  @include media-breakpoint-up(sm) {
    padding-top: 180px;
  }
  @include media-breakpoint-up(xl) {
    padding-left: 170px;
    padding-right: 170px;
  }
}
.logo {
  position: sticky;
  top: 25px;
  transform-origin: top left;
  transition: all 0.1s;
  &.opacity-0 {
    opacity: 0;
  }
}
.display {
  margin-top: 20px;
  color: $white;
  font-size: $display * .7;
  font-weight: $font-weight-bold;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: .2412em;
  @include media-breakpoint-up(xs) {
    font-size: $display * .9;
    line-height: 1.85;
  }
  @include media-breakpoint-up(sm) {
    margin-top: 34px;
    font-size: $display;
  }
  span {
    display: table;
    padding-left: .2412em;
    &:last-child {
      position: relative;
      display: inline;
      background: linear-gradient(180deg, rgba($white, 0) 60%, $primary 60%, $primary 85%, rgba($white, 0) 85%);
      z-index: 1;
      @include media-breakpoint-up(sm) {
        background: linear-gradient(180deg, rgba($white, 0) 68%, $primary 68%, $primary 87%, rgba($white, 0) 87%);
      }
      &::after {
        position: absolute;
        @include beforeafter;
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
.subtitle {
  position: absolute;
  top: 250px;
  left: calc((100% - 1340px) / 2);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  color: $white;
  font-weight: $font-weight-bold;
  letter-spacing: 0.13875em;
  white-space: nowrap;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  &::before {
    @include beforeafter;
    width: 2px;
    height: 115px;
    background-color: currentColor;
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
