declare class EventEmitter {
    listeners: {
        [key: string]: Function[];
    };
    constructor();
    on(event: string, cb: Function): void;
    emit(event: string, ...args: string[]): void;
    removeListener(event: string, listener: Function): void;
    once(event: string, listener: Function): void;
    removeAllListener(event: string): void;
}
export default EventEmitter;
