<template>
  <div class="hamburger">
    <input type="checkbox" id="hamburger" />
    <label for="hamburger"><i></i></label>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  #hamburger {
    @include hamburger();
  }
</style>
