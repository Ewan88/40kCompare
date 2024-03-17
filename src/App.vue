<script lang="ts">
	import { defineComponent } from 'vue';
	import AddWeapon from './components/AddWeapon.vue';
	import WeaponCard from './components/WeaponCard.vue';

	export default defineComponent({
		name: 'App',
		components: {
			AddWeapon: AddWeapon,
			WeaponCard: WeaponCard,
		},
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
	<table>
		<tr>
			<th></th>
			<th>R</th>
			<th>A</th>
			<th>BS</th>
			<th>S</th>
			<th>AP</th>
			<th>D</th>
			<th></th>
		</tr>
		<tr>
			<AddWeapon @add-weapon="addWeaponToList" />
		</tr>
		<tr v-for="(weapon, index) in weapons" :key="index">
			<WeaponCard
				:weapon="weapon"
				@delete-weapon="deleteWeaponFromList(index)"
			/>
		</tr>
	</table>
</template>
