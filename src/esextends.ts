
export type Constructor<T = {}> = new (...args: any[]) => T;

export type Class<T = {}> = Constructor<T>;

/**
 * runtime decorators should always return decorated class to be used later on.
 */
export type RuntimeClassDecorator<T> = (target: Class<T>) => Class<T>;
