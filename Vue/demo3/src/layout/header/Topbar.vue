<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <!--begin::Search-->
      <div class="d-flex align-items-stretch ms-1 ms-lg-3">
        <KTSearch></KTSearch>
      </div>
      <!--end::Search-->

      <!--begin::Activities-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::drawer toggle-->
        <div
          class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative"
          id="kt_activities_toggle"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen007.svg" />
          </span>
        </div>
        <!--end::drawer toggle-->
      </div>
      <!--end::Activities-->

      <!--begin::Chat-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::Menu wrapper-->
        <div
          class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative"
          id="kt_drawer_chat_toggle"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/communication/com003.svg" />
          </span>

          <span
            class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
          >
          </span>
        </div>
        <!--end::Menu wrapper-->
      </div>
      <!--end::Chat-->

      <!--begin::Theme mode-->
      <div class="d-flex align-items-center ms-3 ms-lg-4">
        <!--begin::Menu toggle-->
        <a
          href="#"
          class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px"
          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <span class="svg-icon theme-light-show svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen060.svg" />
          </span>
          <span class="svg-icon theme-dark-show svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen061.svg" />
          </span>
        </a>
        <!--begin::Menu toggle-->
        <KTThemeModeSwitcher></KTThemeModeSwitcher>
      </div>
      <!--end::Theme mode-->

      <button
        class="btn btn-icon btn-active-icon-primary w-40px h-40px d-xxl-none ms-2 me-n2"
        id="kt_sidebar_toggler"
      >
        <span class="svg-icon svg-icon-2x">
          <inline-svg src="media/icons/duotune/coding/cod001.svg" />
        </span>
      </button>
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTSearch from "@/layout/header/partials/Search.vue";
import KTThemeModeSwitcher from "@/layout/theme-mode/ThemeModeSwitcher.vue";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTSearch,
    KTThemeModeSwitcher,
  },
});
</script>
