declare module "@laravext/react" {
  export const createLaravextApp: any;
  export const createLaravextSsrApp: any;
  export const Head: any;
  export const Link: any;
}

declare module "@laravext/react/server" {
  export const serve: any;
}

declare module "@laravext/react/tools" {
  export const resolveComponent: any;
}

declare module "@laravext/react/router" {
  export const visit: any;
}

declare module "@laravext/react/progress" {
  export const injectCSS: any;
  export const setupProgress: any;
  export const startProgress: any;
  export const moveProgress: any;
  export const endProgress: any;
}
