import { IReactElement } from 'shared/ReactTypes';
import { FiberNode } from './fiber';
import { UpdateQueue, processUpdateQueue } from './updateQueue';
import { HostComponent, HostRoot, HostText } from './workTags';
import { mountChildFibers, reconcilerChildFibers } from './childFibers';

export const beginWork = (wip: FiberNode) => {
	// diff return child fiberNode
	switch (wip.tag) {
		case HostRoot:
			return updateHostRoot(wip);
		case HostComponent:
			return updateHostComponent(wip);
		case HostText:
			return null;
		default:
			if (__DEV__) {
				console.warn('beginWork未实现');
			}
			break;
	}
	return null;
};

function updateHostRoot(wip: FiberNode) {
	const baseSate = wip.memoizedState;
	const updateQueue = wip.updateQueue as UpdateQueue<Element>;
	const pending = updateQueue.shared.pending;
	updateQueue.shared.pending = null;
	const { memoizedState } = processUpdateQueue(baseSate, pending);

	wip.memoizedState = memoizedState;

	const nextChildren = wip.memoizedState;

	reconcilerChildren(wip, nextChildren);

	return wip.child;
}

function updateHostComponent(wip: FiberNode) {
	const nextProps = wip.pendingProps;
	const nextChildren = nextProps.children;
	reconcilerChildren(wip, nextChildren);
	return wip.child;
}

function reconcilerChildren(wip: FiberNode, children?: IReactElement) {
	const current = wip.alternate;
	if (current !== null) {
		// update
		wip.child = reconcilerChildFibers(wip, current, children);
	} else {
		// mount
		wip.child = mountChildFibers(wip, null, children);
	}
}
