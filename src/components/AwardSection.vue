<template>
  <section>
    <div class="container-fluid">
      <div class="col-text">
        <HeaderTitle align="left" theme="primary">AWARDS</HeaderTitle>
        <p>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
        </p>
      </div>
      <div class="col-card-group">
        <picture>
          <source type="image/avif" srcset="/images/award.avif"/>
          <source type="image/webp" srcset="/images/award.webp"/>
          <img
            src="/images/award.jpg"
            alt="Asia Smart App Award 2018/2019"
            loading="lazy"
          />
        </picture>
        <picture>
          <source type="image/avif" srcset="/images/award.avif"/>
          <source type="image/webp" srcset="/images/award.webp"/>
          <img
            src="/images/award.jpg"
            alt="Asia Smart App Award 2018/2019"
            loading="lazy"
          />
        </picture>
        <picture>
          <source type="image/avif" srcset="/images/award.avif"/>
          <source type="image/webp" srcset="/images/award.webp"/>
          <img
            src="/images/award.jpg"
            alt="Asia Smart App Award 2018/2019"
            loading="lazy"
          />
        </picture>
        <picture>
          <source type="image/avif" srcset="/images/award.avif"/>
          <source type="image/webp" srcset="/images/award.webp"/>
          <img
            src="/images/award.jpg"
            alt="Asia Smart App Award 2018/2019"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import HeaderTitle from '@/components/HeaderTitle.vue';

export default {
  components: {
    HeaderTitle,
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';
  section {
    position: relative;
    padding-left: calc((100vw - 1240px) / 2);
    &::before {
      @include beforeafter;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: $primary;
      border-top-left-radius: 50px;
      z-index: -1;
    }
  }
  .container-fluid {
    display: flex;
    align-items: center;
    padding: 65px calc(((100vw - 1240px) / 2) + 70px) 65px 70px;
    background-color: $white;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  p {
    margin-top: 30px;
    margin-bottom: 20px;
    color: #262626;
    letter-spacing: .0625em;
    line-height: 1.75;
  }
  .col-text {
    width: 416px;
  }
  .col-card-group {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
    padding-left: 40px;
    width: calc(100% - 416px);
    img {
      width: 285px;
    }
  }
</style>
