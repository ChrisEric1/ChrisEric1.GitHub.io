/**
 * Discord's dispatcher described. Too lazy to comment everything.
 */
export default interface DispatcherTypes {
    _subscriptions: any,
    _waitQueue: (() => void)[],
    _processingWaitQueue: boolean,
    _currentDispatchActionType: string | null,
    _orderedActionHandlers: any,
    _orderedCallbackTokens: any,
    _lastID: number,
    _dependencyGraph: any

    isDispatching():boolean,
    /**
     * If the dispatcher isn't dispatching, then dispatch
     */
    maybeDispatch(event: {type: string, [k: string]:any}):void,
    /**
     * Wait until the dispatcher finished dispatching, then dispatch
     */
    dirtyDispatch(event: {type: string, [k: string]:any}):void,
    /**
     * dispatch
     */
    dispatch(event: {type: string, [k: string]:any}):void,
    /** Same as dispatcher.dispatch */
    _dispatch(event: {type: string, [k: string]:any}):void,
    /**
     * Intercept events before they happens, if returning true, then the event will be blocked from dispatching.
     */
    setInterceptor(interceptor: (event) => boolean):void,
    /**
     * Wait until the dispatcher has finished dispatching
     */
    wait(waiting: () => void):void,
    /** Subscribe to an event */
    subscribe(event: string, listener: (event: {type: string, [k: string]:any}) => void):void,
    /**
     * Unsubscribe from the event. 
     */
    unsubscribe(event: string, listener: (event: {type: string, [k: string]:any}) => void):void,
    register(name: string, actionHandler: any, storeDidChange: any):void
    addDependencies,
    _invalidateCaches,
    _processWaitQueue,
    _computeOrderedActionHandlers,
    _computeOrderedCallbackTokens
}