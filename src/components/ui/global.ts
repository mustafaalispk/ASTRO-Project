export {};

declare global {
  interface Window {
    Prism: any;
    epi: any;
  }
  namespace JSX {
    interface IntrinsicElements {
      "block-link": any;
    }
  }
}
