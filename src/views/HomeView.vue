<template>
  <div>
    <HeaderComponent :emit-sticky="isSticky" :emit-ham="isOpenHam" />
    <DrawerMenu v-show="isOpenHam" />
    <KeyVisual :emit-sticky="isSticky" />
    <AboutSection ref="aboutSection" />
    <AwardSection />
    <IngredientSection />
    <BeliefSection />
    <BrandSection />
    <ProjectSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import DrawerMenu from '@/components/DrawerMenu.vue';
import KeyVisual from '@/components/KeyVisual.vue';
import AboutSection from '@/components/AboutSection.vue';
import AwardSection from '@/components/AwardSection.vue';
import IngredientSection from '@/components/IngredientSection.vue';
import BeliefSection from '@/components/BeliefSection.vue';
import BrandSection from '@/components/BrandSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';

export default {
  data() {
    return {
      isSticky: false,
      isOpenHam: false,
    };
  },
  components: {
    HeaderComponent,
    DrawerMenu,
    KeyVisual,
    AboutSection,
    AwardSection,
    IngredientSection,
    BeliefSection,
    BrandSection,
    ProjectSection,
  },
  mounted() {
    this.detectHeight();
    window.addEventListener('resize', this.detectHeight);
    this.$emitter.on('emit-update-sticky', (boolean) => {
      this.isSticky = boolean;
    });
    this.$emitter.on('emit-update-hamburger', (boolean) => {
      this.isOpenHam = boolean;
      document.body.classList = boolean ? 'opened' : '';
    });
    this.$emitter.on('emit-scroll-about', () => {
      window.scroll({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    });
  },
  unmounted() {
    window.removeEventListener('resize', this.detectHeight);
  },
  methods: {
    detectHeight() {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    },
  },
};
</script>
