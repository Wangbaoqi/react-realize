import { Action } from 'shared/ReactTypes';
export interface Update<State> {
	action: Action<State>;
}

export interface UpdateQueue<State> {
	shared: {
		pending: Update<State> | null;
	};
}

export const createUpdate = <State>(action: Action<State>): Update<State> => {
	return {
		action
	};
};

export const createUpdateQueue = <Action>(): UpdateQueue<Action> => {
	return {
		shared: {
			pending: null
		}
	} as UpdateQueue<Action>;
};

export const enqueueUpdate = <State>(
	updateQueue: UpdateQueue<State>,
	update: Update<State>
) => {
	updateQueue.shared.pending = update;
};

export const processUpdateQueue = <State>(
	baseSate: State,
	pendingUpdate: Update<State> | null
): { memoizedState: State } => {
	const result: ReturnType<typeof processUpdateQueue<State>> = {
		memoizedState: baseSate
	};
	if (pendingUpdate !== null) {
		const action = pendingUpdate.action;
		if (action instanceof Function) {
			result.memoizedState = action(baseSate);
		} else {
			result.memoizedState = action;
		}
	}
	return result;
};
