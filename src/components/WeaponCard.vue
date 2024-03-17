<template>
	<td>{{ weapon.Weapon }}</td>
	<td>{{ weapon.Range }}</td>
	<td>{{ weapon.Attacks }}</td>
	<td>{{ weapon.BallisticSkill }}</td>
	<td>{{ weapon.Strength }}</td>
	<td>{{ weapon.ArmourPiercing }}</td>
	<td>{{ weapon.Damage }}</td>
	<td>{{ weapon.Abilities }}</td>
	<td class="button red">❌</td>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({
		props: {
			weapon: {
				type: Object,
				required: true,
			},
		},
	});
</script>
