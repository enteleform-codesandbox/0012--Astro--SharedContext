/** @jsxImportSource react */

import { useSharedContext } from 'lib/SharedContext/React';
import { Counter } from 'models/Counter';

/** a counter written in React */
export default function ReactCounter({ children }) {
	const count = useSharedContext(Counter.count)

	return (
		<>
			<div className="counter">
				<button onClick={Counter.decrement}>-</button>
				<pre>{count}</pre>
				<button onClick={Counter.increment}>+</button>
			</div>
			<div className="counter-message">{children}</div>
		</>
	);
}
