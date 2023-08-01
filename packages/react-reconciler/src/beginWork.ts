import { FiberNode } from './fiber';

export const beginWork = (fiber: FiberNode) => {
	// 1. diff
	console.log(fiber);
};
