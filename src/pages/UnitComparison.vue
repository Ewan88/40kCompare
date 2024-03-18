<template>
	<table>
		<tr>
			<th></th>
			<th>M</th>
			<th>T</th>
			<th>SV</th>
			<th>W</th>
			<th>LD</th>
			<th>OC</th>
			<th></th>
			<th>pts</th>
		</tr>
		<tr>
			<AddUnit @add-unit="addUnitToList" />
		</tr>
		<tr v-for="(unit, index) in units" :key="index">
			<UnitCard :unit="unit" @delete-unit="deleteUnitFromList(index)" />
		</tr>
	</table>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import AddUnit from '../components/AddUnit.vue';
	import UnitCard from '../components/UnitCard.vue';

	export default defineComponent({
		name: 'App',
		components: {
			AddUnit: AddUnit,
			UnitCard: UnitCard,
		},
		data() {
			return {
				units: [] as Unit[],
			};
		},
		methods: {
			addUnitToList(unit: Unit) {
				console.log(unit);
				this.units.push(unit as Unit);
			},
			deleteUnitFromList(index: number) {
				this.units.splice(index, 1);
			},
		},
	});
</script>
