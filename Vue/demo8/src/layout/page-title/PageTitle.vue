<template>
  <!--begin::Page title-->
  <div
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
    class="page-title d-flex justify-content-center flex-column me-5"
  >
    <!--begin::Title-->
    <h1 class="d-flex align-items-center text-dark fw-bold my-1 fs-3">
      {{ title }}
    </h1>
    <!--end::Title-->

    <!--begin::Breadcrumb-->
    <ul
      v-if="breadcrumbs"
      class="breadcrumb breadcrumb-separatorless fw-semobold fs-7 my-1"
    >
      <li class="breadcrumb-item pe-3">
        <router-link to="/dashboard" class="text-muted text-hover-primary">
          Home
        </router-link>
      </li>
      <li class="breadcrumb-item">
        <span class="bullet bg-gray-200 w-5px h-2px"></span>
      </li>
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <li class="breadcrumb-item text-muted">
          {{ item }}
        </li>
        <li class="breadcrumb-item">
          <span class="bullet bg-gray-200 w-5px h-2px"></span>
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
