<template>
	<td>{{ unit.Unit }}</td>
	<td>{{ unit.Movement }}</td>
	<td>{{ unit.Toughness }}</td>
	<td>{{ unit.Save }}</td>
	<td>{{ unit.Wounds }}</td>
	<td>{{ unit.Leadership }}</td>
	<td>{{ unit.ObjectiveControl }}</td>
	<td>{{ unit.Abilities }}</td>
	<td>{{ unit.Points }}</td>
	<td class="button" @click="deleteUnit">❌</td>
</template>

<style scoped>
	.button:hover {
		color: red;
	}
</style>

<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({
		props: {
			unit: {
				type: Object,
				required: true,
			},
		},
		methods: {
			deleteUnit() {
				this.$emit('delete-unit');
			},
		},
	});
</script>
