<template>
	<div>
		<wd-icon :name="name" :size="iconSizeWithUnit" v-if="isLocalIcon" />
		<div :class="[iconName]" :style="iconStyle" v-else></div>
	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

interface Props {
	/** 图标名 */
	name: string;
	/** 图标颜色 */
	color?: string;
	/** 图标大小 */
	size?: number;
}

const props = withDefaults(defineProps<Props>(), {
	color: '#000',
	size: 48,
});

const isLocalIcon = computed(() => props.name.startsWith('icon-'));

const iconName = computed(() =>
	isLocalIcon.value ? `/static/svg/${props.name}.svg` : props.name
);

const iconSizeWithUnit = computed(() => props.size + 'rpx');

const iconStyle = computed<CSSProperties>(() => {
	return {
		width: iconSizeWithUnit.value,
		height: iconSizeWithUnit.value,
		color: props.color,
	};
});
</script>

<style scoped></style>
