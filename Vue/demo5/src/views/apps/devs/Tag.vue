<template>
  <Questions />
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from "vue";
import Questions from "@/components/devs/Questions";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import LayoutService from "@/core/services/LayoutService";

export default defineComponent({
  name: "dev-tag",
  components: { Questions },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Tag");
      if (!localStorage.getItem("config")) {
        LayoutService.enableSidebar();
      }
    });

    onUnmounted(() => {
      if (!localStorage.getItem("config")) {
        LayoutService.disableSidebar();
      }
    });
  },
});
</script>
