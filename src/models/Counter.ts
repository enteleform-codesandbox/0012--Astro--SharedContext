//###  App  ###//
import {Selector} from "lib/SharedContext"

//###  NPM  ###//
import {createMachine, interpret, assign} from "xstate"


//####################################################################################################################//
//##>  Setup                                                                                                        ##//
//####################################################################################################################//

	type  Context = (typeof context)
	const context = {
		count: 0,
	}

	type Events =
		| {type:"DECREMENT"}
		| {type:"INCREMENT"}

	const machine = createMachine<Context, Events>({
		context,

		on: {
			DECREMENT: {actions:assign({count:({count}) => (count - 1)})},
			INCREMENT: {actions:assign({count:({count}) => (count + 1)})},
		},
	})

	const service = interpret(machine).start()


//####################################################################################################################//
//##>  Exports                                                                                                      ##//
//####################################################################################################################//

	export namespace Counter{
		export const count = Selector(service, "count")

		export function decrement(){service.send("DECREMENT")}
		export function increment(){service.send("INCREMENT")}
	}
