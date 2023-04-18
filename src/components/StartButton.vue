<template>
  <button type="button">
    START YOUR PROJECT
  </button>
</template>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  $spacing: .0816em;
  $axisY: .89em;
  $axisX: 1.0615em;

  button {
    position: relative;
    padding: $axisY $axisX $axisY calc($axisX + $spacing);
    color: $white;
    font-size: $h6;
    font-weight: $font-weight-bold;
    letter-spacing: .0816em;
    white-space: nowrap;
    background-color: transparent;
    border-width: 0;
    border-radius: $axisY*2;
    overflow: hidden;
    &::before {
      @include beforeafter;
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 100%;
      background: linear-gradient(
        90deg,
        $turquoise 1.97%,
        $blueGreen 47.365%,
        $blueGreen 52.635%,
        $turquoise 98.03%
      );
      transition: left 0.3s;
      z-index: -1;
    }
    &:hover {
      &::before {
        left: -100%;
      }
    }
  }
</style>
