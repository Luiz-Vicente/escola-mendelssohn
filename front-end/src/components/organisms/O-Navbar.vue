<template>
  <nav
    v-if="this.$screenSize.is.mobile"
    class="w-100 px-3 py-2 d-flex flex-column align-items-center justify-content-center bg-blue-secondary"
  >
    <div class="w-100 d-flex align-items-center justify-content-between">
      <router-link to="/"
        ><img class="w-45px me-auto" src="/favicon.ico" alt=""
      /></router-link>
      <i
        type="button"
        @click="collapsed = !collapsed"
        :class="collapsed ? 'bi-list' : 'bi-x-lg'"
        class="bi text-white fs-9"
      ></i>
    </div>
    <div :class="{ 'd-none': collapsed }">
      <!-- <router-link
        class="p-3 w-100 text-center border-bottom nav-link text-white"
        to="/blog"
        >Blog</router-link
      >

      <a
        class="p-3 w-100 text-center border-bottom nav-link text-white"
        href="/#faq"
        >FAQ</a
      >
      <a
        class="p-3 w-100 text-center border-bottom nav-link text-white"
        href="/#recent-works"
        >Trabalhos recentes</a
      > -->
      <div class="w-100 mt-2 d-flex justify-content-between">
        <a
          target="_blank"
          v-wave
          href="https://wa.me/5541997475217?text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+sites"
          class="btn btn-sm btn-outline-red-tertiary rounded-pill"
          >Agendar aula experimental</a
        >
      </div>
    </div>
  </nav>
  <nav
    v-else
    style="padding: 8px 100px"
    class="w-100 d-flex align-items-center justify-content-end bg-blue-secondary"
  >
    <router-link class="me-auto" to="/"
      ><img class="w-175px me-auto" src="/img/mendelssohn.svg" alt=""
    /></router-link>
    <!-- <ul class="d-flex text-white py-3 m-0">
      <li>
        <router-link class="nav-link text-white px-3 me-3" to="/blog"
          >DEPOIMENTOS</router-link
        >
      </li>
      <li>
        <router-link class="nav-link text-white px-3" to="/blog"
          >FAQ</router-link
        >
      </li>
    </ul> -->
    <a
      target="_blank"
      v-wave
      href="https://wa.me/5541997475217?text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+sites"
      class="ms-4 btn btn-outline-red-tertiary rounded-pill"
      >Agendar aula experimental</a
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables/colors.scss";

nav {
  z-index: 2;
  position: sticky;
  top: 0px;
}
.nav-link:hover {
  font-weight: 500;
}
</style>
