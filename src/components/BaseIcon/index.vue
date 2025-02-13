<template>
	<div>
		<wd-icon :name="name" :size="iconSizeWithUnit" />
	</div>
</template>

<script setup lang="ts">
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

const iconSizeWithUnit = computed(() => props.size + 'rpx');
</script>

<style scoped></style>
