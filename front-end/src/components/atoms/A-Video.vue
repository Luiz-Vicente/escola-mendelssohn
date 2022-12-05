<template>
  <div>
    <img :class="$screenSize.is.mobile? 'w-100':'w-335px'" class="border border-3 border-red-tertiary p-1" :src="src" :alt="alt">
    <i :class="$screenSize.is.mobile? 'fs-10':'fs-9'" class="bi bi-play-circle-fill text-white cursor-pointer"></i>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
  }
}
</script>

<style lang="scss">
.bi-play-circle-fill {
  position: absolute;
  transform: translate(-370%, 80%);
  transition: all 0.2s;
  &:hover {
    opacity: 80%;
  }
}
</style>
