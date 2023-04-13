<template>
  <div>
    <HeaderComponent />
    <KeyVisual />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import KeyVisual from '@/components/KeyVisual.vue';

export default {
  components: {
    HeaderComponent,
    KeyVisual,
  },
  mounted() {
    this.detectHeight();
    window.addEventListener('resize', this.detectHeight);
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
