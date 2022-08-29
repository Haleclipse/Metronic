<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside pb-5 pt-5 pt-lg-0 aside"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'80px', '300px': '100px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <!--begin::Brand-->
    <div class="aside-logo py-8" id="kt_aside_logo">
      <!--begin::Logo-->
      <router-link to="/dashboard" class="d-flex align-items-center">
        <img alt="Logo" src="media/logos/demo6.svg" class="h-45px logo" />
      </router-link>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid" id="kt_aside_menu">
      <KTMenu />
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto" id="kt_aside_footer">
      <!--begin::Menu-->
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btm-sm btn-icon btn-active-color-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Quick actions"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen008.svg" />
          </span>
        </button>
        <Dropdown2 />
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layout/aside/Menu.vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
    Dropdown2,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    const { t } = useI18n();

    return {
      asideTheme,
      t,
    };
  },
});
</script>
