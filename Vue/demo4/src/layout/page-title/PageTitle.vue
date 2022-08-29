<template>
  <!--begin::Page title-->
  <div
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
    class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 pb-2 pb-lg-0"
  >
    <!--begin::Title-->
    <h1 class="text-dark fw-bold my-1 fs-3 lh-1">
      {{ title }}
    </h1>
    <!--end::Title-->

    <!--begin::Breadcrumb-->
    <ul v-if="breadcrumbs" class="breadcrumb fw-semobold fs-8 my-1">
      <li class="breadcrumb-item text-muted">
        <router-link to="/dashboard" class="text-muted text-hover-primary">
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
