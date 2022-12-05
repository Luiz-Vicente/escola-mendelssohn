<template>
  <section
    class="bg-blue-primary d-flex flex-column"
    :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'"
  >
    <h4 class="text-white pt-5">Depoimentos</h4>
    <p class="fs-6 m-0 fw-lighter text-white">dos nossos alunos</p>
    <div
      :class="{ 'flex-column': $screenSize.is.mobile }"
      class="my-5 d-flex align-items-center justify-content-around"
    >
      <AVideo class="mb-4" src="/img/banner.png" alt="teste" />
      <AVideo class="mb-4" src="/img/banner.png" alt="teste" />
      <AVideo class="mb-4" src="/img/banner.png" alt="teste" />
    </div>
  </section>
</template>

<script>
import AVideo from "@/components/atoms/A-Video.vue";

export default {
  components: {
    AVideo,
  },
};
</script>
