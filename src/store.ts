import { defineStore } from 'pinia';

export const useStore = defineStore({
	id: 'main',
	state: () => ({
		armies: [] as Array<{ units: Unit[]; points: number }>,
	}),
	actions: {
		saveArmy(units: Unit[], points: number) {
			const newArmy = { units, points };
			this.armies.push(newArmy);
		},
	},
});
