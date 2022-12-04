<template>
  <main :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'">
    <h5 class="text-white pt-5">Cursos</h5>
    <div class="mt-4 d-flex justify-content-around flex-wrap">
      <AAdvantage
        v-for="(instrument, index) in instruments"
        :key="index"
        :img="instrument.img"
        :description="instrument.description"
        class="m-2"
      />
    </div>
    <p class="text-white m-0 text-center p-3">Curso gratuito disponível para os nossos alunos (acima de 7 anos): Teoria Musical</p>
  </main>
</template>

<script>
import AAdvantage from "@/components/atoms/A-Advantage.vue";

export default {
  data() {
    return {
      instruments: [
        { img: "/img/instruments/piano.png", description: "Piano" },
        { img: "/img/instruments/teclado.png", description: "Teclado" },
        { img: "/img/instruments/microfone.png", description: "Vocal" },
        { img: "/img/instruments/clave-de-sol.png", description: "Musicalização" },
        { img: "/img/instruments/saxofone.png", description: "Saxofone" },
        { img: "/img/instruments/flauta.png", description: "Flauta" },
        { img: "/img/instruments/bateria.png", description: "Bateria" },
        { img: "/img/instruments/violao.png", description: "Violão" },
        { img: "/img/instruments/guitarra.png", description: "Guitarra" },
        { img: "/img/instruments/baixo.png", description: "Baixo" },
        { img: "/img/instruments/cavaquinho.png", description: "Cavaquinho" },
        { img: "/img/instruments/viola.png", description: "Viola" },
        { img: "/img/instruments/ukulele.png", description: "Ukulelê" },
        { img: "/img/instruments/violino.png", description: "Violino" },
        { img: "/img/instruments/violoncelo.png", description: "Violoncelo" },
      ],
    };
  },
  components: {
    AAdvantage,
  },
};
</script>

<style lang="scss" scoped>
main {
  background: rgb(0, 79, 86);
  background: linear-gradient(
    0deg,
    rgba(0, 79, 86, 1) 0%,
    rgba(0, 0, 86, 1) 100%
  );
}
</style>
