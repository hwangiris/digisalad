<template>
  <section>
    <swiper
    ref="projectSwiper"
    :slides-per-view="1"
    :loop="true"
    :navigation="{
      nextEl: '.swiper-next-project',
      prevEl: '.swiper-prev-project',
    }"
      :pagination="{
        type: 'fraction',
      }"
      :modules="[EffectFade]"
      effect="fade"
    >
      <swiper-slide v-for="(item, index) in projects" :key="`highlighted-showcase-${index}`">
        <div class="background" data-aos="fade-up" data-aos-delay="0">
          <picture>
            <source type="image/avif" :srcset="`/images/showcase/${item.file}.avif`"/>
            <source type="image/webp" :srcset="`/images/showcase/${item.file}.webp`"/>
            <img
              :src="`/images/showcase/${item.file}.jpg`"
              :alt="item.title"
              loading="lazy"
            />
          </picture>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-img" data-aos="fade-up" data-aos-delay="300">
              <picture>
                <source type="image/avif" :srcset="`/images/showcase/${item.file}.avif`"/>
                <source type="image/webp" :srcset="`/images/showcase/${item.file}.webp`"/>
                <img
                  :src="`/images/showcase/${item.file}.jpg`"
                  :alt="item.name"
                  loading="lazy"
                />
              </picture>
            </div>
            <div class="col-text" data-aos="fade-up" data-aos-delay="600">
              <h6>
                HIGHLIGHTED SHOWCASE
              </h6>
              <h3 class="title h1">
                {{ item.name }}
              </h3>
              <p>
                {{ item.intro }}
              </p>
            </div>
            <LinkButton
              theme="primary" size="large" :link="item.link"
              data-aos="fade-up" data-aos-delay="600"
            >VIEW PROJECT</LinkButton>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination">
        <div class="now">
          {{ now }}
        </div>
        <div class="total">
          {{ total }}
        </div>
      </div>
      <div class="swiper-arrow swiper-next swiper-next-project"></div>
      <div class="swiper-arrow swiper-prev swiper-prev-project"></div>
    </swiper>
  </section>
</template>

<script>
import LinkButton from '@/components/LinkButton.vue';

import SwiperCore, {
  Autoplay,
  Pagination,
  EffectFade,
  Navigation,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation, Thumbs]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    LinkButton,
  },
  data() {
    return {
      projects: [
        {
          file: 'langham-place',
          name: 'LP CLUB MOBILE APP',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          link: '/',
        },
        {
          file: 'cem-evapp-uxui',
          name: 'CEM EV Mobile App',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          link: '/',
        },
        {
          file: 'tigerair',
          name: 'tigerair website',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          link: '/',
        },
        {
          file: 'ycef-edu',
          name: 'ycef edu website',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
          link: '/',
        },
      ],
    };
  },
  setup() {
    return {
      EffectFade,
      Autoplay,
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';

  section {
    color: $white;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
    @include media-breakpoint-up(sm) {
      border-bottom-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
  }
  .container {
    padding-top: 100px;
    padding-bottom: 125px;
    @include media-breakpoint-up(sm) {
      padding-left: 100px;
      padding-right: 100px;
    }
    @include media-breakpoint-up(md) {
      padding-top: 170px;
      padding-bottom: 170px;
    }
    @include media-breakpoint-up(xl) {
      padding-left: 150px;
      padding-right: 150px;
    }
  }
  .row {
    position: relative;
    z-index: 1;
    @include media-breakpoint-up(sm) {
      display: grid;
      grid-template-columns: 54fr 50fr;
    }
  }
  .swiper-slide {
    position: relative;
    background-color: $white;
    transition: all 0.3s;
  }
  .swiper-arrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    color: $white;
    background-color: $primary;
    background-size: contain;
    border-radius: 50%;
    cursor: pointer;
    z-index: 3;
    @include media-breakpoint-down(sm) {
      bottom: 50px;
    }
    @include media-breakpoint-up(sm) {
      top: 50%;
      transform: translateY(-50%);
    }
    @include media-breakpoint-up(xl) {
      width: 55px;
      height: 55px;
    }

    &.swiper-prev {
      left: 20px;
      background-image: url("data:image/svg+xml,%3Csvg width='55' height='55' viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30.9157 39.9995C31.2704 40.0073 31.6187 39.9044 31.9123 39.7051C32.2058 39.5058 32.4299 39.2199 32.5535 38.8873C32.677 38.5547 32.6939 38.1919 32.6018 37.8493C32.5096 37.5067 32.313 37.2014 32.0392 36.9757L21.5941 28.0276L32.0392 19.0825C32.2286 18.9434 32.3872 18.7667 32.5051 18.5633C32.6229 18.36 32.6976 18.1345 32.7243 17.901C32.751 17.6675 32.7292 17.4311 32.6603 17.2064C32.5914 16.9817 32.4768 16.7736 32.3238 16.5953C32.1707 16.4169 31.9825 16.2723 31.7709 16.17C31.5593 16.0678 31.3289 16.0104 31.094 16.0013C30.8592 15.9922 30.625 16.0316 30.4062 16.1173C30.1873 16.2029 29.9885 16.3328 29.8222 16.4988L17.8635 26.7307C17.6757 26.8909 17.5249 27.0899 17.4215 27.314C17.3181 27.5382 17.2645 27.7822 17.2645 28.0291C17.2645 28.276 17.3181 28.52 17.4215 28.7442C17.5249 28.9684 17.6757 29.1675 17.8635 29.3278L29.8222 39.5695C30.1243 39.8378 30.5118 39.9904 30.9157 39.9999L30.9157 39.9995Z' fill='white'/%3E%3C/svg%3E");
      @include media-breakpoint-up(xl) {
        left: calc((100% - 1340px) / 2);
      }
    }
    &.swiper-next {
      right: 20px;
      background-image: url("data:image/svg+xml,%3Csvg width='55' height='55' viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.0843 39.9995C23.7296 40.0073 23.3813 39.9044 23.0877 39.7051C22.7942 39.5058 22.5701 39.2199 22.4465 38.8873C22.323 38.5547 22.3061 38.1919 22.3982 37.8493C22.4904 37.5067 22.687 37.2014 22.9608 36.9757L33.4059 28.0276L22.9608 19.0825C22.7714 18.9434 22.6128 18.7667 22.4949 18.5633C22.3771 18.36 22.3024 18.1345 22.2757 17.901C22.249 17.6675 22.2708 17.4311 22.3397 17.2064C22.4086 16.9817 22.5232 16.7736 22.6762 16.5953C22.8293 16.4169 23.0175 16.2723 23.2291 16.17C23.4407 16.0678 23.6711 16.0104 23.906 16.0013C24.1408 15.9922 24.375 16.0316 24.5938 16.1173C24.8127 16.2029 25.0115 16.3328 25.1778 16.4988L37.1365 26.7307C37.3243 26.8909 37.4751 27.0899 37.5785 27.314C37.6819 27.5382 37.7355 27.7822 37.7355 28.0291C37.7355 28.276 37.6819 28.52 37.5785 28.7442C37.4751 28.9684 37.3243 29.1675 37.1365 29.3278L25.1778 39.5695C24.8757 39.8378 24.4882 39.9904 24.0843 39.9999L24.0843 39.9995Z' fill='white'/%3E%3C/svg%3E%0A");
      @include media-breakpoint-up(xl) {
        right: calc((100% - 1340px) / 2);
      }
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    &::before {
      @include beforeafter;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($black, .75);
      backdrop-filter: blur(10px);
      z-index: 1;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: translate(-50%, -50%);
    }
  }
  [class*='col-'] {
    position: relative;
    z-index: 1;
  }
  .col-img {
    position: relative;
    margin-bottom: 50px;
    @include media-breakpoint-up(sm) {
      margin-bottom: 0;
    }
    img {
      display: block;
      width: 100%;
      border-radius: 30px;
    }
  }
  .col-text {
    @include media-breakpoint-up(sm) {
      padding-top: 25px;
      padding-left: 30px;
    }
    @include media-breakpoint-up(xl) {
      padding-top: 60px;
      padding-left: 65px;
    }
    h6 {
      margin-top: 0;
      margin-bottom: 20px;
      letter-spacing: 0.13875em;
    }
    .title {
      position: relative;
      display: inline;
      padding-left: 5px;
      padding-right: 10px;
      margin-top: 0;
      margin-bottom: 0;
      font-weight: $font-weight-bold;
      text-transform: uppercase;
      letter-spacing: 0.11375em;
      background: linear-gradient(180deg,rgba($white,0) 65%, $primary 65%, $primary 85%,rgba($white,0) 85%);
      z-index: 1;
      &::after {
        @include beforeafter;
        position: absolute;
        bottom: calc(.2em + 3px);
        left: calc(100% + 10px);
        width: 10px;
        height: 10px;
        background-color: $surface;
        border-radius: 10px;
      }
    }
    p {
      margin-top: 40px;
      margin-bottom: 0;
      line-height: 1.5;
      letter-spacing: .0625em;
      @include media-breakpoint-down(lg) {
        @include lineclamp(8);
      }
    }
  }

  a {
    margin-top: 30px;
    z-index: 1;
    @include media-breakpoint-up(md) {
      position: absolute;
      bottom: -45px;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0;
    }
    @include media-breakpoint-up(lg) {
      bottom: -88px;
    }
  }

  ::v-deep(.swiper-pagination-fraction) {
    position: absolute;
    top: 100px;
    right: calc((100% - 1340px) / 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 0;
    font-weight: 600;
    z-index: 2;
    &::before {
      @include beforeafter;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 45px;
      height: 1px;
      margin-left: -50%;
      background-color: $primary;
      transform: rotate(-45deg);
    }
    .swiper-pagination-current,
    .swiper-pagination-total {
      font-size: $h6;
      letter-spacing: 0.13875em;
      &::before {
        @include beforeafter('0', inline);
      }
    }
    .swiper-pagination-current {
      text-align: left;
    }
    .swiper-pagination-total {
      text-align: right;
    }
  }
</style>
