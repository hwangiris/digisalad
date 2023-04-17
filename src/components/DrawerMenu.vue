<template>
  <nav>
    <div class="container">
      <ul>
        <li>
          <div class="vector">
          </div>
          <div class="text">
            <div class="h6">EMPOWERING BRANDS</div>
            <div class="h1"><b>ABOUT US</b></div>
          </div>
        </li>
        <li>
          <div class="vector">
          </div>
          <div class="text">
            <div class="h6">CASE STUDIES</div>
            <div class="h1"><b>WORKS</b></div>
          </div>
        </li>
        <li>
          <div class="vector">
          </div>
          <div class="text">
            <div class="h6">BE COOL WITH US</div>
            <div class="h1"><b>CAREERS</b></div>
          </div>
        </li>
        <li>
          <div class="vector">
          </div>
          <div class="text">
            <div class="h6">OUR STRATEGIES</div>
            <div class="h1"><b>INSIGHTS</b></div>
          </div>
        </li>
        <li>
          <div class="vector">
          </div>
          <div class="text">
            <div class="h6">AREAS OF EXPERTISE</div>
            <div class="h1"><b>SERVICES</b></div>
          </div>
        </li>
        <li>
          <div class="vector">
          </div>
          <div class="text">
            <div class="h6">START YOUR JOURNEY WITH US</div>
            <div class="h1"><b>CONTACT</b></div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

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
    background: linear-gradient(180deg, $purple 3.61%, $primary 95.7%);
    z-index: 9;
  }
  ul {
    @include list;
    display: grid;
    grid-template-columns: 380px 290px 380px;
    max-width: 1134px;
    margin-left: auto;
    margin-right: auto;
    gap: 40px 42px;
    li {
      position: relative;
      width: 100%;
      padding: 40px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 30px;
      overflow: hidden;
      &::before {
        @include beforeafter;
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
        height: 210px;
        background-color: $primary;
        order: 1;
      }
      &:nth-child(2) {
        height: 320px;
        background-color: $surface;
        order: 4;
      }
      &:nth-child(3) {
        height: 430px;
        background-color: $highlight;
        order: 2;
      }
      &:nth-child(4) {
        height: 280px;
        background-color: $blueGreen;
        order: 4;
      }
      &:nth-child(5) {
        height: 320px;
        background-color: $purple;
        order: 3;
      }
      &:nth-child(6) {
        height: 210px;
        background-color: $white;
        order: 6;
      }
    }
  }
  .h1 {
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
  }
</style>
