<template>
  <div class="d-flex flex-column align-items-center">
    <div class="advantage p-4 rounded-circle">
      <img :src="img" alt="" />
    </div>
    <p class="text-white">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.advantage {
  background-color: rgba(0, 0, 0, 0.507);
}
</style>
