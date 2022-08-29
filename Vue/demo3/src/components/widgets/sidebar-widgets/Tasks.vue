<template>
  <div class="card card-flush card-p-0 shadow-none bg-transparent mb-5">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
      <!--begin::Title-->
      <h3 class="card-title fw-bolder text-white fs-3">Latest Tasks</h3>
      <!--end::Title-->

      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-icon btn-icon-white btn-active-color-primary me-n4"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="bottom-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown1 />
      </div>
      <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-0">
      <template v-for="(item, index) in items" :key="index">
        <!--begin::Item-->
        <div
          class="d-flex flex-nowrap align-items-center"
          :class="items.length - 1 !== index ? 'mb-7' : ''"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-50px me-5">
            <span class="symbol-label sidebar-bg-muted">
              <span :class="`svg-icon svg-icon-2x svg-icon-${item.color}`">
                <inline-svg :src="item.icon" />
              </span>
            </span>
          </div>
          <!--end::Symbol-->

          <!--begin::Text-->
          <div class="d-flex flex-column">
            <a href="#" class="text-white text-hover-primary fs-6 fw-bolder">{{
              item.title
            }}</a>

            <span class="sidebar-text-muted fw-bold">{{
              item.description
            }}</span>
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "sidebar-widget-tasks",
  components: {
    Dropdown1,
  },
  setup() {
    const items = [
      {
        icon: "media/icons/duotune/abstract/abs027.svg",
        color: "success",
        title: "Project Briefing",
        description: "Project Manager",
      },
      {
        icon: "media/icons/duotune/art/art005.svg",
        color: "warning",
        title: "Concept Design",
        description: "Art Director",
      },
      {
        icon: "media/icons/duotune/communication/com012.svg",
        color: "primary",
        title: "Functional Logics",
        description: "Lead Developer",
      },
      {
        icon: "media/icons/duotune/coding/cod008.svg",
        color: "danger",
        title: "Development",
        description: "DevOps",
      },
      {
        icon: "media/icons/duotune/general/gen049.svg",
        color: "info",
        title: "Testing",
        description: "QA Managers",
      },
    ];

    return {
      items,
    };
  },
});
</script>
