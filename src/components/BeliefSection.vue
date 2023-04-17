<template>
  <section>
    <div class="container-fluid">
      <picture>
        <source type="image/avif" srcset="/images/hong-kong.avif"/>
        <source type="image/webp" srcset="/images/hong-kong.webp"/>
        <img
          src="/images/hong-kong.jpg"
          alt="Aerial panoramic view of Hong Kong Island and Kowloon"
          loading="lazy"
        />
      </picture>
      <div class="col-avatar">
        <picture>
          <source type="image/avif" srcset="/images/tonyng.avif"/>
          <source type="image/webp" srcset="/images/tonyng.webp"/>
          <img
            src="/images/tonyng.jpg"
            alt="TONY NG - DIGISALAD創辦人＆創意總監"
            loading="lazy"
          />
        </picture>
        <h3>Tony Ng</h3>
        <em>Founder & Creative Director</em>
      </div>
      <div class="col-quote">
        A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the <strong>right experience to the right person at the right time</strong>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/sass/import';
  section {
    position: relative;
    padding-right: calc((100vw - 1340px) / 2);
    &::before, &::after {
      @include beforeafter;
      position: absolute;
      width: 100%;
    }
    &::before {
      top: 0;
      left: 0;
      height: 50%;
      background-color: $primary;
      border-bottom-right-radius: 50px;
      z-index: -1;
    }
    &::after {
      bottom: 0;
      left: 0;
      height: 100%;
      background-color: $white;
      z-index: -2;
    }
  }
  .container-fluid {
    position: relative;
    display: flex;
    align-items: center;
    // padding: 85px 100px 125px ;
    padding-top: 85px;
    padding-bottom: 125px;
    padding-left: calc(((100vw - 1340px) / 2) + 80px);
    color: $white;
    background-color: $white;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    overflow: hidden;
    &::before {
      @include beforeafter;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $purple;
      opacity: .8;
      z-index: 1;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
    }
  }
  [class*='col-'] {
    position: relative;
    z-index: 1;
    img {
      position: static;
      width: 205px;
      border-radius: 50%;
    }
  }
  .col-avatar {
    width: 250px;
    margin-right: 90px;
    text-align: center;
    h3 {
      margin-top: 40px;
      margin-bottom: 10px;
    }
  }
  .col-quote {
    width: 735px;
    font-size: 1.375rem;
    letter-spacing: 0.09090909091em;
    line-height: 2.1818181818;
    strong {
      color: $highlight;
    }
    &::before {
      @include beforeafter;
      width: 90px;
      height: 90px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
      background-image: url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71.1973 36.8799C71.016 34.9203 71.1547 29.5933 76.2578 22.1857C76.6438 21.6267 76.5738 20.8728 76.0944 20.3936C74.0139 18.313 72.7257 17.0001 71.8222 16.0814C70.6342 14.8701 70.0918 14.3181 69.298 13.5984C68.768 13.122 67.966 13.1137 67.4304 13.5807C58.5356 21.3206 48.6561 37.3138 50.0857 56.908C50.9234 68.4133 59.3156 76.7644 70.0397 76.7644C81.0451 76.7644 89.999 67.8119 89.999 56.8063C89.999 46.1894 81.666 37.4827 71.1973 36.8799ZM70.0397 73.9519C60.8303 73.9519 53.6192 66.6981 52.89 56.7048C52.89 56.7048 52.89 56.7048 52.89 56.7034C51.2818 34.6662 64.3816 20.3524 68.3395 16.5621C68.7254 16.9425 69.1662 17.3901 69.8158 18.052C70.5985 18.8485 71.6698 19.9389 73.2902 21.565C67.0953 31.1093 68.264 37.9098 68.7761 38.8849C69.0193 39.3477 69.5178 39.6595 70.0397 39.6595C79.4947 39.6595 87.1865 47.3512 87.1865 56.8063C87.1865 66.2601 79.4947 73.9519 70.0397 73.9519Z' fill='white'/%3E%3Cpath d='M21.2535 36.8798C21.0709 34.9256 21.2054 29.6027 26.3141 22.1856C26.6987 21.6266 26.6299 20.8727 26.1507 20.3935C24.0742 18.317 22.7875 17.0055 21.8852 16.0868C20.6933 14.8728 20.1493 14.3193 19.3557 13.5983C18.8255 13.1219 18.0235 13.115 17.488 13.5792C8.59321 21.3191 -1.28767 37.3097 0.139115 56.9079V56.9093C0.97963 68.4132 9.37312 76.7643 20.0972 76.7643C31.1028 76.7643 40.0566 67.8118 40.0566 56.8062C40.0566 46.188 31.7235 37.48 21.2535 36.8798ZM20.0972 73.9518C10.8893 73.9518 3.67401 66.698 2.94346 56.7033V56.7047C1.33949 34.662 14.4393 20.3508 18.397 16.562C18.7843 16.9424 19.2266 17.3928 19.8775 18.0561C20.6588 18.8526 21.7287 19.9416 23.3465 21.5649C17.1515 31.1106 18.3202 37.9097 18.8324 38.8834C19.0755 39.3462 19.5753 39.6594 20.0972 39.6594C29.5524 39.6594 37.2441 47.3511 37.2441 56.8062C37.2441 66.26 29.5524 73.9518 20.0972 73.9518Z' fill='white'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
</style>
