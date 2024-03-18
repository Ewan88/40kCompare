<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'App',
		data() {
			return {
				weapons: [] as Weapon[],
			};
		},
		methods: {
			addWeaponToList(weapon: Weapon) {
				console.log(weapon);
				this.weapons.push(weapon as Weapon);
			},
			deleteWeaponFromList(index: number) {
				this.weapons.splice(index, 1);
			},
		},
	});
</script>

<template>
	<h1>40K Compare</h1>
	<nav>
		<RouterLink to="/">Units</RouterLink>
		<RouterLink to="/weapons">Weapons</RouterLink>
	</nav>
	<main>
		<RouterView />
	</main>
</template>
