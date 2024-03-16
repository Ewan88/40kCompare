<template>
	<table>
		<tr>
			<th>Weapon</th>
			<th>Range</th>
			<th>Attacks</th>
			<th>Ballistic Skill</th>
			<th>Strength</th>
			<th>Armour Piercing</th>
			<th>Damage</th>
			<th>Abilities</th>
		</tr>
		<tr>
			<td><input type="text" v-model="input1" /></td>
			<td><input type="number" v-model="input2" /></td>
			<td><input type="number" v-model="input3" /></td>
			<td><input type="number" v-model="input4" /></td>
			<td><input type="number" v-model="input5" /></td>
			<td><input type="number" v-model="input6" /></td>
			<td><input type="number" v-model="input7" /></td>
			<td><input type="text" v-model="input8" /></td>
		</tr>
	</table>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'WeaponCard',
		data() {
			return {
				input1: '',
				input2: 0,
				input3: 0,
				input4: 0,
				input5: 0,
				input6: 0,
				input7: 0,
				input8: '',
			};
		},
	});
</script>
