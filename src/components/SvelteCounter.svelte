
<script>
import { useSharedContext } from 'lib/SharedContext/Svelte';
import { Counter } from 'models/Counter';

const count = useSharedContext(Counter.count);
</script>

<div class="counter">
  <button on:click={Counter.decrement}>-</button>
  <pre>{ $count }</pre>
  <button on:click={Counter.increment}>+</button>
</div>
<div class="counter-message">
  <slot />
</div>
