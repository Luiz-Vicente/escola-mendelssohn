<template>
  <ONavbar />
  <RouterView />
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
