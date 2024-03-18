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
		<tr v-if="units.length > 0">
			<td colspan="8" class="hidden"></td>
			<td class="total">{{ countPoints() }}</td>
		</tr>
	</table>
</template>

<style scoped>
	.hidden {
		border: none;
	}

	.total {
		font-weight: bold;
	}
</style>

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
			countPoints() {
				let total = 0;
				this.units.forEach((unit) => {
					total += unit.Points;
				});
				return total;
			},
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
