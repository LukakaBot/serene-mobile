<template>
  <div :style="iconStyle">
    <image :src="iconName" :style="iconStyle" v-if="isLocalIcon" />
    <span :class="iconName" :style="iconStyle" v-else></span>
  </div>
</template>

<script lang="ts">
export default {
  options: {
    virtualHost: true,
  },
};
</script>

<script setup lang="ts">
import type { CSSProperties } from "vue";

interface Props {
  /** 图标名 */
  name: string;
  /** 图标颜色 */
  color?: string;
  /** 图标大小 */
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: "currentColor",
  size: 48,
});

const isLocalIcon = computed(() => !!props.name?.startsWith("icon-"));

const iconName = computed(() => {
  return isLocalIcon.value ? `/static/svg/${props.name}.svg` : props.name;
});

const iconSizeWithUnit = computed(() => props.size + "rpx");

const iconStyle = computed<CSSProperties>(() => {
  return {
    display: "inline-block",
    width: iconSizeWithUnit.value,
    height: iconSizeWithUnit.value,
    color: props.color,
    verticalAlign: "middle",
  };
});
</script>

<style scoped></style>
