<template>
  <div>
    <OHeader />
    <OInstruments />
    <!-- <ODepositions />
    <OPhotos />
    <OFaq /> -->
  </div>
</template>

<script>
import OHeader from "@/components/organisms/O-Header.vue";
import OInstruments from "@/components/organisms/O-Instruments.vue";
// import ODepositions from "@/components/organisms/O-Depositions.vue";
// import OPhotos from "@/components/organisms/O-Photos.vue";
// import OFaq from "@/components/organisms/O-Faq.vue";

export default {
  components: {
    OHeader,
    OInstruments,
    // ODepositions,
    // OPhotos,
    // OFaq,
  },
};
</script>
