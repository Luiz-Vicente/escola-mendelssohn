<template>
  <div>
    <OHeader />
    <OInstruments />
    <!-- <OBanner /> -->
    <!-- <ODepositions /> -->
    <!-- <OPhotos /> -->
    <!-- <OFaq /> -->
  </div>
</template>

<script>
import OHeader from "@/components/organisms/O-Header.vue";
import OInstruments from "@/components/organisms/O-Instruments.vue";
// import OBanner from "@/components/organisms/O-Banner.vue";
// import ODepositions from "@/components/organisms/O-Depositions.vue";
// import OPhotos from "@/components/organisms/O-Photos.vue";
// import OFaq from "@/components/organisms/O-Faq.vue";

export default {
  components: {
    OHeader,
    OInstruments,
    // OBanner,
    // ODepositions,
    // OPhotos,
    // OFaq,
  },
};
</script>
