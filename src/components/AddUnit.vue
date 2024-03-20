<template>
	<tr :class="{ edit, editing: editing == true }">
		<td>
			<input
				type="text"
				v-model="Unit"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="number"
				v-model.number="Movement"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="number"
				v-model.number="Toughness"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="number"
				v-model.number="Save"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="number"
				v-model.number="Wounds"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="number"
				v-model.number="Leadership"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="number"
				v-model.number="ObjectiveControl"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="text"
				v-model="Abilities"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td>
			<input
				type="number"
				v-model.number="Points"
				@keyup.enter="addUnit"
				@focus="editing = true"
				@blur="editing = false"
			/>
		</td>
		<td class="button green" @click="addUnit">
			<div v-if="Unit !== '' && Points !== 0">✔</div>
		</td>
	</tr>
</template>

<style scoped>
	td {
		padding: 0;
	}

	.button {
		padding-left: 20px;

		&:hover {
			color: green;
		}
	}
</style>

<script lang="ts">
	import { defineComponent, watch } from 'vue';
	export default defineComponent({
		data() {
			return {
				Unit: '',
				Movement: 0,
				Toughness: 0,
				Save: 0,
				Wounds: 0,
				Leadership: 0,
				ObjectiveControl: 0,
				Abilities: '',
				Points: 0,
				editing: false,
			};
		},
		created() {
			watch(
				() => this.Movement,
				(newVal) => {
					if (newVal > 99) {
						this.Movement = 99;
					}
					if (newVal < 0) {
						this.Movement = 0;
					}
				},
			);
			watch(
				() => this.Toughness,
				(newVal) => {
					if (newVal > 99) {
						this.Toughness = 99;
					}
					if (newVal < 0) {
						this.Toughness = 0;
					}
				},
			);
			watch(
				() => this.Save,
				(newVal) => {
					if (newVal > 99) {
						this.Save = 99;
					}
					if (newVal < 0) {
						this.Save = 0;
					}
				},
			);
			watch(
				() => this.Wounds,
				(newVal) => {
					if (newVal > 99) {
						this.Wounds = 99;
					}
					if (newVal < 0) {
						this.Wounds = 0;
					}
				},
			);
			watch(
				() => this.Leadership,
				(newVal) => {
					if (newVal < 0) {
						this.Leadership = 0;
					}
					if (newVal > 99) {
						this.Leadership = 99;
					}
				},
			);
			watch(
				() => this.ObjectiveControl,
				(newVal) => {
					if (newVal > 99) {
						this.ObjectiveControl = 99;
					}
					if (newVal < 0) {
						this.ObjectiveControl = 0;
					}
				},
			);
			watch(
				() => this.Points,
				(newVal) => {
					if (newVal > 999) {
						this.Points = 999;
					}
					if (newVal < 0) {
						this.Points = 0;
					}
				},
			);
		},
		methods: {
			addUnit() {
				if (
					!this.Unit ||
					this.Points <= 0 ||
					this.Movement < 0 ||
					this.Movement > 99 ||
					this.Toughness < 0 ||
					this.Toughness > 99 ||
					this.Save < 0 ||
					this.Save > 99 ||
					this.Wounds < 0 ||
					this.Wounds > 99 ||
					this.Leadership < 0 ||
					this.Leadership > 99 ||
					this.ObjectiveControl < 0 ||
					this.ObjectiveControl > 99
				) {
					return;
				}
				this.$emit('add-unit', {
					Unit: this.Unit,
					Movement: this.Movement,
					Toughness: this.Toughness,
					Save: this.Save,
					Wounds: this.Wounds,
					Leadership: this.Leadership,
					ObjectiveControl: this.ObjectiveControl,
					Abilities: this.Abilities,
					Points: this.Points,
				});
			},
		},
		emits: ['add-unit'],
	});
</script>
