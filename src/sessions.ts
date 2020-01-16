// Memory session store.
// TODO: Remove old sessions. (Timers?)

import uuidv1 from 'uuid/v1';
import { EventEmitter } from 'events';

class SessionStore extends EventEmitter {
  private storage = new Map<string, object>();
  private static instance: SessionStore;

  private constructor() {
    super();
  }

  public static getInstance(): SessionStore {
    if (!SessionStore.instance) {
      SessionStore.instance = new SessionStore();
    }
    return SessionStore.instance;
  }

  public create(): string {
    const uuid = uuidv1(); // Timestamp based
    this.storage.set(uuid, {
      // Defaults.
      creationTime: Math.round(new Date().getTime() / 1000) // UTC seconds
    });
    this.emit('create', uuid);
    return uuid;
  }

  public has(key: string): boolean {
    return this.storage.has(key)
  }

  public get(key: string): any {
    return this.storage.get(key);
  }

  public set(key: string, value: any): Map<string, any> {
    if (this.has(key)) {
      return this.storage.set(key, value)
    }
  }
}

export default SessionStore;