<template>
  <section>
    <div class="container">
      <HeaderTitle align="center" theme="dark">OUR INGREDIENTS</HeaderTitle>
      <p>
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <LinkButton theme="dark" link="/">VIEW MORE</LinkButton>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import HeaderTitle from '@/components/HeaderTitle.vue';
import LinkButton from '@/components/LinkButton.vue';

export default {
  components: {
    HeaderTitle,
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
    max-width: 1240px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
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
</style>
