<template>
  <!--begin::Menu wrapper-->
  <div
    id="kt_aside_menu_wrapper"
    ref="scrollElRef"
    class="w-100 hover-scroll-overlay-y d-flex pe-2"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper"
    data-kt-scroll-offset="100"
  >
    <!--begin::Menu-->
    <div
      class="menu menu-column menu-rounded fw-semobold my-auto"
      id="#kt_aside_menu"
      data-kt-menu="true"
    >
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <template v-if="!item.pages">
          <div class="menu-item">
            <router-link
              class="menu-link"
              active-class="active"
              :to="item.route"
            >
              <span v-if="item.svgIcon || item.fontIcon" class="menu-icon">
                <i
                  v-if="asideMenuIcons === 'font'"
                  :class="item.fontIcon"
                  class="bi fs-3"
                ></i>
                <span
                  v-else-if="asideMenuIcons === 'svg'"
                  class="svg-icon svg-icon-5"
                >
                  <inline-svg :src="item.svgIcon" />
                </span>
              </span>
              <span class="menu-title">{{ translate(item.heading) }}</span>
            </router-link>
          </div>
        </template>
        <template v-if="item.pages">
          <div
            v-if="item.sectionTitle"
            :class="{ show: hasActiveChildren(item.route) }"
            class="menu-item menu-accordion"
            data-kt-menu-sub="accordion"
            data-kt-menu-trigger="click"
          >
            <span class="menu-link">
              <span v-if="item.svgIcon || item.fontIcon" class="menu-icon">
                <i
                  v-if="asideMenuIcons === 'font'"
                  :class="item.fontIcon"
                  class="bi fs-3"
                ></i>
                <span
                  v-else-if="asideMenuIcons === 'svg'"
                  class="svg-icon svg-icon-5"
                >
                  <inline-svg :src="item.svgIcon" />
                </span>
              </span>
              <span class="menu-title">{{ translate(item.sectionTitle) }}</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              :class="{ show: hasActiveChildren(item.route) }"
              class="menu-sub menu-sub-accordion"
            >
              <template v-for="(menuItem, j) in item.pages" :key="j">
                <template v-if="menuItem.heading">
                  <div class="menu-item">
                    <router-link
                      class="menu-link"
                      active-class="active"
                      :to="menuItem.route"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">{{
                        translate(menuItem.heading)
                      }}</span>
                    </router-link>
                  </div>
                </template>
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

      <div class="menu-item">
        <a
          class="menu-link"
          href="https://preview.keenthemes.com/metronic8/vue/docs/#/utilities"
        >
          <span class="menu-icon">
            <span class="svg-icon svg-icon-5">
              <inline-svg src="media/icons/duotune/arrows/arr001.svg" />
            </span>
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
            <span class="svg-icon svg-icon-5">
              <inline-svg src="media/icons/duotune/arrows/arr001.svg" />
            </span>
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
            <span class="svg-icon svg-icon-5">
              <inline-svg src="media/icons/duotune/arrows/arr001.svg" />
            </span>
          </span>
          <span class="menu-title"
            >{{ translate("changelog") }} v{{ version }}</span
          >
        </a>
      </div>
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
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

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
    };
  },
});
</script>
