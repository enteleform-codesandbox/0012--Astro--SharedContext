/** @jsxImportSource preact */

import { useSharedContext } from 'lib/SharedContext/Preact';
import { Counter } from 'models/Counter';

/** a counter written in Preact */
export default function PreactCounter({ children }) {
	const count = useSharedContext(Counter.count)

	return (
		<>
			<div class="counter">
				<button onClick={Counter.decrement}>-</button>
				<pre>{count}</pre>
				<button onClick={Counter.increment}>+</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	);
}
