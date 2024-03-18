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
	<td class="button red" @click="deleteUnit">❌</td>
</template>

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
