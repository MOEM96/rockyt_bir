import React from 'react';

// Augment global JSX namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
      'lottie-player': any;
      'wistia-player': any;
    }
  }
}

// Augment React's internal JSX namespace for newer React versions
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
      'lottie-player': any;
      'wistia-player': any;
    }
  }
}

export {};