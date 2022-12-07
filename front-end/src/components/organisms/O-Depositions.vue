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
      <MVideo
        class="mb-4"
        student="Luiz Fernando"
        src="https://www.youtube.com/embed/0CNPR2qNzxk"
        img="/img/banner.png"
        alt="teste"
      />
      <MVideo
        class="mb-4"
        student="Luiz Fernando"
        src="https://www.youtube.com/embed/Lo2qQmj0_h4"
        img="/img/banner.png"
        alt="teste"
      />
      <MVideo
        class="mb-4"
        student="Luiz Fernando"
        src="https://www.youtube.com/embed/0CNPR2qNzxk"
        img="/img/banner.png"
        alt="teste"
      />
    </div>
  </section>
</template>

<script>
import MVideo from "@/components/molecules/M-Video.vue";

export default {
  components: {
    MVideo,
  },
};
</script>
