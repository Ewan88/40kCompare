<template>
	<div>
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
			<AddWeapon @add-weapon="addWeaponToList" />
			<tr v-for="(weapon, index) in weapons" :key="index">
				<WeaponCard
					:weapon="weapon"
					@delete-weapon="deleteWeaponFromList(index)"
				/>
			</tr>
		</table>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import AddWeapon from '../components/AddWeapon.vue';
	import WeaponCard from '../components/WeaponCard.vue';

	export default defineComponent({
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
