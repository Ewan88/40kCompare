<template>
	<div>
		<select v-model="selectedArmyIndex">
			<option disabled value="0">Select an army</option>
			<option v-for="index in armies.length" :key="index" :value="index">
				{{ `Army ${index}` }}
			</option>
		</select>

		<table v-if="selectedArmy">
			<tr v-for="(unit, index) in selectedArmy.units" :key="index">
				<td>{{ unit.Unit }}</td>
				<td>{{ unit.Movement }}</td>
				<td>{{ unit.Toughness }}</td>
				<td>{{ unit.Save }}</td>
				<td>{{ unit.Wounds }}</td>
				<td>{{ unit.Leadership }}</td>
				<td>{{ unit.ObjectiveControl }}</td>
				<td>{{ unit.Abilities }}</td>
				<td>{{ unit.Points }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import { ref, computed } from 'vue';
	import { useStore } from '../store';

	export default {
		setup() {
			const store = useStore();
			const selectedArmyIndex = ref(0);
			const selectedArmy = computed(() => {
				return selectedArmyIndex.value >= 1
					? store.armies[selectedArmyIndex.value - 1]
					: null;
			});

			return {
				armies: store.armies,
				selectedArmyIndex,
				selectedArmy,
			};
		},
	};
</script>
