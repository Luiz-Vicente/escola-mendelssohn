<template>
  <ONavbar />
  <RouterView
    :style="$screenSize.is.mobile ? 'padding: 0 20px' : 'padding: 0 100px'"
  />
  <OFooter />
</template>

<script>
import ONavbar from "@/components/organisms/O-Navbar.vue";
import OFooter from "@/components/organisms/O-Footer.vue";

export default {
  components: {
    ONavbar,
    OFooter,
  },
};
</script>
