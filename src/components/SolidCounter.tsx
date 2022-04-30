/** @jsxImportSource solid-js */

import { useSharedContext } from 'lib/SharedContext/Solid';
import { Counter } from 'models/Counter';

/** a counter written with Solid */
export default function SolidCounter({ children }) {
	const count = useSharedContext(Counter.count)

	return (
		<>
			<div id="solid" class="counter">
				<button onClick={Counter.decrement}>-</button>
				<pre>{count()}</pre>
				<button onClick={Counter.increment}>+</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	);
}
