<template>
	<td>
		<input type="text" v-model="Weapon" />
	</td>
	<td>
		<input type="number" v-model.number="Range" />
	</td>
	<td>
		<input type="number" v-model.number="Attacks" />
	</td>
	<td>
		<input type="number" v-model.number="BallisticSkill" />
	</td>
	<td>
		<input type="number" v-model.number="Strength" />
	</td>
	<td>
		<input type="number" v-model.number="ArmourPiercing" />
	</td>
	<td>
		<input type="number" v-model.number="Damage" />
	</td>
	<td>
		<input type="text" v-model="Abilities" />
	</td>
	<td v-if="Weapon !== ''" class="button green" @click="addWeapon">✅</td>
</template>

<style scoped>
	td {
		padding: 0;

		&:hover,
		&:focus {
			outline: 1px solid #7c7c7c;
		}

		&:last-child:hover,
		&:last-child:focus {
			outline: none;
		}
	}

	.button {
		padding-left: 15px;
	}
</style>

<script lang="ts">
	import { defineComponent, watch } from 'vue';

	export default defineComponent({
		data() {
			return {
				Weapon: '',
				Range: 0,
				Attacks: 0,
				BallisticSkill: 0,
				Strength: 0,
				ArmourPiercing: 0,
				Damage: 0,
				Abilities: '',
			};
		},
		created() {
			watch(
				() => this.Range,
				(newVal) => {
					if (newVal > 99) {
						this.Range = 99;
					}
					if (newVal < 0) {
						this.Range = 0;
					}
				},
			);
			watch(
				() => this.Attacks,
				(newVal) => {
					if (newVal > 99) {
						this.Attacks = 99;
					}
					if (newVal < 0) {
						this.Attacks = 0;
					}
				},
			);
			watch(
				() => this.BallisticSkill,
				(newVal) => {
					if (newVal > 99) {
						this.BallisticSkill = 99;
					}
					if (newVal < 0) {
						this.BallisticSkill = 0;
					}
				},
			);
			watch(
				() => this.Strength,
				(newVal) => {
					if (newVal > 99) {
						this.Strength = 99;
					}
					if (newVal < 0) {
						this.Strength = 0;
					}
				},
			);
			watch(
				() => this.ArmourPiercing,
				(newVal) => {
					if (newVal > 0) {
						this.ArmourPiercing = 0;
					}
					if (newVal < -99) {
						this.ArmourPiercing = -99;
					}
				},
			);
			watch(
				() => this.Damage,
				(newVal) => {
					if (newVal > 99) {
						this.Damage = 99;
					}
					if (newVal < 0) {
						this.Damage = 0;
					}
				},
			);
		},
		methods: {
			addWeapon() {
				this.$emit('add-weapon', {
					Weapon: this.Weapon,
					Range: this.Range,
					Attacks: this.Attacks,
					BallisticSkill: this.BallisticSkill,
					Strength: this.Strength,
					ArmourPiercing: this.ArmourPiercing,
					Damage: this.Damage,
					Abilities: this.Abilities,
				});
			},
		},
	});
</script>
