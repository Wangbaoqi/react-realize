import {
	appendInitialChild,
	createInstance,
	createTextInstance
} from 'hostConfig';
import { FiberNode } from './fiber';
import { HostComponent, HostRoot, HostText } from './workTags';
import { NoFlags } from './fiberFlags';

export const completeWork = (wip: FiberNode) => {
	// 1. diff

	const newProps = wip.pendingProps;
	const current = wip.alternate;

	switch (wip.tag) {
		case HostComponent:
			if (current !== null && wip.stateNode) {
				// update
			} else {
				// build  DOM
				const instance = createInstance(wip.type, newProps);
				// DOM insert DOM tree
				appendAllChildren(instance, wip);
				wip.stateNode = instance;
			}
			bubbleProperties(wip);
			return null;
		case HostText:
			if (current !== null && wip.stateNode) {
				// update
			} else {
				// build  DOM
				const instance = createTextInstance(wip.type, newProps);
				// DOM insert DOM tree
				wip.stateNode = instance;
			}
			bubbleProperties(wip);
			return null;
		case HostRoot:
			break;
		default:
			if (__DEV__) {
				console.warn('未实现的completeWork', wip);
			}
			break;
	}
};

function appendAllChildren(parent: FiberNode, wip: FiberNode) {
	let node = wip.child;

	while (node !== null) {
		if (node.tag === HostComponent || node.tag === HostText) {
			appendInitialChild(parent, node.stateNode);
		} else if (node.child !== null) {
			node.child.return = parent;
			node = node.child;
			continue;
		}

		if (node === wip) {
			return;
		}

		while (node?.sibling === null) {
			if (node.return === null || node.return === wip) return;
			node = node?.sibling;
		}

		if (node === null) return;

		node.sibling.return = node?.return;
		node = node?.sibling;
	}
}

function bubbleProperties(wip: FiberNode) {
	const subtreeFlags = NoFlags;
	let child = wip.child;

	while (child !== null) {
		subtreeFlags != child.subtreeFlags;
		subtreeFlags != child.flags;

		child.return = wip;
		child = child.sibling;
	}

	wip.subtreeFlags != subtreeFlags;
}
