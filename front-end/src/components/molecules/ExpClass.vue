<template>
  <form
    action="https://formsubmit.co/dev.vicente.contato@gmail.com"
    method="POST"
    :class="{ 'bg-white': bg }"
    class="p-5 w-100"
    style="border-radius: 30px 30px 0 0"
  >
    <p class="m-0 fs-6 fw-light">Agende uma</p>
    <h4 class="mb-4">aula experimental</h4>
    <input type="hidden" name="_subject" value="Novo cadastro no site" />
    <input type="hidden" name="_cc" value="escolamendelssohn@hotmail.com" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_next" :value="`https://wa.me/5541995119829?text=Ol%C3%A1%2C+eu+me+chamo+${this.name}+e+gostaria+de+agendar+uma+aula+experimental`"/>
    <label class="form-input-label" for="name">Nome *</label>
    <input
      id="name"
      v-model="name"
      class="form-control mb-4 py-3 border-blue-secondary px-4 rounded-pill"
      placeholder="Ex: João Cândido"
      type="text"
      maxlength="40"
      required
    />
    <label class="form-input-label" for="email">E-mail *</label>
    <input
      id="email"
      class="form-control mb-4 py-3 border-blue-secondary px-4 rounded-pill"
      placeholder="Ex: joaocandido@email.com"
      maxlength="35"
      type="email"
      required
    />
    <label class="form-input-label" for="fone">Telefone *</label>
    <input
      id="fone"
      class="form-control mb-4 py-3 border-blue-secondary px-4 rounded-pill"
      placeholder="Ex: (00) 00000-0000"
      maxlength="15"
      type="text"
      required
    />
    <button
      v-wave
      class="btn rounded-pill btn-blue-tertiary w-100 py-3 border-blue-secondary"
    >
      Agendar aula
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null
    }
  },
  props: {
    bg: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
