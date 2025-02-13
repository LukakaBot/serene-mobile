<template>
	<div class="flex flex-col h-full">
		<div class="flex-1">
			<slot>main</slot>
		</div>
		<BaseTabbar />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
