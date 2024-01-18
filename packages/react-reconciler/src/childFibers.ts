import { IReactElement } from 'shared/ReactTypes';
import { FiberNode, createFiberFromElement } from './fiber';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import { HostText } from './workTags';
import { Placement } from './fiberFlags';

function ChildReconciler(shouldTrackEffects: boolean) {
	function reconcilerSingleElement(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		element: IReactElement
	) {
		const fiber = createFiberFromElement(element);
		fiber.return = returnFiber;
		return fiber;
	}

	function reconcilerSingleTextNode(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		content: string | number
	) {
		const fiber = new FiberNode(HostText, { content }, null);
		fiber.return = returnFiber;
		return fiber;
	}

	function placeSingleChild(fiber: FiberNode) {
		if (shouldTrackEffects && fiber.alternate === null) {
			fiber.flags |= Placement;
		}
		return fiber;
	}

	return function reconcilerChildFibers(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		newChild?: IReactElement
	) {
		// 判断当前Fiber的类型
		if (typeof newChild === 'object' && newChild !== null) {
			switch (newChild.$$typeof) {
				case REACT_ELEMENT_TYPE:
					return reconcilerSingleElement(returnFiber, currentFiber, newChild);

				default:
					if (__DEV__) {
						console.warn('未实现reconciler类型', newChild);
					}
					break;
			}
		}

		// TODO: 多节点

		// HostText
		if (typeof newChild === 'string' || typeof newChild === 'number') {
			return reconcilerSingleTextNode(returnFiber, currentFiber, newChild);
		}

		if (__DEV__) {
			console.warn('未实现reconciler类型', newChild);
		}

		return null;
	};
}

export const reconcilerChildFibers = ChildReconciler(false);
export const mountChildFibers = ChildReconciler(true);
