export type Type = unknown;
export type Key = unknown;
export type Ref = unknown;
export type Props = any;
export type ElementType = unknown;

export interface IReactElement {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	props: Props;
	ref: Ref;
	__mark: string;
}
