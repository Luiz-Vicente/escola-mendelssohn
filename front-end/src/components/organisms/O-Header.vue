<template>
  <header
    :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'"
    :class="{ 'flex-column': $screenSize.is.mobile }"
    class="w-100 d-flex pt-5"
  >
    <div class="col text-white pt-5">
      <p class="fw-lighter fs-5 m-0">Escola de música</p>
      <h3 class="mb-5">Mendelssohn</h3>
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-geo-alt-fill text-red-tertiary fs-7 me-3"></i>
        <a
          target="_blank"
          href="https://www.google.com/maps/dir/-25.450818,-49.185666/escola+mendelssohn/@-25.4468699,-49.1919678,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94dcef941ade8231:0xe92aef67c3f79ce7!2m2!1d-49.1881936!2d-25.442823"
          class="m-0 text-white text-decoration-none fs-4"
          >Av. Camilo di Lellis, 819 - Centro, Pinhais
          <i
            class="bi bi-box-arrow-up-right text-red-tertiary fs-3 fw-bold ms-2"
          ></i
        ></a>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-whatsapp text-red-tertiary fs-7 me-3"></i>
        <a
          target="_blank"
          href="https://wa.me/554195119829?text=Ol%C3%A1%2C+eu+gostaria+de+agendar+uma+aula+experimental"
          class="m-0 text-white text-decoration-none fs-4"
          >(41) 99511-9829
          <i
            class="bi bi-box-arrow-up-right text-red-tertiary fs-3 fw-bold ms-2"
          ></i
        ></a>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-telephone-fill text-red-tertiary fs-7 me-3"></i>
        <p class="m-0 fs-4">(41) 3653-3573</p>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-envelope-fill text-red-tertiary fs-7 me-3"></i>
        <a
          target="_blank"
          href="mailto:escolamendelssohn@hotmail.com"
          class="m-0 text-white fs-4"
          >escolamendelssohn@hotmail.com</a
        >
      </div>
    </div>
    <div class="col d-flex flex-column align-items-center pt-5">
      <ExpClass />
    </div>
  </header>
</template>

<script>
import ExpClass from "@/components/molecules/ExpClass.vue";

export default {
  components: {
    ExpClass,
  },
};
</script>

<style>
header {
  background-image: url("/img/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
