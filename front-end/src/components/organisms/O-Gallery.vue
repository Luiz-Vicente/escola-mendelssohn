<template>
  <div
    class="d-flex flex-column bg-black w-100"
    :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'"
  >
    <h5 class="text-white pt-5">Galeria</h5>
    <div class="d-flex flex-wrap justify-content-between">
      <photo-provider>
        <photo-consumer
          style="height: 300px"
          class="m-3"
          v-for="src in imgList"
          :intro="src"
          :key="src"
          :src="src"
        >
          <img :src="src" style="height: 100%" class="view-box rounded" />
        </photo-consumer>
      </photo-provider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-1.jpg",
      ],
    };
  },
};
</script>
