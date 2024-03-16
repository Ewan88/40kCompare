<script lang="ts">
	import { defineComponent } from 'vue';
	import WeaponCard from './components/WeaponCard.vue';

	export default defineComponent({
		name: 'App',
		components: {
			WeaponCard,
		},
	});
</script>

<template>
	<WeaponCard />
</template>
