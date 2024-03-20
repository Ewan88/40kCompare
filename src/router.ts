import { createMemoryHistory, createRouter } from 'vue-router';

import UnitComparisonVue from './pages/UnitComparison.vue';
import WeaponComparisonVue from './pages/WeaponComparison.vue';
import ArmyComparisonVue from './pages/ArmyComparison.vue';

const routes = [
	{ path: '/', component: UnitComparisonVue },
	{ path: '/weapons', component: WeaponComparisonVue },
	{ path: '/armies', component: ArmyComparisonVue },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
