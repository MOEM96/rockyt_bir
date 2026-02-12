import React from 'react';

// Define custom element props interfaces
export interface IconifyIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  icon?: string;
  width?: string | number;
  height?: string | number;
  class?: string;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
  style?: React.CSSProperties;
}

export interface LottiePlayerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  ref?: any;
  src?: string;
  background?: string;
  speed?: string | number;
  loop?: boolean;
  autoplay?: boolean;
  mode?: string;
  preserveAspectRatio?: string;
  'aria-label'?: string;
  class?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface WistiaPlayerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  [key: string]: any;
}

export interface DotLottiePlayerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string;
  background?: string;
  speed?: string | number;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  mode?: string;
  [key: string]: any;
}

// Page types
export type PageType = 'home' | 'performance' | 'cases';
export type CaseCategory = 'all' | 'agency' | 'ecom' | 'app';
export type Platform = 'meta' | 'tiktok' | 'snapchat';

// Common prop interfaces
export interface NavigationProps {
  onNavigate: (page: PageType) => void;
}

export interface DemoBookingProps {
  onBookDemo: () => void;
}

export interface BasePageProps extends DemoBookingProps {}

// Data interfaces
export interface CaseStudy {
  id: string;
  size: 'big' | 'small';
  category: CaseCategory;
  title: string;
  image: string;
  logo: string;
  platforms: Platform[];
  bgColor?: string;
  textColor?: string;
  logoInvert?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export interface PerformanceSection {
  id: string;
  label: string;
}

export interface PricingTier {
  events: string;
  price: string;
  highlighted?: boolean;
}

export interface CompanyStat {
  value: string;
  label: string;
  color: 'yellow' | 'pink' | 'blue';
}

export interface CustomerLogo {
  name: string;
  src: string;
  alt: string;
}

// Augment the global JSX namespace to add custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyIconProps;
      'lottie-player': LottiePlayerProps;
      'wistia-player': WistiaPlayerProps;
      'dotlottie-player': DotLottiePlayerProps;
    }
  }
}

// Augment React namespace for newer TypeScript/React versions
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyIconProps;
      'lottie-player': LottiePlayerProps;
      'wistia-player': WistiaPlayerProps;
      'dotlottie-player': DotLottiePlayerProps;
    }
  }
}
