import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	IReactElement,
	ElementType
} from 'shared/ReactTypes';

// react source code here params (type, key, ref, self, source, owner, props)
// self、source、 owner params are used development environments

/**
 * Create a React element with the given type, key, ref, and props.
 *
 * @param {Type} type - The type of the React element
 * @param {Key} key - The key of the React element
 * @param {Ref} ref - The ref of the React element
 * @param {Props} props - The props of the React element
 * @return {IReactElement} The created React element
 */
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

export const jsx = (type: ElementType, conf: any, maybeKey: any) => {
	let key: Key = null;
	let ref: Ref = null;

	const props: Props = {};

	if (maybeKey !== undefined) {
		key = '' + maybeKey;
	}

	if (hasValidKey(conf)) {
		key = '' + conf.key;
	}

	if (hasValidRef(conf)) {
		ref = conf.ref;
	}

	// handle jsx properties
	for (const prop in conf) {
		const val = conf[prop];
		if (
			Object.hasOwnProperty.call(conf, prop) &&
			// eslint-disable-next-line no-prototype-builtins
			!RESERVED_PROPS.hasOwnProperty(prop)
		) {
			props[prop] = val;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;

export const createElement = (
	type: ElementType,
	conf: any,
	...children: any[]
) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	if (conf != null) {
		if (hasValidRef(conf)) {
			ref = conf.ref;
		}

		if (hasValidKey(conf)) {
			key = '' + conf.key;
		}

		for (const prop in conf) {
			if (
				Object.hasOwnProperty.call(conf, prop) &&
				!Object.hasOwnProperty.call(RESERVED_PROPS, prop)
			) {
				props[prop] = conf[prop];
			}
		}
	}

	const childLen = children.length;
	if (childLen === 1) {
		props.childLen = children;
	} else if (childLen > 1) {
		const childArray = Array(childLen);
		for (let i = 0; i < childLen; i++) {
			childArray.push(children[i]);
		}
		props.children = childArray;
	}

	return ReactElement(type, key, ref, props);
};
