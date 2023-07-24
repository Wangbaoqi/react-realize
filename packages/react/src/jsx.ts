import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	IReactElement,
	ElementType
} from 'shared/ReactTypes';

// react.createElement

export const ReactElement = (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): IReactElement => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'nateWang'
	};
	return element;
};

const RESERVED_PROPS = {
	key: true,
	ref: true,
	__self: true,
	__source: true
};

const hasValidKey = (config: any): boolean => {
	return config.key !== undefined;
};

const hasValidRef = (config: any): boolean => {
	return config.ref !== undefined;
};

export const jsx = (type: ElementType, conf: any, ...child: any[]) => {
	let key: Key = null;
	let ref: Ref = null;

	const props: Props = {};

	if (hasValidKey(conf)) {
		key = `${conf.key}`;
	}

	if (hasValidRef(conf)) {
		ref = `${conf.ref}`;
	}

	// handle jsx properties
	for (const prop in conf) {
		const val = conf[prop];

		if (
			Object.hasOwnProperty.call(conf, prop) &&
			!RESERVED_PROPS.hasOwnProperty.call(conf, prop)
		) {
			props[prop] = val;
		}

		const childLength = child.length;
		if (childLength) {
			if (childLength === 1) {
				props.children = child[0];
			} else {
				props.children = child;
			}
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
