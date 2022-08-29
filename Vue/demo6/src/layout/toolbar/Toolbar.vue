<template>
  <!--begin::Toolbar-->
  <div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="d-flex flex-stack"
    >
      <!--begin::Page title-->
      <div
        data-kt-swapper="true"
        data-kt-swapper-mode="prepend"
        data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
        class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
      >
        <!--begin::Title-->
        <h1 class="d-flex align-items-center text-dark fw-bold my-1 fs-3">
          {{ title }}
        </h1>
        <!--end::Title-->

        <span
          v-if="breadcrumbs"
          class="h-20px border-gray-200 border-start mx-4"
        ></span>

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

      <!--begin::Actions-->
      <div class="d-flex align-items-center flex-wrap">
        <!--begin::Wrapper-->
        <div class="flex-shrink-0 me-2">
          <ul class="nav">
            <li class="nav-item">
              <a
                class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light active fw-semobold fs-7 px-4 me-1"
                data-bs-toggle="tab"
                href="#"
                >Day</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semobold fs-7 px-4 me-1"
                data-bs-toggle="tab"
                href=""
                >Week</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semobold fs-7 px-4"
                data-bs-toggle="tab"
                href="#"
                >Year</a
              >
            </li>
          </ul>
        </div>
        <!--end::Wrapper-->

        <!--begin::Wrapper-->
        <div class="d-flex align-items-center">
          <!--begin::Actions-->
          <div class="d-flex align-items-center">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
              class="btn btn-sm btn-icon btn-color-primary btn-active-light btn-active-color-primary"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotune/files/fil005.svg" />
              </span>
            </button>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toolbarWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KToolbar",
  props: {
    breadcrumbs: Array,
    title: String,
  },
  components: {},
  setup() {
    return {
      toolbarWidthFluid,
    };
  },
});
</script>
