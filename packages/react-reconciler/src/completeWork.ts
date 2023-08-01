import { FiberNode } from './fiber';

export const completeWork = (fiber: FiberNode) => {
	// 1. diff
	console.log(fiber);
};
