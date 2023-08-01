import { Key, Props, Ref } from 'shared/ReactTypes';
import { workTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';
import { Container } from 'hostConfig';
export class FiberNode {
	tag: workTag;
	key: Key;
	stateNode: any;
	type: any;

	return: FiberNode | null;
	child: FiberNode | null;
	sibling: FiberNode | null;
	index: number;

	ref: Ref;
	pendingProps: Props | null;
	memoizedProps: Props | null;
	memoizedState: any;
	alternate: FiberNode | null;
	flags: Flags;
	updateQueue: unknown;

	constructor(tag: workTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		this.stateNode = null;
		this.type = null;

		// tree
		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;

		this.ref = null;

		// work unit
		this.pendingProps = pendingProps;
		this.memoizedProps = null;
		this.memoizedState = null;

		this.alternate = null;
		// side effects
		this.flags = NoFlags;

		this.updateQueue = null;
	}
}

export class FiberRootNode {
	container: Container;
	current: FiberNode;
	finishedWork: FiberNode | null;
	constructor(container: Container, hostRootFiber: FiberNode) {
		this.container = container;
		this.current = hostRootFiber;
		hostRootFiber.stateNode = this;
		this.finishedWork = null;
	}
}

export const createWorkInProgress = (
	current: FiberNode,
	pendingProps: Props
): FiberNode => {
	let workInProgress = current.alternate;

	if (workInProgress === null) {
		// mount
		workInProgress = new FiberNode(current.tag, pendingProps, current.key);
		workInProgress.type = current.type;
		workInProgress.stateNode = current.stateNode;
		workInProgress.alternate = current;
		current.alternate = workInProgress;
	} else {
		// update
		workInProgress.pendingProps = pendingProps;
		workInProgress.flags = NoFlags;
	}
	workInProgress.type = current.type;
	workInProgress.updateQueue = current.updateQueue;
	workInProgress.child = current.child;
	workInProgress.memoizedState = current.memoizedState;
	workInProgress.memoizedProps = current.memoizedProps;
	return workInProgress;
};
