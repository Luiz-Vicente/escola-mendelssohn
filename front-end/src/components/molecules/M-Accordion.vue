<template>
  <CAccordion>
    <CAccordionItem
      v-for="(item, index) in items"
      :key="index"
      :item-key="index"
    >
      <CAccordionHeader class="border-bottom border-blue-primary border-2">
        {{ item.title }}
      </CAccordionHeader>
      <CAccordionBody class="border-start border-blue-primary border-2 mt-3 ms-5">
        {{ item.text }}
      </CAccordionBody>
    </CAccordionItem>
  </CAccordion>
</template>

<script>
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/vue";
export default {
  props: {
    items: Array,
  },
  components: {
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
  },
};
</script>
