<template>
  <div>
    <div @click="showVideo = true">
      <img
        :class="$screenSize.is.mobile ? 'w-100' : 'w-335px'"
        class="border border-3 border-red-tertiary p-1"
        :src="img"
        :alt="alt"
      />
      <!-- <i
        class="bi bi-play-circle-fill text-white cursor-pointer fs-9"
      ></i> -->
    </div>
    <CModal
      alignment="center"
      :visible="showVideo"
      @close="
        () => {
          showVideo = false;
        }
      "
    >
      <CModalHeader>
        <CModalTitle>{{ student }}</CModalTitle>
      </CModalHeader>
      <CModalBody class="col"
        ><iframe
          width="100%"
          height="400px"
          :src="src"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></CModalBody>
    </CModal>
  </div>
</template>

<script>
import { CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/vue";
export default {
  components: {
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
  },
  props: {
    img: String,
    alt: String,
    src: String,
    student: String,
  },
  data() {
    return {
      showVideo: false,
    };
  },
};
</script>

<style lang="scss">
.bi-play-circle-fill {
  position: absolute;
  transform: translate(-370%, 80%);
  transition: all 0.2s;
  &:hover {
    opacity: 80%;
  }
}
</style>
