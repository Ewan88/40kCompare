import { createMemoryHistory, createRouter } from 'vue-router';

import UnitComparisonVue from './pages/UnitComparison.vue';
import WeaponComparisonVue from './pages/WeaponComparison.vue';

const routes = [
	{ path: '/', component: UnitComparisonVue },
	{ path: '/weapons', component: WeaponComparisonVue },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
