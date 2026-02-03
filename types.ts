import React from 'react';

interface IconifyIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  icon?: string;
  width?: string | number;
  height?: string | number;
  [key: string]: any;
}

interface LottiePlayerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string;
  background?: string;
  speed?: string | number;
  style?: React.CSSProperties;
  hover?: boolean | string;
  [key: string]: any;
}

interface WistiaPlayerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  'media-id'?: string;
  'wistia-popover'?: string;
  aspect?: string | number;
  [key: string]: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyIconProps;
      'lottie-player': LottiePlayerProps;
      'wistia-player': WistiaPlayerProps;
      [elemName: string]: any;
    }
  }
}

export {};