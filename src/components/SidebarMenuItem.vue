<template>
  <div :style="cssProps">
    <component
      :is="item.component"
      v-if="item.component && !isItemHidden"
      v-bind="item.props"
    />
    <div
      v-else-if="item.header && !isItemHidden"
      class="vsm--header"
      :class="item.class"
      v-bind="item.attributes"
    >
      {{ item.title }}
    </div>
    <div
      v-else-if="!isItemHidden"
      class="vsm--item"
      :class="[{ 'vsm--item_open': show }]"
      v-on="
        disableHover && isCollapsed
          ? { click: mouseOverEvent }
          : { mouseover: mouseOverEvent }
      "
      @mouseout="mouseOutEvent"
    >
      <sidebar-menu-link
        :item="item"
        :class="itemLinkClass"
        :attributes="item.attributes"
        @click.native="clickEvent"
      >
        <sidebar-menu-icon
          v-if="item.icon && !isMobileItem"
          :icon="item.icon"
        />
        <transition name="fade-animation" :appear="isMobileItem">
          <template
            v-if="
              (isCollapsed && !isFirstLevel) || !isCollapsed || isMobileItem
            "
          >
            <span class="vsm--title">{{ item.title }}</span>
          </template>
        </transition>
        <template
          v-if="(isCollapsed && !isFirstLevel) || !isCollapsed || isMobileItem"
        >
          <sidebar-menu-badge v-if="item.badge" :badge="item.badge" />
          <div
            v-if="itemHasChild"
            class="vsm--arrow"
            :class="[
              { 'vsm--arrow_open': show },
              { 'vsm--arrow_slot': $slots['dropdown-icon'] },
            ]"
          >
            <slot name="dropdown-icon" />
          </div>
        </template>
      </sidebar-menu-link>
      <template v-if="itemHasChild">
        <template
          v-if="(isCollapsed && !isFirstLevel) || !isCollapsed || isMobileItem"
        >
          <transition
            :appear="isMobileItem"
            name="expand"
            @enter="expandEnter"
            @afterEnter="expandAfterEnter"
            @beforeLeave="expandBeforeLeave"
          >
            <div
              v-if="show"
              class="vsm--dropdown"
              :class="isMobileItem && 'vsm--dropdown_mobile-item'"
              :style="isMobileItem && mobileItemStyle.dropdown"
            >
              <div class="vsm--list">
                <sidebar-menu-item
                  v-for="(subItem, index) in item.child"
                  :key="index"
                  :item="subItem"
                  :level="level + 1"
                  :show-child="showChild"
                  :rtl="rtl"
                  :is-collapsed="isCollapsed"
                >
                  <slot slot="dropdown-icon" name="dropdown-icon" />
                </sidebar-menu-item>
              </div>
            </div>
          </transition>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import pathToRegexp from "path-to-regexp";
import SidebarMenuLink from "./SidebarMenuLink.vue";
import SidebarMenuIcon from "./SidebarMenuIcon.vue";
import SidebarMenuBadge from "./SidebarMenuBadge.vue";

function hexToRgbA(hex, transp) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      ", " +
      transp +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

export default {
  name: "SidebarMenuItem",
  components: {
    SidebarMenuLink,
    SidebarMenuIcon,
    SidebarMenuBadge,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      default: 1,
    },
    isCollapsed: {
      type: Boolean,
    },
    isMobileItem: {
      type: Boolean,
      default: false,
    },
    mobileItem: {
      type: Object,
      default: null,
    },
    activeShow: {
      type: Object,
      default: null,
    },
    showChild: {
      type: Boolean,
      default: false,
    },
    showOneChild: {
      type: Boolean,
      default: false,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    disableHover: {
      type: Boolean,
      default: false,
    },
    mobileItemStyle: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      active: false,
      exactActive: false,
      itemShow: false,
      itemHover: false,
    };
  },
  computed: {
    cssProps() {
      return {
        "--sb-item-primary-color": this.item.color ? this.item.color : "blue",
        "--sb-item-primary-color-05": this.item.color
          ? hexToRgbA(this.item.color, 0.5)
          : "blue",
        "--sb-item-primary-color-02": this.item.color
          ? hexToRgbA(this.item.color, 0.2)
          : "blue",
      };
    },
    isFirstLevel() {
      return this.level === 1;
    },
    show: {
      get() {
        if (!this.itemHasChild) return false;
        if (this.showChild || this.isMobileItem) return true;
        return this.itemShow;
      },
      set(show) {
        if (this.showOneChild) {
          show ? this.emitActiveShow(this.item) : this.emitActiveShow(null);
        }
        this.itemShow = show;
      },
    },
    itemLinkClass() {
      return [
        "vsm--link",
        !this.isMobileItem ? `vsm--link_level-${this.level}` : "",
        { "vsm--link_mobile-item": this.isMobileItem },
        { "vsm--link_hover": this.hover },
        { "vsm--link_active": true },
        { "vsm--link_exact-active": this.exactActive },
        { "vsm--link_disabled": this.item.disabled },
        this.item.class,
      ];
    },
    isItemHidden() {
      if (this.isCollapsed) {
        if (this.item.hidden && this.item.hiddenOnCollapse === undefined) {
          return true;
        } else {
          return this.item.hiddenOnCollapse === true;
        }
      } else {
        return this.item.hidden === true;
      }
    },
    hover() {
      if (this.isCollapsed && this.isFirstLevel) {
        return this.item === this.mobileItem;
      }
      return this.itemHover;
    },
    itemHasChild() {
      return !!(this.item.child && this.item.child.length > 0);
    },
  },
  watch: {
    $route() {
      setTimeout(() => {
        if (this.item.header || this.item.component) return;
        this.initState();
      }, 1);
    },
    item(newItem, item) {
      this.emitItemUpdate(newItem, item);
    },
    activeShow() {
      this.itemShow = this.item === this.activeShow;
    },
  },
  created() {
    if (this.item.header || this.item.component) return;
    this.initState();
  },
  mounted() {
    if (!this.$router) {
      window.addEventListener("hashchange", this.initState);
    }
  },
  destroyed() {
    if (!this.$router) {
      window.removeEventListener("hashchange", this.initState);
    }
  },
  methods: {
    isLinkActive(item) {
      return (
        this.matchRoute(item) ||
        this.isChildActive(item.child) ||
        this.isAliasActive(item)
      );
    },
    isLinkExactActive(item) {
      return this.matchExactRoute(item.href);
    },
    isChildActive(child) {
      if (!child) return false;
      return child.some((item) => {
        return this.isLinkActive(item);
      });
    },
    isAliasActive(item) {
      if (item.alias) {
        const current = this.$router
          ? this.$route.fullPath
          : window.location.pathname +
            window.location.search +
            window.location.hash;
        if (Array.isArray(item.alias)) {
          return item.alias.some((alias) => {
            return pathToRegexp(alias).test(current);
          });
        } else {
          return pathToRegexp(item.alias).test(current);
        }
      }
      return false;
    },
    matchRoute({ href, exactPath }) {
      if (!href) return false;
      if (this.$router) {
        const { route } = this.$router.resolve(href);
        return exactPath
          ? route.path === this.$route.path
          : this.matchExactRoute(href);
      } else {
        return exactPath
          ? href === window.location.pathname
          : this.matchExactRoute(href);
      }
    },
    matchExactRoute(href) {
      if (!href) return false;
      if (this.$router) {
        const { route } = this.$router.resolve(href);
        return route.fullPath === this.$route.fullPath;
      } else {
        return (
          href ===
          window.location.pathname +
            window.location.search +
            window.location.hash
        );
      }
    },
    clickEvent(event) {
      if (this.item.disabled) return;
      if (!this.item.href) {
        event.preventDefault();
      }

      this.emitItemClick(event, this.item, this);

      this.emitMobileItem(event, event.currentTarget.offsetParent);

      if (!this.itemHasChild || this.showChild || this.isMobileItem) return;
      if (!this.item.href || this.exactActive) {
        this.show = !this.show;
      }
    },
    emitMobileItem(event, itemEl) {
      if (!this.hover) {
        if (this.isCollapsed && this.isFirstLevel && !this.isMobileItem) {
          if (this.mobileItem) {
            this.$emit("unset-mobile-item", true);
          }
          this.$nextTick(() => {
            if (this.mobileItem !== this.item) {
              this.$emit("set-mobile-item", { item: this.item, itemEl });
            }
          });
          if (event.type === "click" && !this.itemHasChild) {
            setTimeout(() => {
              if (this.mobileItem) {
                this.$emit("unset-mobile-item", false);
              }
            }, 0);
          }
        }
      }
    },
    initState() {
      this.initActiveState();
      this.initShowState();
    },
    initActiveState() {
      this.active = this.isLinkActive(this.item);
      this.exactActive = this.isLinkExactActive(this.item);
    },
    initShowState() {
      if (!this.itemHasChild || this.showChild) return;
      if (
        (this.showOneChild && this.active && !this.show) ||
        (this.active && !this.show)
      ) {
        this.show = true;
      } else if (this.showOneChild && !this.active && this.show) {
        this.show = false;
      }
    },
    mouseOverEvent(event) {
      event.stopPropagation();
      if (this.item.disabled) return;
      this.itemHover = true;
      this.emitMobileItem(event, event.currentTarget);
    },
    mouseOutEvent(event) {
      event.stopPropagation();
      this.itemHover = false;
    },
    expandEnter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    expandAfterEnter(el) {
      el.style.height = "auto";
    },
    expandBeforeLeave(el) {
      if (this.isCollapsed && this.isFirstLevel) {
        el.style.display = "none";
        return;
      }
      el.style.height = el.scrollHeight + "px";
    },
  },
  inject: ["emitActiveShow", "emitItemClick", "emitItemUpdate"],
};
</script>
