<template>
	<td>
		<input type="text" v-model="Unit" />
	</td>
	<td>
		<input type="number" v-model.number="Movement" />
	</td>
	<td>
		<input type="number" v-model.number="Toughness" />
	</td>
	<td>
		<input type="number" v-model.number="Save" />
	</td>
	<td>
		<input type="number" v-model.number="Wounds" />
	</td>
	<td>
		<input type="number" v-model.number="Leadership" />
	</td>
	<td>
		<input type="number" v-model.number="ObjectiveControl" />
	</td>
	<td>
		<input type="text" v-model="Abilities" />
	</td>
	<td>
		<input type="number" v-model.number="Points" />
	</td>
	<td v-if="Unit !== '' && Points !== 0" class="button green" @click="addUnit">
		✅
	</td>
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
				Unit: '',
				Movement: 0,
				Toughness: 0,
				Save: 0,
				Wounds: 0,
				Leadership: 0,
				ObjectiveControl: 0,
				Abilities: '',
				Points: 0,
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
					if (newVal > 0) {
						this.Leadership = 0;
					}
					if (newVal < -99) {
						this.Leadership = -99;
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
