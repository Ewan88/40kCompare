<template>
	<table>
		<tr>
			<td colspan="8" class="hidden break">Add Unit</td>
		</tr>
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
		<AddUnit
			@add-unit="addUnitToList"
			@input-focus="editing = true"
			@input-blur="editing = false"
		/>
		<tr>
			<td colspan="8" class="hidden break">Unit List</td>
		</tr>
		<tr v-for="(unit, index) in units" :key="index">
			<UnitCard :unit="unit" @delete-unit="deleteUnitFromList(index)" />
		</tr>
		<tr v-if="units.length > 0">
			<td colspan="8" class="hidden"></td>
			<td class="total">{{ countPoints() }}</td>
			<td class="button" @click="saveArmy()">💾</td>
		</tr>
	</table>
</template>

<style scoped>
	.hidden {
		border: none;
	}

	.break {
		padding-top: 20px;
	}

	.total {
		font-weight: bold;
	}

	.button:hover {
		color: white;
	}
</style>

<script lang="ts">
	import { defineComponent } from 'vue';
	import AddUnit from '../components/AddUnit.vue';
	import UnitCard from '../components/UnitCard.vue';
	import { useStore } from '../store';

	export default defineComponent({
		name: 'App',
		components: {
			AddUnit: AddUnit,
			UnitCard: UnitCard,
		},
		data() {
			return {
				units: [] as Unit[],
				editing: false,
				points: 0,
			};
		},
		methods: {
			countPoints() {
				let total = 0;
				this.units.forEach((unit) => {
					total += unit.Points;
				});
				this.points = total;
				return total;
			},
			addUnitToList(unit: Unit) {
				console.log(unit);
				this.units.push(unit as Unit);
			},
			deleteUnitFromList(index: number) {
				this.units.splice(index, 1);
			},
			saveArmy() {
				const store = useStore();
				store.saveArmy(this.units, this.points);
			},
			downloadArmy() {
				const jsonUnits = JSON.stringify(this.units);
				const blob = new Blob([jsonUnits], { type: 'application/json' });
				const url = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.download = 'unitList.json';
				link.click();
				URL.revokeObjectURL(url);
			},
		},
	});
</script>
