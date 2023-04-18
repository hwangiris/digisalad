<template>
  <section>
    <div class="container">
      <HeaderTitle align="center" theme="dark">OUR INGREDIENTS</HeaderTitle>
      <p>
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <LinkButton theme="dark" link="/">VIEW MORE</LinkButton>
      <div class="ingredient-group">
        <div v-for="(item, index) in lists" :key="`ingredient-${index}`" class="ingredient-item">
          <img :src="`/images/ingredient/${item.file}`" :alt="item.title">
          <h3>
            {{ item.title }}
          </h3>
          <p>
            {{ item.intro }}
          </p>
          <ButtonOutlined>
            VIEW MORE
          </ButtonOutlined>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import HeaderTitle from '@/components/HeaderTitle.vue';
import ButtonOutlined from '@/components/ButtonOutlined.vue';
import LinkButton from '@/components/LinkButton.vue';

export default {
  data() {
    return {
      lists: [
        {
          file: 'icon-01.svg',
          title: 'ux design',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-02.svg',
          title: 'ui design',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-03.svg',
          title: 'website\ndevelopment',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-04.svg',
          title: 'mobile app\ndevelopment',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-05.svg',
          title: 'ecommerce',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-06.svg',
          title: 'customer loyalty',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-07.svg',
          title: 'digital\ntransformation',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-08.svg',
          title: 'digital\nmarketing',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          file: 'icon-09.svg',
          title: 'branding',
          intro: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
        },
      ],
    };
  },
  components: {
    HeaderTitle,
    ButtonOutlined,
    LinkButton,
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';
  section {
    padding-top: 105px;
    padding-bottom: 135px;
    background-color: $primary;
  }
  .container {
    max-width: 1175px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    @include media-breakpoint-up(sm) {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
  }
  p {
    max-width: 1010px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    color: $white;
    letter-spacing: .0625em;
    line-height: 1.75;
    text-align: center;
  }
  .ingredient-group {
    display: grid;
    gap: 60px 50px;
    padding-top: 85px;
    @include media-breakpoint-up(sm) {
      grid-template-columns: repeat(3, 1fr);
    }
    .ingredient-item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      padding-left: 100px;
      @include media-breakpoint-up(sm) {
        flex-direction: column;
        padding-left: 0;
      }
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      @include media-breakpoint-down(sm) {
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
      }
      @include media-breakpoint-up(sm) {
        width: 108px;
      }
    }
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0;
      margin-bottom: 15px;
      color: $white;
      line-height: 1.5;
      text-transform: uppercase;
      @include media-breakpoint-up(sm) {
        height: 3em;
        margin-top: 20px;
        text-align: center;
        white-space: break-spaces;
      }
    }
    p {
      margin-top: 0;
      margin-bottom: 30px;
      letter-spacing: 0.0625em;
      @include media-breakpoint-down(sm) {
        line-height: 1.75;
        text-align: left;
      }
    }
    button {
      margin-top: auto;
      @include media-breakpoint-down(sm) {
        margin-left: 0;
      }
    }
  }
</style>
