<template>
	<div class='counter'>
		<button @click='Counter.decrement'>-</button>
		<pre>{{ count }}</pre>
		<button @click='Counter.increment'>+</button>
	</div>
	<div class='counter-message'>
		<slot />
	</div>
</template>

<script>
import { useSharedContext } from 'lib/SharedContext/Vue';
import { Counter } from 'models/Counter';
import { ref } from 'vue';
export default {
	setup(){
		const count = useSharedContext(Counter.count);

		return {
			count,
			Counter,
		};
	},
};
</script>
