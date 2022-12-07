<template>
  <section
    class="h-min-100 d-flex flex-column justify-content-center"
    :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'"
  >
    <p class="mt-5 text-white fw-lighter fs-8">Nós fazemos por amor</p>
    <h5 class="text-white col-md-5 col">
      <i class="bi bi-quote fs-9 text-red-tertiary m-0"></i>
      Laborum cupidatat laborum consectetur nulla occaecat ea magna
      exercitation exercitation. Id reprehenderit sunt mollit consequat sunt
      deserunt dolor.<i class="bi bi-quote fs-9 text-red-tertiary m-0 lala"></i>
    </h5>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url("/img/banner1.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.lala {
  transform: rotate(90deg)
}
</style>
