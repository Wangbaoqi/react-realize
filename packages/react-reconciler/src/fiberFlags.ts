// no sideEffect
export const NoFlags = 0b0000001;
// insert sideEffect
export const Placement = 0b0000010;
export const Update = 0b0000100;
export const ChildDeletion = 0b0001000;
export type Flags = number;
