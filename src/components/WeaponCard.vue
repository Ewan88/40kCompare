<template>
	<table>
		<tr>
			<td>
				<div class="input-group">
					<span>Weapon</span>
					<input type="text" v-model="Weapon" class="string-input-field" />
				</div>
			</td>
			<td>
				<div class="input-group">
					<span>Range</span>
					<input type="number" v-model.number="Range" class="input-field" />
				</div>
			</td>
			<td>
				<div class="input-group">
					<span>Attacks</span>
					<input type="number" v-model.number="Attacks" class="input-field" />
				</div>
			</td>
			<td>
				<div class="input-group">
					<span>Ballistic Skill</span>
					<input
						type="number"
						v-model.number="BallisticSkill"
						class="input-field"
					/>
				</div>
			</td>
			<td>
				<div class="input-group">
					<span>Strength</span>
					<input type="number" v-model.number="Strength" class="input-field" />
				</div>
			</td>
			<td>
				<div class="input-group">
					<span>Armour Piercing</span>
					<input
						type="number"
						v-model.number="ArmourPiercing"
						class="input-field"
					/>
				</div>
			</td>
			<td>
				<div class="input-group">
					<span>Damage</span>
					<input type="number" v-model.number="Damage" class="input-field" />
				</div>
			</td>
			<td>
				<div class="input-group">
					<span>Abilities</span>
					<input type="text" v-model="Abilities" class="input-field" />
				</div>
			</td>
		</tr>
	</table>
</template>

<script lang="ts">
	import { defineComponent, watch } from 'vue';

	export default defineComponent({
		name: 'WeaponCard',
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
	});
</script>

<style scoped>
	.input-group {
		display: flex;
		align-items: center;
		gap: 10px;

		label {
			margin-right: 5px;
		}
	}

	.input-field {
		width: 7.5ch;
	}

	.string-input-field {
		width: 300px;
	}
</style>
