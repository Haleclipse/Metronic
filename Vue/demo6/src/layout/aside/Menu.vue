<template>
  <!--begin::Menu-->
  <div
    id="kt_aside_menu"
    class="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semobold fs-6"
    data-kt-menu="true"
  >
    <template v-for="(item, i) in MainMenuConfig" :key="i">
      <template v-if="!item.pages">
        <template v-if="item.heading">
          <div
            :class="{ 'show here': currentActive(item.route) }"
            class="menu-item py-3"
          >
            <router-link class="menu-link menu-center" :to="item.route">
              <span v-if="item.svgIcon || item.fontIcon" class="menu-icon me-0">
                <i
                  v-if="asideMenuIcons === 'font'"
                  :class="item.fontIcon"
                  class="bi fs-2"
                ></i>
                <span
                  v-else-if="asideMenuIcons === 'svg'"
                  class="svg-icon svg-icon-2"
                >
                  <inline-svg :src="item.svgIcon" />
                </span>
              </span>
              <span class="menu-title">{{ translate(item.heading) }}</span>
            </router-link>
          </div>
        </template>
      </template>
      <template v-if="item.pages">
        <div
          v-if="item.sectionTitle"
          :class="{ 'show here': hasActiveChildren(item.route) }"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="right-start"
          class="menu-item py-3"
        >
          <span class="menu-link menu-center">
            <span v-if="item.svgIcon || item.fontIcon" class="menu-icon me-0">
              <i
                v-if="asideMenuIcons === 'font'"
                :class="item.fontIcon"
                class="bi fs-2"
              ></i>
              <span
                v-else-if="asideMenuIcons === 'svg'"
                class="svg-icon svg-icon-2"
              >
                <inline-svg :src="item.svgIcon" />
              </span>
            </span>
            <span class="menu-title">{{ translate(item.sectionTitle) }}</span>
          </span>
          <div
            :class="{ show: hasActiveChildren(item.route) }"
            class="menu-sub menu-sub-dropdown w-225px w-lg-275px px-1 py-4"
          >
            <template v-for="(menuItem, j) in item.pages" :key="j">
              <div
                v-if="menuItem.sectionTitle"
                :class="{ show: hasActiveChildren(menuItem.route) }"
                class="menu-item menu-accordion"
                data-kt-menu-sub="accordion"
                data-kt-menu-trigger="click"
              >
                <span class="menu-link">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title">{{
                    translate(menuItem.sectionTitle)
                  }}</span>
                  <span class="menu-arrow"></span>
                </span>
                <div
                  :class="{ show: hasActiveChildren(menuItem.route) }"
                  class="menu-sub menu-sub-accordion"
                >
                  <template v-for="(item2, k) in menuItem.sub" :key="k">
                    <div v-if="item2.heading" class="menu-item">
                      <router-link
                        class="menu-link"
                        active-class="active"
                        :to="item2.route"
                      >
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">{{
                          translate(item2.heading)
                        }}</span>
                      </router-link>
                    </div>
                    <div
                      v-if="item2.sectionTitle"
                      :class="{ show: hasActiveChildren(item2.route) }"
                      class="menu-item menu-accordion"
                      data-kt-menu-sub="accordion"
                      data-kt-menu-trigger="click"
                    >
                      <span class="menu-link">
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">{{
                          translate(item2.sectionTitle)
                        }}</span>
                        <span class="menu-arrow"></span>
                      </span>
                      <div
                        :class="{ show: hasActiveChildren(item2.route) }"
                        class="menu-sub menu-sub-accordion"
                      >
                        <template v-for="(item3, k) in item2.sub" :key="k">
                          <div v-if="item3.heading" class="menu-item">
                            <router-link
                              class="menu-link"
                              active-class="active"
                              :to="item3.route"
                            >
                              <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                              </span>
                              <span class="menu-title">{{
                                translate(item3.heading)
                              }}</span>
                            </router-link>
                          </div>
                        </template>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
    </template>

    <div
      data-kt-menu-trigger="click"
      data-kt-menu-placement="right-start"
      class="menu-item py-3 menu-dropdown"
    >
      <span
        class="menu-link menu-center"
        title=""
        data-bs-toggle="tooltip"
        data-bs-trigger="hover"
        data-bs-dismiss="click"
        data-bs-placement="right"
        data-bs-original-title="Resources"
      >
        <span class="menu-icon me-0">
          <i class="bi bi-gear fs-2"></i>
        </span>
        <span class="menu-title">{{ translate("resources") }}</span>
      </span>
      <div
        class="menu-sub menu-sub-dropdown w-225px w-lg-275px px-1 py-4"
        data-popper-placement="right-start"
      >
        <div class="menu-item">
          <div class="menu-content">
            <span class="menu-section fs-5 fw-bold ps-1 py-1">{{
              translate("resources")
            }}</span>
          </div>
        </div>
        <div class="menu-item">
          <a
            class="menu-link"
            href="https://preview.keenthemes.com/metronic8/vue/docs/#/utilities"
          >
            <span class="menu-icon">
              <i class="bi bi-grid fs-3"></i>
            </span>
            <span class="menu-title">{{ translate("components") }}</span>
          </a>
        </div>
        <div class="menu-item">
          <a
            class="menu-link"
            href="https://preview.keenthemes.com/metronic8/vue/docs/#/doc-overview"
          >
            <span class="menu-icon">
              <i class="bi bi-box fs-3"></i>
            </span>
            <span class="menu-title">{{ translate("documentation") }}</span>
          </a>
        </div>
        <div class="menu-item">
          <a
            class="menu-link"
            href="https://preview.keenthemes.com/metronic8/vue/docs/#/changelog"
          >
            <span class="menu-icon">
              <i class="bi bi-card-text fs-3"></i>
            </span>
            <span class="menu-title"
              >{{ translate("changelog") }} v{{ version }}</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { version } from "@/core/helpers/documentation";
import { asideMenuIcons } from "@/core/helpers/config";
import MainMenuConfig from "@/core/config/MainMenuConfig";

export default defineComponent({
  name: "kt-menu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const currentActive = (current) => {
      return route.path === current;
    };

    return {
      hasActiveChildren,
      currentActive,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
    };
  },
});
</script>
