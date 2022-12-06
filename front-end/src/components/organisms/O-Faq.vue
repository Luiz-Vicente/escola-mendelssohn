<template>
  <section
    :class="{ 'flex-column-reverse': $screenSize.is.mobile }"
    class="bg-gray-300 d-flex pt-5"
    :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'"
  >
    <div class="col"><img class="w-100" src="/img/utils/faq.png" alt="" /></div>
    <div :class="$screenSize.is.mobile?'mb-5':'ms-5'" class="col my-auto">
      <h4 class="text-blue-primary">FAQ</h4>
      <p class="text-blue-primary fw-lighter fs-6 m-0">
        as perguntas mais comuns estão aqui
      </p>
      <MAccordion :items="faqList" />
    </div>
  </section>
</template>

<script>
import MAccordion from "@/components/molecules/M-Accordion.vue";

export default {
  components: {
    MAccordion,
  },
  data() {
    return {
      faqList: [
        {
          title: "Quanto tempo duram os cursos?",
          text: "Os cursos não têm um prazo determinado para acabar",
        },
        {
          title: "Quanto tempo duram os cursos?",
          text: "Os cursos não têm um prazo determinado para acabar",
        },
        {
          title: "Quanto tempo duram os cursos?",
          text: "Os cursos não têm um prazo determinado para acabar",
        },
      ],
    };
  },
};
</script>
