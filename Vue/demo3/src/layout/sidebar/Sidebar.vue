<template>
  <!--begin::Sidebar-->
  <div
    id="kt_sidebar"
    class="sidebar"
    data-kt-drawer="true"
    data-kt-drawer-name="sidebar"
    data-kt-drawer-activate="{default: true, xxl: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '400px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_sidebar_toggler"
  >
    <!--begin::Sidebar Content-->
    <div
      class="d-flex flex-column sidebar-body px-5 py-10"
      id="kt_sidebar_body"
    >
      <!--begin::Sidebar Nav-->
      <ul
        class="sidebar-nav nav nav-tabs mb-10"
        id="kt_sidebar_tabs"
        role="tablist"
      >
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            data-kt-countup-tabs="true"
            href="#kt_sidebar_tab_1"
          >
            <span class="svg-icon">
              <inline-svg src="media/icons/duotune/abstract/abs038.svg" />
            </span>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            data-kt-countup-tabs="true"
            href="#kt_sidebar_tab_2"
          >
            <span class="svg-icon">
              <inline-svg src="media/icons/duotune/abstract/abs042.svg" />
            </span>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            data-kt-countup-tabs="true"
            href="#kt_sidebar_tab_3"
          >
            <span class="svg-icon">
              <inline-svg src="media/icons/duotune/abstract/abs036.svg" />
            </span>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            data-kt-countup-tabs="true"
            href="#kt_sidebar_tab_4"
          >
            <span class="svg-icon">
              <inline-svg src="media/icons/duotune/coding/cod001.svg" />
            </span>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            data-kt-countup-tabs="true"
            href="#kt_sidebar_tab_5"
          >
            <span class="svg-icon">
              <inline-svg src="media/icons/duotune/abstract/abs026.svg" />
            </span>
          </a>
        </li>
      </ul>
      <!--end::Sidebar Nav-->

      <!--begin::Sidebar Content-->
      <div id="kt_sidebar_content">
        <div
          class="hover-scroll-y"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-offset="0px"
          data-kt-scroll-dependencies="#kt_sidebar_tabs"
          data-kt-scroll-wrappers="#kt_sidebar_content, #kt_sidebar_body"
        >
          <!--begin::Tab content-->
          <div class="tab-content px-5 px-xxl-10">
            <!--begin::Tab pane-->
            <div class="tab-pane fade" id="kt_sidebar_tab_1" role="tabpanel">
              <Stats
                title="Assigned Tasks"
                stat1-value="100"
                stat1-label="Pending"
                stat2-value="210"
                stat2-label="Completed"
                stat3-value="10"
                stat3-label="On Hold"
                stat4-value="55"
                stat4-label="In Progress"
              />
              <Tasks />
            </div>
            <!--end::Tab pane-->

            <!--begin::Tab pane-->
            <div class="tab-pane fade" id="kt_sidebar_tab_2" role="tabpanel">
              <Stats
                title="Customer Orders"
                stat1-value="40"
                stat1-label="In Process"
                stat2-value="110"
                stat2-label="Delivered"
                stat3-value="29"
                stat3-label="On Hold"
                stat4-value="15"
                stat4-label="In Progress"
              />
              <Orders />
            </div>
            <!--end::Tab pane-->

            <!--begin::Tab pane-->
            <div
              class="tab-pane fade show active"
              id="kt_sidebar_tab_3"
              role="tabpanel"
            >
              <Stats
                title="Support Tickets"
                stat1-value="28"
                stat1-label="Pending"
                stat2-value="204"
                stat2-label="Completed"
                stat3-value="76"
                stat3-label="On Hold"
                stat4-value="9"
                stat4-label="In Progress"
              />
              <BestSellers />
            </div>
            <!--end::Tab pane-->

            <!--begin::Tab pane-->
            <div class="tab-pane fade" id="kt_sidebar_tab_4" role="tabpanel">
              <Stats
                title="Notifcations"
                stat1-value="5"
                stat1-label="System Alert"
                stat2-value="10"
                stat2-label="Server Failure"
                stat3-value="40"
                stat3-label="User Feedback"
                stat4-value="3"
                stat4-label="Backup"
              />
              <Tasks />
            </div>
            <!--end::Tab pane-->

            <!--begin::Tab pane-->
            <div class="tab-pane fade" id="kt_sidebar_tab_5" role="tabpanel">
              <Stats
                title="Outgoing Emails"
                stat1-value="160"
                stat1-label="Sending"
                stat2-value="2,600"
                stat2-label="Sent"
                stat3-value="2,500"
                stat3-label="Delivered"
                stat4-value="11"
                stat4-label="Failed"
              />
              <Tasks />
            </div>
            <!--end::Tab pane-->
          </div>
          <!--end::Tab content-->
        </div>
      </div>
      <!--end::Sidebar Content-->
    </div>
    <!--end::Sidebar Content-->
  </div>
  <!--end::Sidebar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stats from "@/components/widgets/sidebar-widgets/Stats.vue";
import BestSellers from "@/components/widgets/sidebar-widgets/BestSellers.vue";
import Tasks from "@/components/widgets/sidebar-widgets/Tasks.vue";
import Orders from "@/components/widgets/sidebar-widgets/Orders.vue";

export default defineComponent({
  name: "layout-sidebar",
  components: {
    Stats,
    BestSellers,
    Tasks,
    Orders,
  },
});
</script>
