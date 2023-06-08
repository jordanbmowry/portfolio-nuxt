declare module 'nuxt-storage' {
  export namespace localStorage {
    export function getData(key: string): any;
    export function setData(
      key: string,
      value: any,
      expiry?: string,
      unit?: string
    ): any;
    export function removeItem(key: string): void;
    export function clear(): void;
  }

  export namespace sessionStorage {
    export function getData(key: string): any;
    export function setData(
      key: string,
      value: any,
      expiry?: string,
      unit?: string
    ): any;
    export function removeItem(key: string): void;
    export function clear(): void;
  }

  const storage: {
    localStorage: typeof localStorage;
    sessionStorage: typeof sessionStorage;
  };

  export default storage;
}
