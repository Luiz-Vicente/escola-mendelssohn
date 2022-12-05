<template>
  <section class="d-flex flex-column" :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'">
    <h5 class="text-white pt-5">Galeria</h5>
    <div class="pb-5">
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
  background: rgb(0, 79, 86);
  background: linear-gradient(
    0deg,
    rgba(0, 79, 86, 1) 0%,
    rgba(0, 0, 86, 1) 100%
  );
}
</style>
