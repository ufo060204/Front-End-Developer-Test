<template>
  <div class="container px-lg-48">
    <div class="d-flex align-items-center">
      <div class="swiper-button-prev me-lg-48">
        <img src="../assets/images/highlight-swiper-l-arrow.png" alt="swiper-navigation">
      </div>
      <swiper
        :grabCursor="true"
        :centeredSlides="true"
        :spaceBetween="22"
        :slideToClickedSlide="true"
        :pagination="{
          el: '.swiper-pagination',
          type: 'fraction',
        }"
        :navigation="{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
        }"
        class="highlightSwiper"
      >
        <swiper-slide>
          <div class="d-lg-flex align-items-center justify-content-between">
            <img class="rounded-5 me-65 position-lg-relative img-fluid" src="../assets/images/highlight-img.png" alt="swiper 圖片">
            <a class="btn btn-primary rounded-0 py-60 ps-33 pe-129 position-lg-absolute bottom-88npx start-311px swiper-link" href="#">
              <p class="text-white swiper-link-title position-relative">VIEW PROJECT</p>
            </a>
            <div>
              <p class="mb-20 fw-bold">HIGHLIGHTED SHOWCASE</p>
              <h2 class="mb-40 fw-bold"><span class="swiper-card-title">LP CLUB MOBILE APP</span></h2>
              <p>
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-lg-flex align-items-center justify-content-between">
            <img class="rounded-5 me-65 position-lg-relative img-fluid" src="../assets/images/highlight-img.png" alt="swiper 圖片">
            <a class="btn btn-primary rounded-0 py-60 ps-33 pe-129 position-lg-absolute bottom-88npx start-311px swiper-link" href="#">
              <p class="text-white swiper-link-title position-relative">VIEW PROJECT</p>
            </a>
            <div>
              <p class="mb-20 fw-bold">HIGHLIGHTED SHOWCASE</p>
              <h2 class="mb-40 fw-bold"><span class="swiper-card-title">LP CLUB MOBILE APP</span></h2>
              <p>
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-lg-flex align-items-center justify-content-between">
            <img class="rounded-5 me-65 position-lg-relative img-fluid" src="../assets/images/highlight-img.png" alt="swiper 圖片">
            <a class="btn btn-primary rounded-0 py-60 ps-33 pe-129 position-lg-absolute bottom-88npx start-311px swiper-link" href="#">
              <p class="text-white swiper-link-title position-relative">VIEW PROJECT</p>
            </a>
            <div>
              <p class="mb-20 fw-bold">HIGHLIGHTED SHOWCASE</p>
              <h2 class="mb-40 fw-bold"><span class="swiper-card-title">LP CLUB MOBILE APP</span></h2>
              <p>
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-lg-flex align-items-center justify-content-between">
            <img class="rounded-5 me-65 position-lg-relative img-fluid" src="../assets/images/highlight-img.png" alt="swiper 圖片">
            <a class="btn btn-primary rounded-0 py-60 ps-33 pe-129 position-lg-absolute bottom-88npx start-311px swiper-link" href="#">
              <p class="text-white swiper-link-title position-relative">VIEW PROJECT</p>
            </a>
            <div>
              <p class="mb-20 fw-bold">HIGHLIGHTED SHOWCASE</p>
              <h2 class="mb-40 fw-bold"><span class="swiper-card-title">LP CLUB MOBILE APP</span></h2>
              <p>
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next ms-lg-48 position-relative">
        <div class="swiper-pagination"></div>
        <img src="../assets/images/highlight-swiper-r-arrow.png" alt="swiper-navigation">
      </div>
      
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../assets/components/HighlightSwiper.scss'

export default {
  components: {
    Swiper, SwiperSlide
  },
  setup () {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
</style>