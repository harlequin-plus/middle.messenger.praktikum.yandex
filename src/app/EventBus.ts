type EventCallback = (...args: any[]) => void;

class EventBus {
  private listeners: { [event: string]: EventCallback[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: EventCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: EventCallback): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: any[]): void {
    console.log(args)
    if (!this.listeners[event]) {
      return
      //throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventBus
