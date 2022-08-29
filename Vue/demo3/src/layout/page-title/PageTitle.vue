<template>
  <!--begin::Page title-->
  <div
    id="kt_page_title"
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_header_container'}"
    class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-5 pb-lg-0"
  >
    <!--begin::Title-->
    <h1 class="d-flex flex-column text-dark fw-bold my-0 fs-1">
      {{ title }}
    </h1>
    <!--end::Title-->

    <!--begin::Breadcrumb-->
    <ul
      v-if="breadcrumbs"
      class="breadcrumb breadcrumb-dot fw-semobold fs-base my-1"
    >
      <li class="breadcrumb-item text-muted">
        <router-link to="/dashboard" class="breadcrumb-item text-muted">
          Home
        </router-link>
      </li>
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <li class="breadcrumb-item text-muted">
          {{ item }}
        </li>
      </template>
      <li class="breadcrumb-item pe-3 text-dark">
        {{ title }}
      </li>
    </ul>
    <!--end::Breadcrumb-->
  </div>
  <!--end::Page title-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-page-title",
  props: {
    breadcrumbs: Array,
    title: String,
  },
  component: {},
});
</script>
