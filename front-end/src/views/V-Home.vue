<template>
  <div>
    <OHeader />
    <OInstruments />
  </div>
</template>

<script>
import OHeader from "@/components/organisms/O-Header.vue";
import OInstruments from "@/components/organisms/O-Instruments.vue";

export default {
  components: {
    OHeader,
    OInstruments,
  },
};
</script>
