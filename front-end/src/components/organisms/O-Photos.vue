<template>
  <section
    class="d-flex flex-column py-5"
    :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'"
  >
    <!-- <h4 class="text-white pt-5">Galeria</h4>
    <p class="fw-lighter fs-6 text-white">de fotos e eventos</p> -->
    <div class="d-flex pb-5 flex-lg-row flex-column">
      <div
        class="col col-lg-6 d-flex flex-column justify-content-center p-4"
      >
        <h3 class="text-white">Eventos</h3>
        <p class="text-white mb-4 m-0 fw-lighter fs-7">o ano todo</p>

        <p class="text-white m-0 fs-5">
          Excepteur voluptate id et nostrud voluptate occaecat enim nisi.
          Cupidatat mollit sint anim cupidatat aliqua pariatur laboris cillum
          pariatur reprehenderit id aute ad ad.
        </p>
      </div>
      <div class="col col-lg-6">
        <CCarousel controls>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-1.jpg"
              alt="slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-2.jpg"
              alt="slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-3.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-4.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-5.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-6.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-7.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-8.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-9.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-10.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-11.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <img
              class="d-block mx-auto rounded"
              style="height: 500px"
              src="/img/gallery/img-12.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import { CCarousel, CCarouselItem } from "@coreui/vue";

export default {
  components: {
    CCarousel,
    CCarouselItem,
  },
};
</script>

<style lang="scss" scoped>
section {
  background: rgba(0, 0, 86, 1);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 86, 1) 0%,
    rgba(0, 79, 86, 1) 100%
  );
}
</style>
