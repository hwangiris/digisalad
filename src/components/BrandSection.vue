<template>
  <section>
    <div class="container">
      <HeaderTitle align="center" theme="primary">OUR BRAND EXPERIENCE</HeaderTitle>
      <p>
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <div class="brand-group">
        <div v-for="item in brands" :key="`BRAND EXPERIENCE-${item}`" class="brand-item">
          <img :src="item.image" :alt="`digisalad client - ${item.name}`" :title="item.name">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import HeaderTitle from '@/components/HeaderTitle.vue';

export default {
  data() {
    return {
      brands: [
        {
          name: 'pccw',
          image: 'https://tw.digisalad.cool/uploads/clients/pccw.png',
        },
        {
          name: 'viu',
          image: 'https://tw.digisalad.cool/uploads/clients/viu.png',
        },
        {
          name: 'nowtv',
          image: 'https://tw.digisalad.cool/uploads/clients/now.png',
        },
        {
          name: 'DFS',
          image: 'https://tw.digisalad.cool/uploads/clients/b7d5912c44ca006ee9fde0a7a269f62b.png',
        },
        {
          name: 'Oxfam',
          image: 'https://tw.digisalad.cool/uploads/clients/c49801cd273d4b6deff59a7860c34c19.png',
        },
        {
          name: 'NeoDerm',
          image: 'https://tw.digisalad.cool/uploads/clients/bbb433eb23f6ef2fb804daf8a98e01c8.png',
        },
        {
          name: 'Ricoh',
          image: 'https://tw.digisalad.cool/uploads/clients/c9fa16d4372a65320b51b2ff5e95b5f3.png',
        },
        {
          name: 'Ford',
          image: 'https://tw.digisalad.cool/uploads/clients/ford.png',
        },
        {
          name: 'McDonald',
          image: 'https://tw.digisalad.cool/uploads/clients/mcdonald.png',
        },
        {
          name: 'Hysan Development',
          image: 'https://tw.digisalad.cool/uploads/clients/6e62b616b779d467bc2b77979496f236.png',
        },
        {
          name: 'Lee Gardens',
          image: 'https://tw.digisalad.cool/uploads/clients/96ffe95199b993a0e7202cd5a27d35bb.png',
        },
        {
          name: 'Great Eagle Group of Companies',
          image: 'https://tw.digisalad.cool/uploads/clients/1f965b73233322f4f841902f41ad56ca.png',
        },
        {
          name: 'Champion REIT',
          image: 'https://tw.digisalad.cool/uploads/clients/bfc22984548d09d53f1fa1982ac8b9ab.png',
        },
        {
          name: 'Langham Place',
          image: 'https://tw.digisalad.cool/uploads/clients/60fe5bfd92514d64426ef7280b4de63b.png',
        },
        {
          name: 'tvN',
          image: 'https://tw.digisalad.cool/uploads/clients/tvn.png',
        },
        {
          name: '3HK',
          image: 'https://tw.digisalad.cool/uploads/clients/3HK.png',
        },
        {
          name: 'Panasonic',
          image: 'https://tw.digisalad.cool/uploads/clients/Panasonic.png',
        },
        {
          name: 'KDK',
          image: '/images/KDK.png',
        },
        {
          name: 'Loreal',
          image: 'https://tw.digisalad.cool/uploads/clients/loreal.png',
        },
        {
          name: 'Dairy Farm',
          image: 'https://tw.digisalad.cool/uploads/clients/dairyfarm.png',
        },
        {
          name: 'ThreeSixty',
          image: 'https://tw.digisalad.cool/uploads/clients/d74e2e4d430056fa70595bddfe8eafc5.png',
        },
        {
          name: 'ORIX',
          image: 'https://tw.digisalad.cool/uploads/clients/ORIX.png',
        },
        {
          name: 'CNCBI',
          image: 'https://tw.digisalad.cool/uploads/clients/CNCBI.png',
        },
        {
          name: 'AIA',
          image: '/images/AIA.png',
        },
        {
          name: 'AEON',
          image: 'https://tw.digisalad.cool/uploads/clients/AEON.png',
        },
        {
          name: 'AB Global',
          image: 'https://tw.digisalad.cool/uploads/clients/AB_Global.png',
        },
        {
          name: 'Konew',
          image: 'https://tw.digisalad.cool/uploads/clients/d5f2ac39cfc8237fd9cc100d8c0c4472.png',
        },
        {
          name: '兆豐銀行',
          image: '/images/mega-bank.png',
        },
        {
          name: 'MorriSofa',
          image: 'https://tw.digisalad.cool/uploads/clients/49f44a501a04b9b475b6cc83b3a8df8b.png',
        },
        {
          name: 'Ofmom',
          image: 'https://tw.digisalad.cool/uploads/clients/ccebea6ef35e89f2869ef1ca0be99638.png',
        },
        {
          name: 'Wynn Macau',
          image: 'https://tw.digisalad.cool/uploads/clients/7dc5c4b61aa4d0a5607c8488ac588e3d.png',
        },
        {
          name: 'Banyan Tree Group',
          image: 'https://tw.digisalad.cool/uploads/clients/140ba89f560bbc615906fed289d588eb.png',
        },
        {
          name: 'KITCO',
          image: 'https://tw.digisalad.cool/uploads/clients/850faf6cbf58bc64c54dbef51ffec603.png',
        },
        {
          name: 'Cafe De Carol',
          image: 'https://tw.digisalad.cool/uploads/clients/1e9de11422c222e05073136eacd2dd4f.png',
        },
        {
          name: 'Timberland',
          image: 'https://tw.digisalad.cool/uploads/clients/b09b98d482fd1a4095222e6858bb44b0.png',
        },
        {
          name: 'China Mobile International',
          image: 'https://tw.digisalad.cool/uploads/clients/e076eb07bad5c0104004587f2c8a7b06.png',
        },
        {
          name: 'Tai Kwan 大館',
          image: 'https://tw.digisalad.cool/uploads/clients/06706eebaf543387a32f8c4c41c94287.png',
        },
        {
          name: 'Wilson Group 威信集團',
          image: 'https://tw.digisalad.cool/uploads/clients/bdc5d3fa291157d14279d802e923ade2.png',
        },
        {
          name: 'Hong Kong Tourism Board 香港旅遊發展局',
          image: 'https://tw.digisalad.cool/uploads/clients/4785b37b3637a9dceb720c9655eb27cd.png',
        },
        {
          name: 'CEM 澳門電力股份有限公司',
          image: 'https://tw.digisalad.cool/uploads/clients/c909a5cd472fb7b62ea8e30cb27c3a96.png',
        },
        {
          name: 'Hong Kong City University 香港城市大學',
          image: 'https://tw.digisalad.cool/uploads/clients/f37a5ee491cc715d4ae57b726d7ed3d7.png',
        },
        {
          name: 'Aromatherapy Associates',
          image: '/images/aromatherapy-associates.png',
        },
        {
          name: 'Chow Tai Fook',
          image: 'https://tw.digisalad.cool/uploads/clients/c02722bb932ad8391d4e54f00e7f4dbe.png',
        },
        {
          name: 'Invesco',
          image: 'https://tw.digisalad.cool/uploads/clients/3697021921c8fd10b0a19eb14af03d92.png',
        },
        {
          name: 'Savills',
          image: 'https://tw.digisalad.cool/uploads/clients/ae1c3c26b1fc9eefd82b79a133583831.png',
        },
        {
          name: 'Apita',
          image: 'https://tw.digisalad.cool/uploads/clients/3f646e199e9b024c209a3003340b0c12.png',
        },
        {
          name: 'Uny',
          image: 'https://tw.digisalad.cool/uploads/clients/1c6054855c0c75f3620587ac9afeae32.png',
        },
        {
          name: 'Tigerair',
          image: 'https://tw.digisalad.cool/uploads/clients/370778c43964cc27f8efde3b7b147078.png',
        },
        {
          name: 'KPMG',
          image: 'https://tw.digisalad.cool/uploads/clients/85b869e5e7f35e8c25cc33bc17ee3f0f.png',
        },
      ],
    };
  },
  components: {
    HeaderTitle,
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/import';
  section {
    padding-top: 90px;
    padding-bottom: 60px;
    background-color: $white;
  }
  .container {
    max-width: 1040px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    @include media-breakpoint-up(sm) {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
  }
  p {
    max-width: 1010px;
    margin-top: 60px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: .0625em;
    line-height: 1.75;
    text-align: center;
  }
  .brand-group {
    display: flex;
    flex-wrap: wrap;
    > .brand-item {
      width: (100% / 3);
      padding: 0 5px 20px;
      @include media-breakpoint-up(sm) {
        padding: 0 10px 30px;
      }
      @include media-breakpoint-up(md) {
        width: (100% / 5);
      }
      @include media-breakpoint-up(lg) {
        width: (100% / 7);
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
