<template>
  <div>
    <OHeader />
    <OInstruments />
    <!-- <OGallery /> -->
  </div>
</template>

<script>
import OHeader from "@/components/organisms/O-Header.vue";
import OInstruments from "@/components/organisms/O-Instruments.vue";
// import OGallery from "@/components/organisms/O-Gallery.vue";

export default {
  components: {
    OHeader,
    OInstruments,
    // OGallery,
  },
};
</script>
