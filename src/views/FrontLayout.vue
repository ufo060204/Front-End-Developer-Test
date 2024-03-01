<template>
  <header :class="{'bg-white': isScrolled || isCollapseShow}" class="fixed-top transition">
    <div class="container">
      <nav :class="{'justify-content-between':isScrolled, 'justify-content-end': !isScrolled}" class="h-100px d-flex  align-items-center">
        <img :class="{'d-block': isScrolled ,'d-none': !isScrolled }" src="../assets/images/logo-scroll.png" alt="logo">
        <div>
          <a href="#" class="btn pt-13 pb-12 ps-11 pe-9 lts-114 lh-17px custom-nav-btn rounded-pill fs-14 me-44">START YOUR PROJECT</a>
          <a @click.prevent="sideMenuToggle()" :class="{'d-inline': !isScrolled ,'d-none': isScrolled }" href="#">
            <img src="../assets/images/menu-icon.png" alt="menu 選單按鈕">
          </a>
          <a @click.prevent="sideMenuToggle()" :class="{'d-inline': isScrolled ,'d-none': !isScrolled }" href="#">
            <img src="../assets/images/menu-icon-slide.png" alt="menu 選單按鈕">
          </a>
        </div>
      </nav>
    </div>
  </header>
  <div :class="{'side-menu-open':isSideMenuShow}" class="side-menu">
    <div :class="{'d-block': isSideMenuShow, 'd-none':!isSideMenuShow}">
      <a class="position-absolute top-41px start-60px" href="#"><img src="../assets/images/logo.png" alt="網站 logo"></a>
      <div :class="{'sideMenu-close':isSideMenuShow}" class="position-absolute sideMenu-close">
        <div @click="sideMenuToggle()" class="menu-btn position-relative">
          <img class="position-absolute top-0 left-0" src="../assets/images/menu-button-1.png" alt="menu-button">
          <img src="../assets/images/menu-button-2.png" alt="menu-button">
        </div>
      </div>
      <div class="container-fluid">
        <div :class="{'row': isSideMenuShow, 'd-none':!isSideMenuShow}" class="justify-content-center pt-92">
          <div class="mw-lg-380px pt-lg-60 me-lg-42">
            <a style="background-image: url('../../src/assets/images/side-menu-bg-1.png');" class="d-inline-block w-100 py-lg-74 ps-lg-37 pe-lg-67 rounded-5 bg-size-cover mb-lg-40 p-16" href="#">
              <div class="d-flex">
                <img class="img-fluid me-27" src="../assets/images/side-menu-icon-1.png" alt="side-menu 圖示">
                <div>
                  <p class="mb-9 text-white lts-18">EMPOWERING BRANDS</p>
                  <h2 class="text-white fw-bold lts-18">ABOUT US</h2>
                </div>
              </div>
            </a>
            <a style="background-image: url('../../src/assets/images/side-menu-bg-2.png');" class="d-inline-block w-100 pt-lg-194 pb-lg-74 ps-lg-37 pe-lg-67 p-16 rounded-5 bg-size-cover" href="#">
              <div class="d-flex">
                <img class="img-fluid me-27" src="../assets/images/side-menu-icon-2.png" alt="side-menu 圖示">
                <div>
                  <p class="mb-9 text-white lts-18">CASE STUDIES</p>
                  <h2 class="text-white fw-bold lts-18">WORKS</h2>
                </div>
              </div>
            </a>
          </div>
          <div class="mw-lg-380px me-lg-42">
            <a style="background-image: url('../../src/assets/images/side-menu-bg-3.png');" class="d-inline-block w-100 pt-lg-240 pb-lg-74 ps-lg-37 pe-lg-67 p-16 rounded-5 bg-size-cover mb-lg-40" href="#">
              <div class="d-flex">
                <img class="img-fluid me-27" src="../assets/images/side-menu-icon-3.png" alt="side-menu 圖示">
                <div>
                  <p class="mb-9 text-white lts-18">EMPBE COOL WITH US</p>
                  <h2 class="text-white fw-bold lts-18">CAREERS</h2>
                </div>
              </div>
            </a>
            <a style="background-image: url('../../src/assets/images/side-menu-bg-4.png');" class="d-inline-block w-100 py-lg-74 ps-lg-37 pe-lg-67 p-16 rounded-5 bg-size-cover" href="#">
              <div class="d-flex">
                <img class="img-fluid me-27" src="../assets/images/side-menu-icon-4.png" alt="side-menu 圖示">
                <div>
                  <p class="mb-9 text-white lts-18">OUR STRATEGIES</p>
                  <h2 class="text-white fw-bold lts-18">INSIGHTS</h2>
                </div>
              </div>
            </a>
          </div>
          <div class="mw-lg-380px pt-lg-60">
            <a style="background-image: url('../../src/assets/images/side-menu-bg-5.png');" class="d-inline-block w-100 pt-lg-123 pb-lg-74 ps-lg-37 pe-lg-67 rounded-5 bg-size-cover mb-lg-40" href="#">
              <div class="d-flex">
                <img class="img-fluid me-27" src="../assets/images/side-menu-icon-5.png" alt="side-menu 圖示">
                <div>
                  <p class="mb-9 text-white lts-18">AREAS OF EXPERTISE</p>
                  <h2 class="text-white fw-bold lts-18">SERVICES</h2>
                </div>
              </div>
            </a>
            <a class="d-inline-block bg-white w-100 py-lg-74 ps-lg-37 pe-lg-67 rounded-5 bg-size-cover" href="#">
              <div class="ms-65 ms=lg-0">
                <p class="img-fluid mb-9 text-deep lts-18">START YOUR JOURNEY WITH US</p>
                <h2 class="text-primary fw-bold lts-18">CONTACT</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />

  <footer>
  </footer>
</template>
<script>
import { RouterView } from 'vue-router'

export default {
  data () {
    return {
      isSideMenuShow: false,
      isScrolled: false,
      isCollapseShow: false
    }
  },
  components: {
    RouterView
  },
  methods: {
    sideMenuToggle() {
      this.isSideMenuShow = this.isSideMenuShow ? false : true
      // console.log(this.isSideMenuShow)
    },
    handleScroll () {
      this.isScrolled = window.scrollY !== 0
    },
  },
  watch: {
    isScrolled (newValue) {
      if (newValue) {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .custom-nav-btn {
    background: linear-gradient(to left, #26D0A8, #4EE5EA);
  }
  .side-menu {
    height: 0;
    width: 0;
    position: fixed;
    background: linear-gradient(to bottom, #585880, #26C6D0);
    transition: all 0.5s ease;;
    z-index: 1050;
    top: 0;
    right: 0;
  }
  .side-menu-open {
    width: 100%;
    height: 100%;
  }
  .sideMenu-close {
    cursor:pointer;
    animation:fadeDown .5s forwards;
    animation-delay:1.1s;
    top: 48px;
    right: 64px;
    opacity:0;
    transform:translateY(-20px);
  }
  @keyframes fadeDown{
    0%{
      opacity:0;
      transform:translateY(-20px);
    }
    100%{
      opacity:1;
      transform:translateY(0);
    }
  }
  .transition {
    transition: all 0.5s ease;
  }
</style>