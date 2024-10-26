export {};

declare global {
  interface Array<T> {
    filterString(
      value?: string,
      arrayOfKeys?: string[]
    ): T[];
  }
}
