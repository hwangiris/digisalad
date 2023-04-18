<template>
  <nav>
    <div class="container">
      <ul>
        <li v-for="(item, index) in lists" :key="`漢堡選單-${index}`">
          <picture v-if="item.file">
            <source type="image/avif" :srcset="`/images/drawer/${item.file}.avif`"/>
            <source type="image/webp" :srcset="`/images/drawer/${item.file}.webp`"/>
            <img
              :src="`/images/drawer/${item.file}.jpg`"
              :alt="item.file"
              loading="lazy"
            />
          </picture>
          <div class="vector" v-if="item.file">
            <img :src="`/images/drawer/${item.file}.svg`" :alt="`${item.file} icon`">
          </div>
          <div class="text">
            <div class="h6">
              {{ item.subtitle }}
            </div>
            <div class="h1">
              <b>{{ item.title }}</b>
            </div>
          </div>
          <a :href="item.link" class="stretched-link"></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          link: '/',
          file: 'about',
          title: 'about us',
          subtitle: 'empowering brands',
        },
        {
          link: '/',
          file: 'works',
          title: 'works',
          subtitle: 'case studies',
        },
        {
          link: '/',
          file: 'careers',
          title: 'careers',
          subtitle: 'be cool with us',
        },
        {
          link: '/',
          file: 'insights',
          title: 'insights',
          subtitle: 'our strategies',
        },
        {
          link: '/',
          file: 'service',
          title: 'services',
          subtitle: 'areas of expertise',
        },
        {
          link: '/',
          file: '',
          title: 'contact',
          subtitle: 'start your journey with us',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 95px;
    padding-bottom: 95px;
    z-index: 9;
    &::before {
      @include beforeafter;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, $purple 3.61%, $primary 95.7%);
      opacity: .9;
      z-index: -1;
    }
  }
  ul {
    @include list;
    display: flex;
    flex-wrap: wrap;
    max-width: 1134px;
    margin-left: auto;
    margin-right: auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @include media-breakpoint-up(sm) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 60px 180px 40px 70px 40px 10px 40px 160px 122px;
      grid-column-gap: 20px;
      grid-row-gap: 0;
    }
    @include media-breakpoint-up(md) {
      grid-template-rows: 60px 210px 40px 70px 40px 10px 40px 160px 122px;
      grid-template-columns: 38fr 29fr 38fr;
    }
    @include media-breakpoint-up(lg) {
      grid-column-gap: 42px;
    }
    li {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-end;
      align-items: flex-end;
      width: 100%;
      padding: 40px 30px;
      margin-left: auto;
      margin-right: auto;
      text-transform: uppercase;
      border-radius: 20px;
      overflow: hidden;
      @include media-breakpoint-up(sm) {
        height: 100%;
        padding: 20px;
      }
      @include media-breakpoint-up(md) {
        padding: 40px 30px;
        border-radius: 30px;
      }
      &::before {
        // @include beforeafter;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        color: $white;
      }
      &:nth-child(1) {
        background-color: $primary;
        @include media-breakpoint-up(sm) {
          grid-area: 2 / 1 / 3 / 2;
          order: 1;
        }
      }
      &:nth-child(2) {
        background-color: $surface;
        @include media-breakpoint-up(sm) {
          grid-area: 4 / 1 / 9 / 2;
          order: 4;
        }
      }
      &:nth-child(3) {
        background-color: $highlight;
        @include media-breakpoint-up(sm) {
          grid-area: 1 / 2 / 7 / 3;
          order: 2;
        }
      }
      &:nth-child(4) {
        background-color: $blueGreen;
        @include media-breakpoint-up(sm) {
          grid-area: 8 / 2 / 10 / 3;
          order: 4;
        }
      }
      &:nth-child(5) {
        background-color: $purple;
        @include media-breakpoint-up(sm) {
          grid-area: 2 / 3 / 5 / 4;
          order: 3;
        }
      }
      &:nth-child(6) {
        background-color: $white;
        @include media-breakpoint-up(sm) {
          grid-area: 6 / 3 / 9 / 4;
          order: 6;
        }
      }
      > div {
        position: relative;
        z-index: 1;
      }
    }
  }
  .h1 {
    letter-spacing: 0.11375em;
    line-height: 1.25;
    &::after {
      @include beforeafter('', inline-block);
      width: 10px;
      height: 10px;
      margin-left: 10px;
      background-color: $surface;
      border-radius: 50%;
      @at-root li:nth-child(2) #{&} {
        background-color: $primary;
      }
    }
    @at-root li:nth-child(6) #{&} {
      color: $primary;
    }
  }
  .h6 {
    margin-bottom: 10px;
    letter-spacing: 0.1125em;
    line-height: 1.125;
  }
  .vector {
    width: 100%;
    @include media-breakpoint-up(md) {
      width: auto;
    }
    @at-root li:nth-child(1) #{&} {
      padding-left: 7px;
      padding-right: 28px;
    }
    @at-root li:nth-child(2) #{&} {
      padding-right: 18px;
    }
    @at-root li:nth-child(3) #{&} {
      margin-bottom: 28px;
    }
    @at-root {
      li:nth-child(4) #{&},
      li:nth-child(5) #{&} {
        width: 100%;
        margin-bottom: 15px;
      }
    }
  }
  picture {
    display: block;
    opacity: .08;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
