<template>
  <footer>
    <div
      :class="{ 'flex-column': $screenSize.is.mobile }"
      :style="
        $screenSize.is.mobile ? 'padding: 20px 20px' : 'padding: 8px 100px'
      "
      class="bg-gray-primary d-flex align-items-center justify-content-between"
    >
      <div :class="$screenSize.is.mobile ? 'col' : 'col-4'" class="text-white">
        <!-- <img class="w-245px" src="/mendelssohn-logo.png" alt="" /> -->
        <h6>Escola Mendelssohn</h6>
        <p class="fs-2 m-0">
          Desde 2002, a Escola de Música Mendelssohn atua com sucesso no Ensino
          da Arte Musical. Nosso maior objetivo é levar a música de qualidade e
          com didática acessível para todas as idades.
        </p>
      </div>
      <div
        :class="$screenSize.is.mobile ? 'flex-row' : 'flex-column'"
        class="p-2 d-flex align-items-start justify-content-start"
      >
        <a
          href="https://www.instagram.com/escolamendelssohn/"
          target="_blank"
          class="text-decoration-none text-white fs-2 d-flex align-items-center"
          rel="noopener noreferrer"
        >
          <i
            class="bi bi-instagram"
            :class="$screenSize.is.mobile ? 'fs-8 me-4' : 'fs-5 me-2'"
          ></i>
          <p class="m-0" v-show="!$screenSize.is.mobile">@escolamendelssohn</p>
        </a>
        <a
          href="https://pt-br.facebook.com/escolamendelssohn/"
          target="_blank"
          class="text-decoration-none text-white fs-2 d-flex align-items-center"
          rel="noopener noreferrer"
        >
          <i
            class="bi bi-facebook"
            :class="$screenSize.is.mobile ? 'fs-8 me-4' : 'fs-5 me-2'"
          ></i>
          <p class="m-0" v-show="!$screenSize.is.mobile">/escolamendelssohn</p>
        </a>
        <a
          href="https://wa.me/5541998185620?text=Ol%C3%A1%2C+eu+gostaria+de+agendar+uma+aula+experimental"
          target="_blank"
          class="text-decoration-none text-white fs-2 d-flex align-items-center"
          rel="noopener noreferrer"
        >
          <i
            class="bi bi-whatsapp"
            :class="$screenSize.is.mobile ? 'fs-8' : 'fs-5 me-2'"
          ></i>
          <p class="m-0" v-show="!$screenSize.is.mobile">(41) 99818-5620</p>
        </a>
      </div>
    </div>
    <div
      class="w-100 p-2 d-flex flex-column align-items-center justify-content-between bg-black"
    >
      <p class="text-white m-0">
        feito com ❤️ por
        <a
          class="text-red-tertiary text-decoration-none"
          href="https://www.instagram.com/agencia.devicente/"
          >agencia.devicente</a
        >
      </p>
      <a
        class="text-red-tertiary text-decoration-none"
        href="https://devicente.com.br"
        >devicente.com.br</a
      >
    </div>
  </footer>
</template>
